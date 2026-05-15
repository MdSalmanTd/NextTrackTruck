# TrackTruck Project Structure

TrackTruck uses the default Next.js root-level App Router structure. No `src/` folder is used.

```txt
tracktruck/
├── app/                    # Next.js routes, layouts, pages, and API route handlers
│   ├── api/
│   │   ├── trips/
│   │   └── users/
│   ├── add-trip/
│   ├── all-trips/
│   ├── dashboard/
│   ├── edit-trip/
│   ├── login/
│   ├── register/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable UI, layout, and guard components
│   ├── guards/
│   ├── layout/
│   └── ui/
├── constants/              # Route and API constants
├── features/               # Business features grouped by domain
│   ├── auth/
│   ├── dashboard/
│   ├── navigation/
│   └── trips/
├── hooks/                  # Reusable React hooks
├── lib/                    # API client, auth helpers, database helpers
├── types/                  # Shared TypeScript types
├── public/                 # Static assets
├── proxy.ts                # Next.js request proxy for auth redirects
├── schema.sql              # Database schema
├── env.example             # Environment variable template
├── tsconfig.json
└── package.json
```

## Rules

- Keep `app/` route files thin. They should import feature screens and avoid page logic.
- Put reusable UI in `components/`.
- Put feature-specific screens and logic in `features/`.
- Put shared utilities in `lib/`.
- Put shared domain types in `types/domain.ts`.
- Use `@/` imports for root-level folders.

## Example

```tsx
// app/add-trip/page.tsx
import { AddTripScreen } from "@/features/trips/AddTripScreen";

export default function AddTripPage() {
  return <AddTripScreen />;
}
```
