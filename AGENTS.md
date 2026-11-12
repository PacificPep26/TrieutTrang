# AGENTS.md: context for agents working on this repo

This is the landing site for **Du Lịch Triều Trang**, an off-road tour business at Bàu Trắng (white sand dunes), Hòa Thắng, Lâm Đồng, Vietnam. It is a single page with 4 languages.

- Live: https://dulichtrieutrang.com (Vercel project `trieutrang`, alias https://trieutrang.vercel.app)
- Repo: https://github.com/HuynhHoangvu/TrieuTrang (branch `main`)

## Stack and commands

- Next.js 15 (App Router), React 18, SCSS (`sass`), `framer-motion`, `lucide-react`. Tailwind is not installed: the `lg:`/`sm:` classes in `Contact.jsx` do nothing. Real styles live in `.scss`.
- `npm run dev` runs the dev server; `npm run build` builds for production.
- `next.config.mjs` uses `.next-dev` for dev and `.next` for build, so a build does not break a running dev server. Keep this.
- Deploy: push to `main` does **not** reliably auto-deploy. Run `vercel --prod --yes` (the CLI is logged in as `huynhhoangvu`). If it prints `"message": "fetch failed"`, that is a network error during upload, so just rerun it. `.vercelignore` keeps unused uploads out of the bundle to make that rare.
- Before deploying, run `npm run build` and check every `/images/...` path used in `src/` and `app/` exists in `public/`. An agent once deleted 3 images that were still in use.
- Never delete an image or video from `public/` unless a search of `src/` and `app/` shows nothing references it.
- When editing `.scss`/`.jsx` from PowerShell, never put `$` or backtick strings inside double-quoted replacements; they get expanded and silently break SCSS variables and template literals. Use the Edit tool instead.

## Structure

- `app/layout.jsx` holds SEO metadata, the favicon (`public/icon.png`, `public/apple-icon.png`), and business JSON-LD (name, phone, address, Facebook).
- `app/sitemap.js` and `app/robots.js` are submitted to Google Search Console (Domain property, verified by DNS TXT).
- `app/page.jsx` renders `src/App.jsx` (`'use client'`), which lays out all sections.
- `src/components/<Name>/<Name>.jsx + .scss` holds one component per section. The order is Navbar, Hero, TrustBar, Services, CheckInSpots, Gallery, RestaurantMenu, Testimonials, FAQ, CTA (inline in App), Contact, FloatingContact, SectionDots, Footer.
- `src/i18n/LanguageContext.jsx` and `src/i18n/locales/{vi,en,ko,zh}.js` hold all page text. **Change every language together.** Flags are flagcdn.com images keyed by `flag: 'vn'|'gb'|'kr'|'cn'`, because emoji flags don't render on Windows.
- `src/styles/_variables.scss` holds colors and fonts. Global styles are in `src/styles/global.scss`.
- Contact section text is in the `contact` key of each locale. The full menu at `/menu` is multilingual in `src/data/fullMenuData.js`. The homepage dining section uses `dining.specialties` in each locale plus `src/data/menuData.json` for price and image.
- Copy rule: the business is **driver-led**. A professional driver carries the guests (ATV 1–2 guests, Jeep up to 6). Never write "self-drive", "tự lái" or "rent a car/ATV".
- Mobile rule: keep card grids at 2 columns on phones. The gallery shows 6 photos on phones until "show more" is pressed. The page was 12,550px tall on a 390px phone and is now about 7,700px; keep it short.
- Korean brand spelling is 찌에우짱 and Zalo stays "Zalo" in every language.
- The hero video is `public/videos/hero.mp4` (720p30, about 4.5 MB) with poster `hero-poster.jpg`.

## Business facts (source: owner's price board and business license)

| Item | Value |
|---|---|
| Hotline | **0979 391 234** (main), 0909 737 797 |
| Address | Bàu Trắng, thôn Hồng Lâm, xã Hòa Thắng, tỉnh Lâm Đồng. The license says Bắc Bình, Bình Thuận, which is the pre-2025 province name; use Lâm Đồng. |
| Facebook | https://www.facebook.com/bautrangdoicatmuine |
| Jeep / Land Cruiser | 800.000đ per car, up to 6 guests |
| ATV / mô tô | 800.000đ / 20 phút, 1–2 guests, 400cc |
| Lạc đà / Đà điểu / Ván trượt | 200.000đ / 100.000đ per round per person / 50.000đ per board per person |
| Specialties | Dông cát 1.000.000đ/kg, Gà đồi cát 300.000đ/kg |
| Note on the price board | Prices do not include gate ticket or tax. This is not on the site yet. |

There is only one Jeep tour: the sunset "Đồi Cát Bay" tour. The duplicate sunrise tour and the "sunrise vs sunset" FAQ item were removed on purpose.

## Rules from the owner

- Do not invent reviews, ratings, or customer photos. On Google the real rating is **4.1★ from 827 reviews**. `src/data/reviewsData.js` and the "4.9 / 1,280+ / Đã xác thực" bar in `Testimonials.jsx` are **fabricated** (added by another agent). Replace them with real Google reviews when the owner supplies them.
- Use real photos only. Food photos are the owner's own: `public/images/dong-cat.jpg` and `ga-doi-cat.jpg`. Compress images before committing; the target is roughly 300 KB at 1200px wide.
- Keep the `shiny-text` effect on the logo. Keep the English eyebrow tags; the site targets several countries.
- The owner wants phones to show a 2-column layout for the menu grid and the Contact section (info and map side by side).
- The owner talks in Vietnamese. Reply in Vietnamese.

## Open items

- Google Business Profile "Du Lịch Triều Trang" (827 reviews) is owned by an inaccessible `qu…@gmail.com` account. Access was requested from `trieutrangtravel@gmail.com` on 2026-10-12. Starting **2026-10-15** the owner can claim it (video verification). After that, set website, phone 0979 391 234, and Lâm Đồng address. Do **not** create a new duplicate profile.
- Unused large files sit in `public/` (old hero videos, `public/images/1777…` uploads). Delete them; the owner has to approve file deletion.
- Several agents (Claude Code and Antigravity) have edited this repo at the same time and overwritten each other. Check `git status` and diffs before editing.
