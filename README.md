# Tanmay Pachrutkar — Portfolio

A premium, dark-glassmorphism, recruiter-focused portfolio. Pure HTML/CSS/JS — no build step, works by just opening `index.html` or hosting the folder anywhere static.

## Files
- `index.html` — all sections (Hero, About, Skills, Experience, Projects, Certifications, GitHub, Achievements, Education, Blog, Resume preview, Contact, Footer, AI assistant)
- `styles.css` — design tokens + all styling (dark/light theme via `data-theme`)
- `data.js` — skills + projects content (edit here to update content fast)
- `main.js` — loader, custom cursor, particles, typing effect, counters, scroll reveal, smooth scroll, theme toggle, filters, AI assistant, contact form
- `assets/profile.jpg` — your photo (optimized)
- `assets/Tanmay_Pachrutkar_Resume.pdf` — resume (download + inline preview)

## Run locally
Just open `index.html` in a browser, or:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploy to Vercel (free, 2 minutes)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: **Other** (static site) — no build command needed.
4. Deploy. Done — you'll get a live `.vercel.app` URL.

Or skip GitHub entirely: install the Vercel CLI (`npm i -g vercel`), run `vercel` inside this folder, and follow the prompts.

## Make the contact form send real emails (5 minutes, free)
The form is already wired for EmailJS — it just needs three values plugged in.

1. Go to **emailjs.com** → sign up free (200 emails/month, no card needed).
2. **Add Email Service** → choose Gmail → connect `tanmay20pa@gmail.com` → copy the **Service ID**.
3. **Email Templates** → Create New Template. Use `{{name}}`, `{{email}}`, `{{message}}` as variables in the body (these match the form field `name` attributes). Set the template's **To Email** field to `{{to_email}}`. Copy the **Template ID**.
4. **Account** → copy your **Public Key**.
5. Open `index.html`, find this block near the top and paste your Public Key:
   ```html
   <script>
     emailjs.init('YOUR_PUBLIC_KEY');
   </script>
   ```
6. Open `main.js`, find this block near the contact form section and paste your Service ID + Template ID:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   ```
7. Save, reload, submit a test message — it'll land in tanmay20pa@gmail.com.

Until these are filled in, the form shows a friendly "not connected yet" message and won't silently fail.

## GitHub stats & social links
Already pointed at your real accounts:
- GitHub: `github.com/Dar-KnighT-ech`
- LinkedIn: `linkedin.com/in/tanmay-pachrutkar`

If you ever change usernames, search for `Dar-KnighT-ech` and `tanmay-pachrutkar` across `index.html` / `main.js` and update.

## Customizing content
- Skills & Projects: edit `data.js`
- Experience timeline, About text, Certifications, Education: edit directly in `index.html` (each section is clearly commented)
- Colors: edit the CSS variables at the top of `styles.css` (`:root`)
