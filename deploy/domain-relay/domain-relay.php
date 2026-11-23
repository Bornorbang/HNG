<?php
/** Hosting Nigeria domain suggestions relay. Upload to the portal's document root. */
declare(strict_types=1);
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function reply(int $status, array $body): never { http_response_code($status); echo json_encode($body, JSON_UNESCAPED_SLASHES); exit; }
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Allow: POST'); reply(405, ['error' => 'Method not allowed.']); }
$documentRoot = realpath($_SERVER['DOCUMENT_ROOT'] ?? '');
if ($documentRoot === false) { error_log('Domain relay: document root unavailable'); reply(503, ['error' => 'Service unavailable.']); }
// HOME must be the cPanel account home, outside every public document root.
$home = realpath(getenv('HOME') ?: ($_SERVER['HOME'] ?? ''));
if ($home === false || $home === $documentRoot || str_starts_with($home . DIRECTORY_SEPARATOR, $documentRoot . DIRECTORY_SEPARATOR)) { error_log('Domain relay: account home unavailable or public'); reply(503, ['error' => 'Service unavailable.']); }
$configPath = $home . '/.hostingnigeria-domain-relay.php';
if (!is_file($configPath) || !is_readable($configPath)) { error_log('Domain relay: configuration unavailable'); reply(503, ['error' => 'Service unavailable.']); }
$config = require $configPath;
$secret = is_array($config) ? ($config['relay_secret'] ?? '') : '';
$apiKey = is_array($config) ? ($config['connectreseller_api_key'] ?? '') : '';
if (!is_string($secret) || strlen($secret) < 32 || !is_string($apiKey) || $apiKey === '') { error_log('Domain relay: invalid configuration'); reply(503, ['error' => 'Service unavailable.']); }
$provided = $_SERVER['HTTP_X_RELAY_TOKEN'] ?? '';
if (!is_string($provided) || !hash_equals($secret, $provided)) { reply(401, ['error' => 'Unauthorized.']); }
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 2048) reply(413, ['error' => 'Request too large.']);
$raw = file_get_contents('php://input', false, null, 0, 2049);
if ($raw === false || strlen($raw) > 2048) reply(413, ['error' => 'Request too large.']);
$input = json_decode($raw, true);
$domain = is_array($input) && is_string($input['keyword'] ?? null) ? strtolower(trim($input['keyword'])) : '';
if (strlen($domain) > 253 || !preg_match('/\A(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\z/D', $domain)) reply(400, ['error' => 'Enter a valid domain name.']);
if (!function_exists('curl_init')) { error_log('Domain relay: PHP cURL unavailable'); reply(503, ['error' => 'Service unavailable.']); }
$url = 'https://api.connectreseller.com/ConnectReseller/ESHOP/domainSuggestion?' . http_build_query(['APIKey' => $apiKey, 'keyword' => $domain, 'maxResult' => 40], '', '&', PHP_QUERY_RFC3986);
$curl = curl_init($url);
curl_setopt_array($curl, [CURLOPT_RETURNTRANSFER => true, CURLOPT_FOLLOWLOCATION => false, CURLOPT_CONNECTTIMEOUT => 8, CURLOPT_TIMEOUT => 20, CURLOPT_SSL_VERIFYPEER => true, CURLOPT_SSL_VERIFYHOST => 2, CURLOPT_HTTPHEADER => ['Accept: application/json']]);
$response = curl_exec($curl);
$status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
curl_close($curl);
if (!is_string($response) || $status < 200 || $status >= 300) { error_log('Domain relay: provider request failed with HTTP status ' . $status); reply(502, ['error' => 'Domain suggestions unavailable.']); }
$data = json_decode($response, true);
if (!is_array($data) || !isset($data['registryDomainSuggestionList']) || !is_array($data['registryDomainSuggestionList'])) { error_log('Domain relay: unexpected provider response'); reply(502, ['error' => 'Domain suggestions unavailable.']); }
$domains = [];
foreach (array_slice($data['registryDomainSuggestionList'], 0, 40) as $item) {
  $name = is_array($item) && is_string($item['domainName'] ?? null) ? strtolower(trim($item['domainName'])) : '';
  if (strlen($name) <= 253 && preg_match('/\A(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\z/D', $name)) $domains[$name] = true;
}
reply(200, ['domains' => array_keys($domains)]);
