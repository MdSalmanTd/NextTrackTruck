import type { User } from "@/types/domain";

export function DashboardView({ user }: { user: User }) {
  return (
    <section className="grid min-h-screen place-items-center overflow-hidden bg-black p-6">
      <div className="w-full max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-400">Welcome back</p>
            <h1 className="text-3xl font-bold">{user.fullname}</h1>
          </div>
          <span className="rounded border border-emerald-400/40 px-3 py-1 text-sm text-emerald-300">Live</span>
        </div>
        <div className="relative h-[68vh] overflow-hidden rounded-lg border border-white/10 bg-neutral-950">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#ffffff12_1px,transparent_1px),linear-gradient(90deg,#ffffff12_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_30px_10px_rgba(52,211,153,0.25)]" />
          <div className="absolute right-[28%] top-[58%] h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_30px_10px_rgba(56,189,248,0.25)]" />
          <div className="absolute left-[30%] top-[24%] h-[2px] w-[46%] rotate-[23deg] bg-white/30" />
          <div className="absolute inset-x-8 bottom-8 rounded border border-white/10 bg-black/70 p-4">
            <p className="text-sm text-neutral-400">Tracking overview</p>
            <p className="mt-1 text-lg font-semibold">Use AddTrip to create trips. Owners/admins can review and edit trips from TripsData.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
