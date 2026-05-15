import Link from "next/link";
import { heroStats, heroTrips } from "@/features/landing/landing-data";

export function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(148,163,184,0.2),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.7),rgba(2,6,23,1))]" />
      <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[84vh] max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 w-fit rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur">
            Fleet operations platform
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Keep every trip, vehicle, and handoff in sync.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            TrackTruck gives fleet owners and dispatch teams one place to log trips, review the day, and export clean
            records without spreadsheet chaos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="rounded-full bg-white px-7 py-4 text-center text-base font-black text-slate-950 transition hover:bg-slate-200"
            >
              Create free account
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-white/20 bg-white/8 px-7 py-4 text-center text-base font-black text-white backdrop-blur transition hover:bg-white/14"
            >
              Explore features
            </Link>
          </div>

          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-slate-950/85 px-5 py-6 backdrop-blur">
                <div className="text-2xl font-black tracking-tight text-white md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] border border-white/10 bg-white/5 blur-0" />
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Live snapshot</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white">Operations board</h2>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  14 vehicles online
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Today</p>
                  <div className="mt-3 text-3xl font-black text-white">128</div>
                  <p className="mt-1 text-sm text-slate-400">Trips tracked</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">On time</p>
                  <div className="mt-3 text-3xl font-black text-white">96%</div>
                  <p className="mt-1 text-sm text-slate-400">Current performance</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Avg update</p>
                  <div className="mt-3 text-3xl font-black text-white">4m</div>
                  <p className="mt-1 text-sm text-slate-400">Fast daily log</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/90">
                <div className="grid grid-cols-[1.3fr_0.9fr_0.8fr] gap-3 border-b border-white/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  <span>Route</span>
                  <span>Vehicle</span>
                  <span>Status</span>
                </div>
                <div className="divide-y divide-white/10">
                  {heroTrips.map((trip) => (
                    <div key={`${trip.route}-${trip.vehicle}`} className="grid grid-cols-[1.3fr_0.9fr_0.8fr] gap-3 px-4 py-4 text-sm">
                      <div>
                        <div className="font-semibold text-white">{trip.route}</div>
                        <div className="mt-1 text-slate-400">{trip.time}</div>
                      </div>
                      <div className="font-semibold text-slate-200">{trip.vehicle}</div>
                      <div className="font-semibold text-emerald-300">{trip.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
