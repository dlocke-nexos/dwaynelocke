# Admin login & content editor

The admin UI lives at **`/admin`** on your deployed site (e.g. `https://dwaynelocke-com.netlify.app/admin/`).

It uses [Decap CMS](https://decapcms.org/) with **Netlify Identity** for email/password login. Saves commit to GitHub and trigger a new Netlify build.

## One-time Netlify setup

Do this once in the [Netlify project dashboard](https://app.netlify.com/projects/dwaynelocke-com):

### 1. Link GitHub (if not already)

**Project configuration → Build & deploy → Continuous deployment**  
Connect repository `dlocke-nexos/dwaynelocke`, branch `main`.

### 2. Enable Identity

**Project configuration → Identity → Enable Identity**

### 3. Enable Git Gateway

**Project configuration → Identity → Services → Git Gateway → Enable Git Gateway**

This lets the CMS commit essay and config changes to your repo.

### 4. Invite yourself (password login)

**Identity → Invite users**  
Enter your email. You’ll get an invite to set a password.

**Recommended:** Under **Identity → Registration**, set **Registration preferences** to **Invite only** so random visitors can’t sign up.

### 5. Redeploy

Push any pending changes or trigger **Deploys → Trigger deploy** so `/admin` is live.

## Using the admin

1. Open `https://dwaynelocke-com.netlify.app/admin/` (or your custom domain + `/admin`).
2. Click **Login with Netlify Identity** and sign in with your invited email + password.
3. Use the sidebar:
   - **Essays** — create, edit, draft, reorder posts
   - **Site configuration → General settings** — LinkedIn URL, languages

Each **Publish** creates a Git commit on `main`. Netlify rebuilds the public site in about a minute.

## Local editing (optional, no login)

For editing on your machine without Netlify Identity:

1. In `public/admin/config.yml`, uncomment `local_backend: true`
2. Run in two terminals:
   ```bash
   npx decap-server
   npm run dev
   ```
3. Open `http://localhost:4321/admin/`  
   Changes write directly to local files (not Git). Comment `local_backend` again before deploying.

## What the admin does not edit

- Framework data (`src/components/framework-data.ts`) — still code
- Layout and design — still code/Cursor
- The anchor essay on `/` is still the lowest-order published essay; control it via `order` and `draft` in the CMS
