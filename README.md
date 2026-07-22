# Vijay Engineering Works — Website

Marketing site for Vijay Engineering Works, a footwear machinery manufacturer. Built with React 19, TypeScript, Vite, Tailwind CSS, React Router, and Supabase.

## Getting started

```bash
npm install
npm run dev
```

## Connecting form submissions (Supabase)

The Contact, Careers, Dealership, and Newsletter forms insert into a Supabase project. Until it's configured, forms show a clear "can't submit right now" message instead of failing silently.

1. Create a free project at [supabase.com](https://supabase.com/dashboard).
2. In the Supabase SQL Editor, run [`supabase/schema.sql`](supabase/schema.sql) — this creates the 4 submission tables with row-level security that only allows inserts (not reads) from the public site.
3. In your Supabase project, go to **Project Settings -> API** and copy the **Project URL** and **anon public** key.
4. Copy `.env.example` to `.env` and paste them in:
   ```bash
   cp .env.example .env
   ```
   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
5. Restart the dev server. Submitted forms will now appear under **Table Editor** in your Supabase dashboard. Set up email alerts (e.g. a Supabase Database Webhook to an email/Slack service) if you want to be notified on new submissions.

`.env` is gitignored — never commit real keys.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Project structure

- `src/pages` — route-level pages (`src/pages/home` holds the homepage's section components)
- `src/components/ui` — shared design-system components (Button, Card, Input, etc.)
- `src/components/layout` — Header, Footer, Breadcrumb, floating contact buttons
- `src/data` — product catalog, blog posts, industries, FAQs, and the curated image pool
- `src/lib` — Supabase client and zod validation schemas
- `src/hooks` — shared hooks (e.g. the product shortlist)
- `supabase/schema.sql` — database schema for form submissions

## Imagery

All product, industry, blog, and gallery photography is the company's own machinery photography, stored in `public/products/` (resized + JPEG-compressed from the original files) and referenced via `src/data/images.ts`. The factory walkthrough video lives at `public/videos/factory-machinery.mp4`. To add a new machine photo: drop the file in `public/products/`, reference it with `productPhoto(n)` in `src/data/products.ts`, and it'll automatically show up anywhere that product's images are used (catalog, detail page, gallery).
