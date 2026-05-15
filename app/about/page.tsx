import { companyValues } from "@/features/landing/landing-data";
import { PublicSiteShell } from "@/features/marketing/PublicSiteShell";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PublicSiteShell
      eyebrow="About TrackTruck"
      title="A clearer operating layer for fleet teams"
      description="TrackTruck is built to make day-to-day fleet work feel structured, readable, and easier to hand off between teams."
    >
      <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Mission</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight">Replace scattered trip updates with one dependable view.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Fleet work is busiest when status lives in WhatsApp messages, notebooks, and spreadsheets. TrackTruck is meant to
            turn that into a product team can trust every day.
          </p>
        </article>

        <div className="grid gap-4 md:grid-cols-3">
          {companyValues.map((value) => (
            <article key={value.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black tracking-tight">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{value.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PublicSiteShell>
  );
}