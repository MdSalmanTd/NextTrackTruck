<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses Next.js 16. APIs, conventions, and file structure may differ from older Next.js versions. Read the relevant guide in `node_modules/next/dist/docs/` before changing framework-specific code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# TrackTruck Structure Notes

- Next.js route files live in `app/`.
- Shared reusable components live in `components/`.
- Business feature screens live in `features/`.
- Server/client utilities live in `lib/`.
- Shared types live in `types/`.
- Request protection uses `proxy.ts` because Next.js 16 deprecated `middleware.ts`.
