# Action My Service — Studio Edition (Vercel Ready)

A freshly redesigned English website for **Action My Service**, tailored to the original user-supplied logo and offerings: custom website development and inquiries about eligible premium AI tool subscription options.

## BEFORE YOU GO LIVE

**1. Open `assets/config.js` and fill in your own contact information.**

- `email`: the address for inquiries (e.g. contact@yourdomain.com).
- `whatsapp`: international number, digits only (e.g. 91XXXXXXXXXX).
- `legalBusinessName`: actual registered proprietor/entity if different from brand.
- `businessAddress`: required business or correspondence address in your jurisdiction.
- `jurisdiction`: where the business legally operates.

The inquiry form creates a message **inside the customer's browser**. With real contact details configured it can open email or WhatsApp, but visitors still need to actually send the message. No fake success, database, payments or subscription delivery are claimed. Without contact details the customer can copy the message only. Please configure the contact details before publishing.

**2. Review all policies with local professional advice.** The privacy, terms, cookie, disclaimer, accessibility and refund pages are editable general-purpose templates, not legal approval. Update to match your actual company registration, policies, payment/delivery, third parties, applicable laws and handling of personal data.

**3. Check AI subscription resale rights.** A provider's paid plan may forbid resale, account sharing, transfer or region circumvention. Only advertise a product if you actually have rights to offer it, and explain duration, features, delivery and price before payment. No official partnership, specific provider, plan, price, delivered product or authorization is fabricated by this template.

**4. Replace illustrative visuals with real portfolio images when you have them.** The homepage contains *clearly identified design concepts*, not purported previous client work, fabricated case studies or testimonials. Website services and pricing must match what you actually do.

## WHAT'S INCLUDED

- `index.html` — custom-designed studio website with services, sample design concepts, process, AI disclosure, FAQ and inquiry form
- `legal.html`, `privacy.html`, `terms.html`, `cookies.html`, `refunds.html`, `ai-subscriptions.html`, `disclaimer.html`, `accessibility.html`
- `404.html` — custom error page
- `assets/styles.css` — responsive design system; edit colours, layout or typography here
- `assets/main.js` — menu and inquiry workflow
- `assets/config.js` — contact/business settings
- `assets/action-mark.webp` — user-provided logo mark
- `assets/social-card.jpg` — share preview (generated from the new design)
- `vercel.json` — clean URLs and security headers

## DEPLOY WITH VERCEL

1. Download and extract the ZIP to a folder on your computer.
2. Edit `assets/config.js` first; review policy text and service details.
3. Upload the **folder contents** to a GitHub repository, with `index.html` at root.
4. Visit https://vercel.com/new, import the repository, choose **Other** framework, no build command, and deploy.
5. You can set your custom domain inside the Vercel project settings.

For local testing, run `python -m http.server 8000` from this folder and open http://localhost:8000.

## Notes

Static HTML/CSS/JS, no external fonts, no frontend framework, no npm, no analytics or advertising pixels, no artificial cookie popup. No backend or payment gateway is included. If you add cookies, an analytics provider, checkout or user accounts, update security, disclosure and consent features to match. If your website will sell products directly, arrange a legitimate processor and use a secure server-side integration for any payment APIs.