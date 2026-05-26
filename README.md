# FranchiseExpo – Next.js Site

A clean Next.js 14 conversion of the International Franchise Expo website, with reusable `Header` and `Footer` components and all company-specific branding removed so you can plug in your own.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                          ← Root layout (wraps all pages with Header + Footer)
│   ├── globals.css                         ← Global design tokens & utility styles
│   ├── page.tsx                            ← Homepage
│   ├── page.module.css
│   └── attendees/
│       ├── attendee-info/
│       │   ├── page.tsx                    ← Attendee Info page
│       │   └── page.module.css
│       └── emerging-brand-pavilion/
│           ├── page.tsx                    ← Emerging Brand Pavilion page
│           └── page.module.css
└── components/
    ├── Header.tsx                          ← ✅ Reusable sticky header with dropdown nav
    ├── Header.module.css
    ├── Footer.tsx                          ← ✅ Reusable footer with 4-column grid
    ├── Footer.module.css
    ├── PageBanner.tsx                      ← ✅ Reusable inner-page banner/hero
    └── PageBanner.module.css
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customisation Checklist

### 1. Company Name & Branding
Replace all occurrences of **`FranchiseExpo`** with your company name in:
- `src/components/Header.tsx` → `.logoText`
- `src/components/Footer.tsx` → `.brandName`
- `src/app/layout.tsx` → metadata

### 2. Event Details
Update in `Header.tsx` and `Footer.tsx`:
- Location: `New York City, New York`
- Dates: `May 29th – 30th 2026`
- Opening times

### 3. Contact Info
In `Footer.tsx`, replace placeholder emails:
- `info@yourexpo.com`
- `attendees@yourexpo.com`
- `exhibitors@yourexpo.com`
And phone numbers / contact names.

### 4. Navigation
Edit the `navItems` array in `Header.tsx` to match your URL structure.

### 5. Images
Add your images to `public/images/` and reference them in the `page.tsx` files:
- `register.webp`
- `exhibiting.webp`
- `speaking.webp`
- `emerging-pavilion.webp`
- `conference-agenda.webp`
- `exhibitors.webp`
- `business-resource-center.webp`

### 6. Colors
All brand colors are CSS variables in `globals.css`:
```css
--color-primary: #1cb7cf;     /* Teal accent */
--color-secondary: #fd7122;   /* Orange CTA */
--color-navy: #011b2e;        /* Dark navy background */
--color-navy-mid: #222b60;    /* Mid navy */
```

### 7. Sponsors
Update the sponsor arrays in `src/app/page.tsx` (`platinumSponsors`, `goldSponsors`, `silverSponsors`).

### 8. Adding More Pages
All pages follow the same pattern:
```tsx
import PageBanner from '@/components/PageBanner';

export default function MyPage() {
  return (
    <>
      <PageBanner title="Page Title" subtitle="Optional subtitle" />
      <section className="section">
        <div className="container">
          {/* your content */}
        </div>
      </section>
    </>
  );
}
```

---

## Design System

The CSS design system in `globals.css` gives you utility classes:

| Class | Use |
|-------|-----|
| `.container` | Max-width centred wrapper |
| `.section` | Standard vertical padding |
| `.section--grey` | Light grey background |
| `.section--navy` | Dark navy background |
| `.section--narrow` | Reduced padding |
| `.grid .grid-2/3/4` | Responsive CSS grid |
| `.card` | White card with hover shadow |
| `.btn .btn-primary` | Orange CTA button |
| `.btn .btn-secondary` | Teal button |
| `.btn .btn-outline` | White outline button |
| `.stats-grid` | Flex stats row |
| `.sponsor-strip` | Flex sponsor logo row |

---

## Fonts
- **Oswald** (headings) – bold, uppercase, condensed
- **Poppins** (body) – clean, modern sans-serif

Both loaded from Google Fonts via `globals.css`.
