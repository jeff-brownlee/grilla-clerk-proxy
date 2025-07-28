# Clerk Proxy for Vercel

This is a minimal project to proxy Clerk Frontend API requests through your custom domain (e.g. `https://clerk.grillapoker.com`).

## Deploy

1. Push to GitHub.
2. Connect to Vercel.
3. Set domain to `clerk.grillapoker.com`.
4. Confirm `/api/clerk/health` works.
5. Set proxy in Clerk dashboard to: `https://clerk.grillapoker.com`.
