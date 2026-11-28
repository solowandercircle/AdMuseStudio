# Real cumulative visitor counter
This counts browser-days, not verified unique humans. The same browser is counted at most once per UTC day if local storage is available; returning on another day counts as another visit. No historical count is invented. Bots, clearing storage, private browsing or spoofed requests may affect counts. The API does not store IP addresses or contact details, but the hosting provider may process network logs. Origin restrictions are not authentication; for a public production site add appropriate rate limiting/bot controls and monitor quotas. D1 stores a random daily token and date, plus the cumulative count. You may delete old tokens after the day passes without resetting the total. Review privacy disclosures and applicable consent requirements.

## Deploy (once)
1. Install Node.js and log in to Cloudflare: `npx wrangler login`.
2. In this directory run `npx wrangler d1 create admuse-visits`.
3. Copy the returned database ID into `wrangler.toml` (DB binding must remain `DB`).
4. Run `npx wrangler d1 execute admuse-visits --remote --file=./schema.sql`.
5. Run `npx wrangler deploy`. Copy the HTTPS Worker address, add `/visits` to it, and paste that full URL into `visitorCounterUrl` in the website root `config.js`.
6. Commit the root site files to GitHub. Open the live custom domain, verify the footer shows a real value, then reload and navigate to another main page: the count should not increment for the same browser-day.

Official guide: https://developers.cloudflare.com/d1/get-started/
The default allowed origins are https://www.admusestudio.in and https://admusestudio.in. Change the allowlist only if your actual site uses a different origin. The backend folder does not need to be published as part of the static website (keep it separately if desired). No credentials belong in config.js or the repository. Cloudflare account, deployment, possible usage costs and bot protection are the site owner's responsibility.
