# Hosting Nigeria frontend

Next.js 16 App Router frontend with React 19, TypeScript, Tailwind CSS 4, and next-themes.

## Getting started

Install Node.js 20.9 or newer, then run:

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if script execution is restricted. Use `npm run build` to check the production build and `npm run lint` to run ESLint.

The homepage is an initial design direction. Product links point to the existing site and customer portal; domain search passes the query to the existing portal. Confirm portal integration and prices before launch. Theme preference is managed by next-themes. Design colors and theme surfaces are defined in `app/globals.css`.

## Domain generator

The `/api/domain-suggestions` server route can connect to ConnectReseller directly or through a fixed-IP portal server. The relay is intended for accounts whose API access requires an IP allowlist; it does not need WordPress.

For the fixed-IP setup, upload `deploy/domain-relay/domain-relay.php` to the HTTPS document root for `portal.hostingnigeria.com`. Place the private PHP config file `.hostingnigeria-domain-relay.php` in the cPanel account home directory, outside all public document roots; use `relay-config.example.php` as a template. Set its `relay_secret` to a random value of at least 32 characters, and its `connectreseller_api_key` to the provider key. The server must have PHP cURL and must be able to reach ConnectReseller over HTTPS. Verify the server's **outgoing** IP with the hosting provider, then whitelist that IP in ConnectReseller.

On Vercel, set `CONNECTRESELLER_RELAY_URL` to `https://portal.hostingnigeria.com/domain-relay.php` and `CONNECTRESELLER_RELAY_SECRET` to the matching secret. The relay URL is restricted to the portal hostname and must use HTTPS. Redeploy after setting environment variables. A direct provider request is used only when no relay URL is configured; to use that mode, set `CONNECTRESELLER_API_KEY` and ensure the server's outgoing IP is allowed. Never put keys or relay secrets in Git or client-side code.

Test a search after deployment and inspect the portal's PHP error log and Vercel function logs for status-only diagnostics. If the portal relay reports provider HTTP 401, check the key and the actual outgoing IP with ConnectReseller. The WHOIS lookup uses IANA's RDAP bootstrap and registry RDAP services; registry coverage and returned fields vary by extension.

## Domain pricing

For automatic pricing, configure `WHMCS_API_IDENTIFIER`, `WHMCS_API_SECRET`, and `WHMCS_NGN_CURRENCY_ID` in the server environment. The `/api/domain-pricing` route calls WHMCS GetTLDPricing server-side; credentials must never be exposed in client code. If configuration or the API is unavailable, the page shows a price snapshot and links to the portal for current rates. This integration requires a server runtime and outbound HTTPS access.
