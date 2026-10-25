# WebCopps launch checklist

The website is a TanStack React application, not a WordPress theme. Service and editorial data can be replaced by a CMS integration later.

## Before publishing
- Supply a verified contact email and optional phone/address/social profiles. None have been fabricated.
- Review the three original article drafts and legal templates. These are labelled drafts and excluded from search indexing and the sitemap.
- Review fictional concept work and replace with approved client work when available. No invented outcomes or testimonials are shown.
- Enquiries are saved privately in Lovable Cloud under `project_enquiries`. Open More → Database to review them. Email notifications still need a confirmed recipient and sender setup.
- Set an enquiry retention schedule and confirm privacy obligations and the business’s legal identity.
- Review the production site for cookies and third-party services. No analytics or advertising scripts have been added. Google Fonts is used.

## Domain and deployment
1. Publish the reviewed site using Lovable’s Publish control.
2. Open project Settings → Domains and connect `webcopps.com` (and `www` if needed).
3. At your domain registrar, copy the exact DNS records Lovable provides. Do not invent IP addresses. Remove conflicting records only after checking existing email and hosting configuration.
4. Wait for domain verification and HTTPS, choose the primary domain, and verify all page URLs.
5. The canonical URLs and sitemap target https://webcopps.com. Development pages emit noindex. Keep any public staging hostname protected or explicitly noindexed.
6. After launch, verify the domain in Google Search Console using its DNS record and submit https://webcopps.com/sitemap.xml.
7. Add Google Analytics only after the owner supplies the account and tracking/consent preferences.
8. Measure Lighthouse and real Core Web Vitals on the published domain. No score or indexing result is guaranteed.

Publishing, connecting DNS, legal approval, and email notifications are not completed automatically.
