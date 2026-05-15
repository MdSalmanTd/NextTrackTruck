@AGENTS.md

# TrackTruck Development Guidelines

## Project Structure

See `PROJECT_STRUCTURE.md` for the full directory guide.

### Key Directories

- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable React components
- `features/` - Feature-specific screens and logic
- `lib/` - Utilities and business logic
- `hooks/` - Custom React hooks
- `constants/` - Application constants and configuration
- `types/` - TypeScript type definitions
- `proxy.ts` - Next.js request proxy for route protection

## Principles

- Keep route files thin.
- Put reusable UI in `components/`.
- Put auth, dashboard, and trips logic in `features/`.
- Put cross-cutting helpers in `lib/`.
- Use absolute imports with `@/`.
