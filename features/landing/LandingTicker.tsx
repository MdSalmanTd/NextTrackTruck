import { tickerItems } from "@/features/landing/landing-data";

export function LandingTicker() {
  return (
    <div className="overflow-hidden border-y border-slate-200 bg-white py-3">
      <div className="landing-ticker-track flex w-max gap-4 whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
