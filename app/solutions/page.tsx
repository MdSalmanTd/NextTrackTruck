import { solutionCards } from "@/features/landing/landing-data";
import { PublicSiteShell } from "@/features/marketing/PublicSiteShell";

export const metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <PublicSiteShell
      eyebrow="Who it helps"
      title="Designed for owners, dispatch teams, and drivers"
      description="TrackTruck adapts to the different people who keep a fleet moving, giving each role a cleaner view of the same trip data."
    >
      <section className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {solutionCards.map((solution) => (
          <article key={solution.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Use case</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">{solution.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{solution.desc}</p>
          </article>
        ))}
      </section>
    </PublicSiteShell>
  );
}