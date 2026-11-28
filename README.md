# AdMuse Studio — New website

A fresh, dependency-free static website. HTML, CSS and JavaScript; no build step or framework.

## Before publishing
1. The approved original AdMuse Studio monogram is included in SVG and PNG, with matching favicon files and full wordmarks for light and dark backgrounds. The default theme is pure white, with optional dark mode. The current live website color values could not be verified, so the previous purple/teal palette is retained for now.
2. Edit `config.js` to set your verified business email and/or WhatsApp number (country code, digits only). Without these, the enquiry form only prepares a local brief that can be copied/downloaded. With WhatsApp configured it opens a message draft; otherwise it opens an email draft. It never claims a lead has been submitted. No secret API keys in this file.
3. Review prices, exact service scope, licensing costs, legal/privacy copy and your actual delivery capabilities. The prices are suggestions, not supplier quotes; provider fees and taxes are separate. All showcase examples are labelled concepts, not completed client work. No live domain search, checkout, account portal, chatbot or backend is included.
4. Back up the existing live website and DNS records before replacing it. Do not delete MX/TXT records used for email.

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this directory and visit http://localhost:8000.

## GitHub + commercial hosting (recommended)
1. Create a new GitHub repository (or a new branch in your existing repository).
2. Upload the CONTENTS of this folder, including `assets/`, at the repository root. Commit.
3. In Cloudflare, go to Workers & Pages and create a Pages project using your GitHub repository. Choose no framework, no build command, root output directory (`.`). Deploy. Verify your preview URL.
4. Add `www.admusestudio.in` as a custom domain using the hosting provider's instructions. Configure DNS and HTTPS. Add or redirect the apex domain as appropriate. Preserve existing email DNS records. Check both www and apex URLs before switching traffic.
5. GitHub Pages can be used for eligible non-commercial previews; its terms prohibit using it as free hosting for an online business, e-commerce or commercial SaaS. For this business website use commercial-compatible hosting, with GitHub for source control. Check current provider terms and quotas.

## Files
- `index.html` — homepage
- `style.css` — responsive design and light/dark themes
- `app.js` — services, pricing, demo previews, navigation, enquiry form
- `config.js` — logo and business contact settings
- `assets/logo.svg` — approved logo
- `privacy.html` — starter privacy notice
- `.nojekyll` — optional for eligible GitHub Pages previews

## Maintenance
Update service/price/demo arrays in `app.js`; update general content in `index.html`. No dependencies to install. Validate your production contact links, DNS and accessibility after deployment.

## Photography
The seven decorative photos are referenced from Pexels CDN rather than bundled locally because direct downloads were unavailable in this environment. They require network access; gradient fallbacks are included. See `IMAGE-SOURCES.md` for source pages and license. Verify photo loading on the deployed site; download and self-host copies if desired.

## Brand files
`assets/logo.svg`, `assets/logo.png` (1024 px), `assets/wordmark.svg`, `assets/wordmark.png` (1600 px wide), `favicon.ico`, `assets/favicon.svg`, 16/32px PNG icons and Apple touch icon.

## Creator Hub edition
The default white theme and existing logo/favicon are retained. The home page now has Business, Creator Hub, Growth & AI, creator experiences, website concept previews, and switchable business/creator prices. All enquiry buttons preselect the related service. Monthly creator prices are illustrative starting prices; define scope and usage fees before publishing.

Configure `config.js` with your actual email and WhatsApp number. The static site does not send enquiries to a backend or process bookings/payments. Creator experiences collect interest only. For live commercial hosting, connect the GitHub repo to an appropriate hosting provider such as Cloudflare Pages, with no build command and the repository root as output. Review privacy text and photo references before launch. Remote images may not load on every network; original SVG fallbacks are included for the creator panels.

## Multi-page edition
The homepage is an overview. Each footer item opens a standalone page with shared navigation, branding, stylesheet, and script. The nine page files are:
- `business-solutions.html` — Business solutions
- `creator-hub.html` — Creator Hub
- `growth-ai.html` — Growth & AI
- `creator-experiences.html` — Creator experiences
- `website-concepts.html` — Website concepts
- `pricing.html` — Pricing
- `about.html` — About
- `contact.html` — Contact
- `privacy.html` — Privacy

Edit each HTML file for its page-specific content. The shared service and price arrays remain in app.js. Enquiry buttons link to contact.html with the related service preselected; pricing.html?plan=creator opens creator subscriptions. Upload all files at the repository root, including the assets folder.

## Expanded portfolio (18 industries)
`website-concepts.html` now links to 18 standalone fictional brands, each with six individual pages (108 demo pages). Search and category filters, item details, selected booking forms, local shopping cart/wishlist, media-kit downloads, sample dashboards and a browser-local brand preview are included as applicable. All sample data is fictional; demos are not real businesses. Forms never send data or payments, and there is no live availability or authentication. Live APIs, payments, actual media embeds, maps, accounts, and industry-specific backend integrations are separately scoped. Demo pages have `noindex, follow` to avoid search engines treating fictional businesses as real. Stock image CDN references have local vector fallbacks. See IMAGE-SOURCES.md.

## Footer visitor counter
A real shared counter is ready for activation, not preconnected. See `visitor-counter/README.md` for the Cloudflare Worker + D1 setup. Set `visitorCounterUrl` in `config.js` only after deployment. It counts approximate cumulative browser-days from activation, not verified unique visitors or historical traffic. No fabricated number appears. The main site footer displays the total on all ten main pages; demo pages do not increment the counter. Existing business email and WhatsApp settings are preserved from the supplied archive (blank until configured).


## Industry image update
All 18 demo sites have relevant imagery across home, catalogue, details, about, booking and contact pages. The catalogue and gallery use individually chosen photos; booking previews change imagery with the selection. Local AI-generated illustrations are stored in `assets/industry-photos/`. See `assets/industry-photo-manifest.json` and `IMAGE-SOURCES.md` for photo mappings. Remote Pexels URLs remain for 15 industries and could not be tested from the build environment. Every newly added remote demo image has a packaged local fallback; smaller general-industry fallbacks can be replaced with higher-resolution photos of your choice. The visitor-counter backend and main website configuration are unchanged.
