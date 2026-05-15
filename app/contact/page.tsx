import Link from "next/link";
import { contactChannels } from "@/features/landing/landing-data";
import { PublicSiteShell } from "@/features/marketing/PublicSiteShell";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PublicSiteShell
      eyebrow="Contact"
      title="Talk to the team behind TrackTruck"
      description="Use this page for sales questions, onboarding support, or a product demo request."
    >
      <section className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Reach us</p>
          <div className="mt-6 space-y-5">
            {contactChannels.map((channel) => (
              <div key={channel.label} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{channel.label}</p>
                <p className="mt-2 text-base font-semibold text-slate-950">{channel.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] border border-slate-950 bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Next step</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight">Start with a short demo and see the workflow in context.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            We can walk through trip capture, dashboard visibility, and the setup your operation would need.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100">
              Create account
            </Link>
            <Link href="/login" className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Sign in
            </Link>
          </div>
        </article>
      </section>
    </PublicSiteShell>
  );
}