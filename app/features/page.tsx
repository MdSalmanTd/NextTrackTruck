import { landingFeatures } from "@/features/landing/landing-data";
import { PublicSiteShell } from "@/features/marketing/PublicSiteShell";

export const metadata = {
  title: "Features",
};

export default function FeaturesPage() {
  return (
    <PublicSiteShell
      eyebrow="Platform features"
      title="A focused system for fleet operations"
      description="TrackTruck keeps the core trip workflow together so your team can move from planning to reporting without switching tools."
    >
      <section className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {landingFeatures.map((feature) => (
          <article key={feature.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className={`mb-5 h-2 w-16 rounded-full ${feature.accent}`} />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{feature.eyebrow}</p>
            <h2 className="mt-3 text-xl font-black tracking-tight">{feature.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
          </article>
        ))}
      </section>
    </PublicSiteShell>
  );
}