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

The domain generator uses the server-side `/api/domain-suggestions` route to query ConnectReseller directly. Set `CONNECTRESELLER_API_KEY` in `.env.local` for local development and in the hosting provider's server environment for Preview and Production deployments. Never commit it or use a `NEXT_PUBLIC_` prefix. Restart the local server after changing `.env.local` and redeploy after changing hosted environment variables. The provider must authorize the key and any required outbound IP addresses. The route requires a Node.js server runtime and outbound HTTPS; static-only hosting is not supported. If the key or provider is unavailable, the search shows an error and does not rely on WordPress.

Check a deployment with a valid domain such as `example.com` and verify suggestions and registration links. A 401 in server logs means ConnectReseller rejected the credentials or authorization; contact the provider rather than exposing the key in client code or logs.

The WHOIS lookup uses IANA?s RDAP bootstrap directory and registry RDAP services through `/api/whois`. It requires a Node.js server runtime and outbound HTTPS access. Registry coverage and returned fields vary by extension.

## Domain pricing

For automatic pricing, configure `WHMCS_API_IDENTIFIER`, `WHMCS_API_SECRET`, and `WHMCS_NGN_CURRENCY_ID` in the server environment. The `/api/domain-pricing` route calls WHMCS GetTLDPricing server-side; credentials must never be exposed in client code. If configuration or the API is unavailable, the page shows a price snapshot and links to the portal for current rates. This integration requires a server runtime and outbound HTTPS access.
