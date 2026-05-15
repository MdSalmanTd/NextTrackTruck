import type { ReactNode } from "react";
import Link from "next/link";
import { LandingFooter } from "@/features/landing/LandingFooter";
import { LandingNav } from "@/features/landing/LandingNav";

type PublicSiteShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PublicSiteShell({ eyebrow, title, description, children }: PublicSiteShellProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased">
      <LandingNav />
      <section className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-14 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/register" className="rounded-full bg-slate-950 px-5 py-3 text-white transition hover:bg-slate-800">
              Start free
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-3 text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
      <div className="px-5 py-16 md:px-8">{children}</div>
      <LandingFooter />
    </main>
  );
}