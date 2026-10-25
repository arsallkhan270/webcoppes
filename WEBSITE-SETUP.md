# WebCopps launch checklist

The website is a TanStack React application, not a WordPress theme. Service and editorial data can be replaced by a CMS integration later.

## Before publishing
- Supply a verified contact email and optional phone/address/social profiles. None have been fabricated.
- Review the three original article drafts and legal templates. These are labelled drafts and excluded from search indexing and the sitemap.
- Review fictional concept work and replace with approved client work when available. No invented outcomes or testimonials are shown.
- Enquiries are saved privately in Lovable Cloud under `project_enquiries`. Open More → Database to review them. Email notifications still need a confirmed recipient and sender setup.
- Set an enquiry retention schedule and confirm privacy obligations and the business’s legal identity.
- Review the production site for cookies and third-party services. No analytics or advertising scripts have been added. Google Fonts is used.

## Hostinger deployment
1. Use a Hostinger plan that supports Node.js applications. This is a server-rendered app and cannot be deployed as static files alone.
2. Connect the GitHub repository and deploy the `main` branch. Use `npm install`, `npm run build`, and `npm start` as the install, build, and start commands.
3. Configure these environment variables in Hostinger. The `VITE_` values are needed at build time; the others must be available to the running server. Never commit their values:
	- `VITE_SUPABASE_URL`
	- `VITE_SUPABASE_PUBLISHABLE_KEY`
	- `SUPABASE_URL`
	- `SUPABASE_PUBLISHABLE_KEY`
	- `SUPABASE_SERVICE_ROLE_KEY` (server-only secret)
4. The Node server output is `.output/server/index.mjs`; configure the app to use the port supplied by Hostinger (`PORT`).
5. Connect `webcopps.com` (and `www` if needed) in Hostinger and apply the exact DNS records it provides. Check existing email and DNS records before replacing anything.
6. After HTTPS is active, verify all routes and enquiry submissions. The canonical URL and sitemap target https://webcopps.com; submit https://webcopps.com/sitemap.xml to Google Search Console after launch.
7. Review legal drafts, enquiry retention, privacy obligations, and email notifications before launch. Analytics and advertising scripts are not included by default.
