import Link from "next/link";
import { pricingPlans } from "@/features/landing/landing-data";
import { PublicSiteShell } from "@/features/marketing/PublicSiteShell";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <PublicSiteShell
      eyebrow="Pricing"
      title="Simple plan framing for real fleet teams"
      description="Start with the workflow you need today and expand when the operation grows. The platform can be configured around your team structure."
    >
      <section className="mx-auto grid max-w-7xl gap-5 xl:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[1.75rem] border p-7 shadow-sm ${plan.featured ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white"}`}
          >
            <p className={`text-xs font-black uppercase tracking-[0.2em] ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>
              {plan.name}
            </p>
            <div className="mt-4 flex items-end gap-2">
              <div className="text-4xl font-black tracking-tight">{plan.price}</div>
            </div>
            <p className={`mt-3 text-sm leading-7 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>
              {plan.description}
            </p>
            <div className="mt-6 border-t border-current/10 pt-6">
              <ul className="space-y-3 text-sm font-semibold">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className={`mt-1 h-2.5 w-2.5 rounded-full ${plan.featured ? "bg-white" : "bg-slate-950"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-bold transition ${plan.featured ? "bg-white text-slate-950 hover:bg-slate-100" : "bg-slate-950 text-white hover:bg-slate-800"}`}
            >
              Request a quote
            </Link>
          </article>
        ))}
      </section>
    </PublicSiteShell>
  );
}