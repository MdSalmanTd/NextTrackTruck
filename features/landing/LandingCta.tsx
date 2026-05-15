import Link from "next/link";

export function LandingCta() {
  return (
    <section className="bg-slate-50 px-5 py-20 text-slate-950 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-500">Ready when you are</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-none tracking-tight md:text-6xl">
            Put every trip in its place.
          </h2>
        </div>
        <Link
          href="/register"
          className="rounded-full bg-slate-950 px-8 py-4 text-center text-base font-black text-white transition hover:bg-slate-800"
        >
          Start tracking
        </Link>
      </div>
    </section>
  );
}
