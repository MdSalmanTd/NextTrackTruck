import { landingSteps } from "@/features/landing/landing-data";

export function HowItWorks() {
  return (
    <section id="how" className="bg-slate-950 px-5 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-400">How it works</p>
          <h2 className="mt-3 text-4xl font-black leading-none tracking-tight md:text-6xl">
            Four steps to clearer operations
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
            Start simple, then let the trip records become the working view for dispatch, ownership, and finance.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">
          {landingSteps.map((step, index) => (
            <article
              key={step.n}
              className={`grid gap-5 p-7 transition-colors hover:bg-white/5 sm:grid-cols-[72px_1fr] ${
                index < landingSteps.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="text-4xl font-black tracking-tight text-white">{step.n}</span>
              <div>
                <h3 className="text-xl font-black tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
