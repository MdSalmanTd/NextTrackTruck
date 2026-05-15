# Structure Cleanup

The project has been cleaned into the default root-level Next.js structure. No `src/` folder is used.

## Fixed

- Moved routes back to `app/`.
- Moved shared code back to root-level folders:
  - `components/`
  - `features/`
  - `lib/`
  - `hooks/`
  - `constants/`
  - `types/`
- Updated `@/` imports to resolve from the project root.
- Kept auth API routes under `app/api/users/`.
- Kept Next.js 16 request protection in root `proxy.ts`.
- Aligned the proxy with the real auth cookie name: `token`.
- Added `npm run type-check`.

## Verified

```bash
npm.cmd run lint
npm.cmd run type-check
npm.cmd run build
```
