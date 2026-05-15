import Link from "next/link";
import { primaryNavLinks } from "@/features/landing/landing-data";

export function LandingFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white px-5 py-10 text-slate-700 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <Link href="/" className="flex items-center gap-3 font-black text-slate-950">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-slate-950 text-xs text-white shadow-sm">
              TT
            </span>
            TrackTruck
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Fleet operations software for trip logging, dispatch visibility, and reporting.
          </p>
          <p className="mt-6 text-sm text-slate-500">Copyright {new Date().getFullYear()} TrackTruck. All rights reserved.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Product</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-slate-600">
              {primaryNavLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-slate-950">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Account</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-slate-600">
              <Link href="/login" className="transition-colors hover:text-slate-950">
                Sign in
              </Link>
              <Link href="/register" className="transition-colors hover:text-slate-950">
                Create account
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Contact</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-slate-600">
              <Link href="/contact" className="transition-colors hover:text-slate-950">
                Contact sales
              </Link>
              <Link href="mailto:support@tracktruck.io" className="transition-colors hover:text-slate-950">
                support@tracktruck.io
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
