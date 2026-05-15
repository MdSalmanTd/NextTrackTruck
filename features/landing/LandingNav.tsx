import Link from "next/link";
import { primaryNavLinks } from "@/features/landing/landing-data";

export function LandingNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 px-5 py-4 text-slate-950 backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-black text-slate-950">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm text-white shadow-sm">
            TT
          </span>
          <span className="text-base tracking-tight">TrackTruck</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            {primaryNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </div>
          <Link className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950" href="/login">
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Get started
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950" href="/login">
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Start
          </Link>
        </div>
      </div>
    </nav>
  );
}
