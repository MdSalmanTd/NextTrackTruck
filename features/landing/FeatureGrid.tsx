import { landingFeatures } from "@/features/landing/landing-data";

export function FeatureGrid() {
  return (
    <section id="features" className="bg-slate-50 px-5 py-20 text-slate-950 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-500">Platform features</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-none tracking-tight md:text-6xl">
              Built for daily fleet work
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">
            TrackTruck keeps the core workflows close together, so dispatch, ownership, and drivers stay aligned.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-2 lg:grid-cols-4">
          {landingFeatures.map((feature) => (
            <article key={feature.title} className="bg-white p-7 transition-colors hover:bg-slate-50">
              <div className={`mb-6 h-2 w-16 rounded-full ${feature.accent}`} />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{feature.eyebrow}</p>
              <h3 className="mt-3 text-xl font-black tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
