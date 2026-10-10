# The Enclave — Detached Collection

Independent information and registration site for the detached-home component of The Enclave at 6071 Fourth Line, Milton. Sundial Homes has not released detached pricing, lot sizes, or a launch date. This site is not the builder's website.

## Updating unverified fields

Detached-specific pricing, sizes, lot widths, unit counts, bedroom counts, deposits, incentives, collection names, and the launch date live in `lib/content.ts`.

Do not type a number into the page components. Update the constants in `lib/content.ts` only after the figure has a source and a date, then change the matching "To be announced" row. Keep the FAQ answers, JSON-LD, and `public/llms.txt` aligned with that same figure.

Town-file facts and the released townhome figures (`$599,990`, 953–2,843 sq ft, occupancy targeted for 2027) are separate from the detached fields. Do not copy townhome prices into the detached rows.

## Scripts

```bash
npm run dev
npm run build
npm run generate:llms
```

`generate:llms` rewrites `public/llms-full.txt` from `lib/content.ts`.
