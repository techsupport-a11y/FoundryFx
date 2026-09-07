import type { ReactNode } from "react";
import { HexMark } from "./HexMark";

/* ------------------------------------------------------------------ */
/* Browser chrome frame — wraps any mock panel.                        */
/* PLACEHOLDER: swap these CSS mockups for real product screenshots.   */
/* ------------------------------------------------------------------ */
export function BrowserFrame({
  url,
  children,
  comment,
  className = "",
}: {
  url: string;
  children: ReactNode;
  comment: string;
  className?: string;
}) {
  return (
    <div
      data-comment={comment}
      data-placeholder={comment}
      className={`overflow-hidden rounded-xl border border-white/10 bg-navy-950 shadow-[0_50px_100px_-24px_rgba(0,0,0,0.65)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-black/30 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-slateblue-500/40" />
          <span className="h-2 w-2 rounded-full bg-slateblue-500/40" />
          <span className="h-2 w-2 rounded-full bg-slateblue-500/40" />
        </div>
        <div className="flex-1 rounded-md border border-white/10 bg-black/30 px-3 py-1 text-center font-mono text-[10px] tracking-wider text-slateblue-500">
          {url}
        </div>
        <span className="w-8" />
      </div>
      {children}
    </div>
  );
}

const PROVIDERS = [
  { name: "Atlas Liquidity", premium: "0.00", margin: "+18.2", allIn: "18.2", best: false },
  { name: "Meridian FX", premium: "0.00", margin: "+16.4", allIn: "16.4", best: true },
  { name: "Cobalt Markets", premium: "0.00", margin: "+19.8", allIn: "19.8", best: false },
  { name: "Northgate", premium: "0.00", margin: "+21.1", allIn: "21.1", best: false },
];

/* Hero mock — AUD/USD collar: scenario chart, trade summary, provider table. */
export function TradeBuilderMock() {
  return (
    <div data-testid="trade-builder-mock">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs text-white">AUD/USD</span>
          <span className="rounded-full border border-white/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white">
            Collar
          </span>
        </div>
        <span className="font-mono text-[9px] tracking-wider text-slateblue-500">
          USD 10,000,000 · 12M
        </span>
      </div>

      <div className="grid sm:grid-cols-5">
        <div className="p-4 sm:col-span-3">
          <div className="flex items-center justify-between">
            <p className="mock-caption">Scenario — payoff at expiry</p>
            <span className="rounded-full border border-royal-600 bg-royal-600/40 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-white">
              Live
            </span>
          </div>
          <svg viewBox="0 0 300 150" className="mt-2 w-full" aria-hidden="true">
            {[30, 65, 100, 135].map((y) => (
              <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#FFFFFF" strokeOpacity="0.06" />
            ))}
            <line x1="90" y1="10" x2="90" y2="140" stroke="#7288AE" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.6" />
            <line x1="210" y1="10" x2="210" y2="140" stroke="#7288AE" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.6" />
            <line x1="158" y1="10" x2="158" y2="140" stroke="#FFFFFF" strokeOpacity="0.25" strokeDasharray="2 4" />
            <path d="M8 118 L90 118 L210 44 L292 44" stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
            <circle cx="158" cy="76" r="3" fill="#FFFFFF" />
            <text x="90" y="149" textAnchor="middle" fill="#7288AE" fontSize="8" fontFamily="monospace">0.6400</text>
            <text x="158" y="149" textAnchor="middle" fill="#FFFFFF" fillOpacity="0.8" fontSize="8" fontFamily="monospace">SPOT 0.6650</text>
            <text x="210" y="149" textAnchor="middle" fill="#7288AE" fontSize="8" fontFamily="monospace">0.6900</text>
            <text x="12" y="112" fill="#7288AE" fontSize="8" fontFamily="monospace">FLOOR</text>
            <text x="252" y="38" fill="#7288AE" fontSize="8" fontFamily="monospace">CAP</text>
          </svg>
        </div>
        <div className="border-t border-white/10 p-4 sm:col-span-2 sm:border-l sm:border-t-0">
          <p className="mock-caption">Trade summary</p>
          <dl className="mt-3 space-y-2">
            {[
              ["Structure", "Zero-Cost Collar"],
              ["Floor", "0.6400"],
              ["Cap", "0.6900"],
              ["Premium", "0.00 — zero-cost"],
              ["Tenor", "12M"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-3">
                <dt className="text-[10px] text-slateblue-500">{k}</dt>
                <dd className="font-mono text-[10px] text-white">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 rounded-md border border-white/15 px-2.5 py-1.5 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-slateblue-500">
            Status — Indicative
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-4">
        <p className="mock-caption">Provider comparison — live</p>
        <div className="mt-2.5 space-y-1.5">
          <div className="grid grid-cols-4 gap-2 px-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slateblue-500">
            <span>Provider</span>
            <span className="text-right">LP premium</span>
            <span className="text-right">Margin bps</span>
            <span className="text-right">All-in</span>
          </div>
          {PROVIDERS.map((p) => (
            <div
              key={p.name}
              className={`grid grid-cols-4 items-center gap-2 rounded-md px-2 py-1.5 font-mono text-[10px] ${
                p.best ? "border border-royal-600/60 bg-royal-600/25 text-white" : "text-slateblue-400"
              }`}
            >
              <span className="flex items-center gap-2">
                {p.name}
                {p.best ? (
                  <span className="rounded-sm bg-white px-1 py-px font-mono text-[7px] uppercase tracking-wider text-navy-900">
                    Best
                  </span>
                ) : null}
              </span>
              <span className="text-right">{p.premium}</span>
              <span className="text-right">{p.margin}</span>
              <span className="text-right text-white">{p.allIn}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Features mock — scenario analysis table with floating overlay cards. */
export function ScenarioMock() {
  const rows = [
    ["0.6200", "0.6400", "Floor", false],
    ["0.6400", "0.6400", "—", false],
    ["0.6650", "0.6650", "Spot", true],
    ["0.6900", "0.6900", "—", false],
    ["0.7100", "0.6900", "Cap", false],
  ];
  return (
    <div className="relative" data-testid="scenario-mock">
      <BrowserFrame url="portal.foundryfx.org/syfx/portal/scenarios" comment="placeholder: features scenario-analysis panel — swap for production screenshot">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <p className="mock-caption">Scenario analysis — AUD/USD Collar</p>
            <span className="rounded-full border border-royal-600 bg-royal-600/40 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-white">
              Live
            </span>
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-3 gap-2 px-2 font-mono text-[8px] uppercase tracking-[0.18em] text-slateblue-500">
              <span>Spot at expiry</span>
              <span className="text-right">Effective rate</span>
              <span className="text-right">Result</span>
            </div>
            {rows.map(([spot, rate, result, hot]) => (
              <div
                key={spot as string}
                className={`mt-1 grid grid-cols-3 gap-2 rounded-md px-2 py-2 font-mono text-[10px] ${
                  hot ? "border border-white/25 bg-white/10 text-white" : "text-slateblue-400"
                }`}
              >
                <span>{spot}</span>
                <span className="text-right">{rate}</span>
                <span className="text-right uppercase">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
      <div className="absolute -right-4 -top-8 hidden rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 shadow-2xl lg:block">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slateblue-400">Provider comparison</p>
      </div>
      <div className="absolute -bottom-6 -left-4 hidden rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 shadow-2xl lg:block">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slateblue-400">Trade summary</p>
        <p className="mt-1 font-mono text-[10px] text-white">Collar · 12M · Zero-cost · USD 10M</p>
      </div>
    </div>
  );
}

/* Services pillar 1 — dynamic field builder. */
export function FieldBuilderMock() {
  const used: Array<[string, string]> = [
    ["Currency pair", "AUD/USD"],
    ["Notional", "USD 10,000,000"],
    ["Tenor", "12M"],
    ["Floor strike", "0.6400"],
    ["Cap strike", "0.6900"],
    ["Premium", "Zero-cost"],
  ];
  const unused = ["Participation rate", "Barrier level", "Fixing schedule"];
  return (
    <BrowserFrame url="portal.foundryfx.org/syfx/portal/structures/collar" comment="placeholder: deal structuring field builder — swap for production screenshot">
      <div data-testid="field-builder-mock" className="p-4">
        <div className="flex flex-wrap gap-1.5">
          {["Forward", "Collar", "Seagull", "TARF", "Knock-In Barrier"].map((s) => (
            <span
              key={s}
              className={`rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] ${
                s === "Collar"
                  ? "bg-white text-navy-900"
                  : "border border-white/15 text-slateblue-400"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {used.map(([k, v]) => (
            <div key={k} className="rounded-md border border-white/12 bg-white/[0.04] px-3 py-2.5">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slateblue-500">{k}</p>
              <p className="mt-1 font-mono text-[11px] text-white">{v}</p>
            </div>
          ))}
          {unused.map((k) => (
            <div key={k} className="rounded-md border border-white/5 px-3 py-2.5 opacity-40">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slateblue-500">{k}</p>
              <p className="mt-1 font-mono text-[10px] italic text-slateblue-500">Not used by Collar</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-slateblue-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slateblue-300" />
            Payoff preview — live
          </span>
          <span className="font-mono text-[9px] tracking-wider text-slateblue-500">6 of 9 fields shown</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* Services pillar 2 — sensitivity ladder with LP premium / margin toggle. */
export function SensitivityMock() {
  return (
    <BrowserFrame url="portal.foundryfx.org/syfx/portal/scenarios" comment="placeholder: live pricing sensitivity panel — swap for production screenshot">
      <div data-testid="sensitivity-mock" className="p-4">
        <div className="flex items-center justify-between">
          <p className="mock-caption">Sensitivity — spot ladder</p>
          <div className="flex gap-1.5">
            <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-navy-900">
              LP premium
            </span>
            <span className="rounded-full border border-white/20 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-slateblue-400">
              + Margin
            </span>
          </div>
        </div>
        <svg viewBox="0 0 320 150" className="mt-3 w-full" aria-hidden="true">
          {[30, 65, 100, 135].map((y) => (
            <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#FFFFFF" strokeOpacity="0.06" />
          ))}
          <path d="M10 130 C 90 128, 150 118, 175 92 C 210 56, 260 30, 310 18" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
          <path d="M10 132 C 90 131, 150 124, 175 104 C 210 76, 260 52, 310 40" stroke="#7288AE" strokeWidth="1" strokeDasharray="4 4" fill="none" strokeOpacity="0.7" />
          <path d="M10 134 C 90 134, 150 130, 175 116 C 210 94, 260 74, 310 62" stroke="#7288AE" strokeWidth="1" strokeDasharray="2 4" fill="none" strokeOpacity="0.45" />
          <circle cx="175" cy="92" r="3" fill="#FFFFFF" />
          <line x1="175" y1="14" x2="175" y2="140" stroke="#FFFFFF" strokeOpacity="0.25" strokeDasharray="2 4" />
          <text x="288" y="16" fill="#7288AE" fontSize="7" fontFamily="monospace">+30D</text>
          <text x="288" y="60" fill="#7288AE" fontSize="7" fontFamily="monospace" fillOpacity="0.7">+60D</text>
          {["0.6200", "0.6400", "0.6650", "0.6900", "0.7100"].map((v, i) => (
            <text key={v} x={16 + i * 66} y="148" fill={i === 2 ? "#FFFFFF" : "#7288AE"} fillOpacity={i === 2 ? 0.9 : 0.7} fontSize="7.5" fontFamily="monospace">{v}</text>
          ))}
          <text x="156" y="108" fill="#FFFFFF" fillOpacity="0.85" fontSize="7.5" fontFamily="monospace">TODAY</text>
        </svg>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Δ 0.42", "Vega $18.4k", "Θ -$2.1k /day"].map((g) => (
            <span key={g} className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[9px] text-white">
              {g}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/* Services pillar 3 — termsheet + trade journal (light card on light section). */
export function ExecutionMock() {
  const journal = [
    ["09:41:02", "Rate sealed — spot 0.6650", "#3fa9…c1"],
    ["09:41:19", "Termsheet sent to client", "#77b2…9e"],
    ["10:03:44", "Client approved via secure link", "#e40d…55"],
    ["10:03:45", "Executed — Meridian FX · +16.4 bps", "#0c8a…f7"],
  ];
  return (
    <div
      data-testid="execution-mock"
      data-placeholder="placeholder: execution termsheet and journal — swap for production screenshot"
      className="overflow-hidden rounded-xl border border-slateblue-200 bg-white shadow-[0_30px_80px_-30px_rgba(17,24,68,0.35)]"
    >
      <div className="p-5">
        <p className="mock-caption !text-slateblue-500">Termsheet — outbound</p>
        <p className="mt-2 font-mono text-xs font-semibold text-navy-900">
          AUD/USD Zero-Cost Collar — USD 10,000,000 — 12M
        </p>
        <p className="mt-1.5 font-mono text-[10px] text-slateblue-500">
          to: execution@ashford-capital.com
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-md border border-slateblue-200 bg-mist-50 px-2.5 py-1 font-mono text-[9px] text-navy-900">
            termsheet-FY-26-0417.pdf
          </span>
          <span className="rounded-md border border-royal-600/40 bg-royal-600/[0.08] px-2.5 py-1 font-mono text-[9px] text-royal-600">
            Secure approval link — expires 14:00 GMT
          </span>
        </div>
      </div>
      <div className="border-t border-slateblue-100 p-5">
        <p className="mock-caption !text-slateblue-500">Trade journal — FY-26-0417</p>
        <div className="mt-3 divide-y divide-slateblue-100">
          {journal.map(([t, event, hash]) => (
            <div key={t} className="flex items-baseline gap-3 py-2.5">
              <span className="font-mono text-[9px] text-slateblue-500">{t}</span>
              <span className="flex-1 text-[11px] font-medium text-navy-900">{event}</span>
              <span className="font-mono text-[9px] text-slateblue-400">{hash}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 border-t border-slateblue-100 pt-3 font-mono text-[8px] uppercase tracking-[0.22em] text-slateblue-400">
          Hash-chained — tampering breaks the chain
        </p>
      </div>
    </div>
  );
}

/* About — audit chain cards (dark section). */
export function AuditChain() {
  const blocks = [
    ["Rate Sealed", "0.6650 · 09:41:02 GMT", "#3fa9…c1"],
    ["Quote Sent", "Meridian FX · +16.4 bps", "#77b2…9e"],
    ["Client Approved", "Secure link · IP logged", "#e40d…55"],
    ["Executed", "Ticket FY-26-0417", "#0c8a…f7"],
  ];
  return (
    <div data-testid="audit-chain" data-placeholder="placeholder: audit chain diagram — swap for motion graphic">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {blocks.map(([title, detail, hash], i) => (
          <div key={title} className="relative">
            {i < blocks.length - 1 ? (
              <div className="absolute -right-3 top-1/2 hidden h-px w-2 bg-slateblue-500/40 lg:block" aria-hidden="true" />
            ) : null}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-center transition-colors duration-500 hover:border-slateblue-400/40">
              <HexMark className="mx-auto h-6 w-6 text-slateblue-400" strokeWidth={1.6} />
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{title}</p>
              <p className="mt-1.5 text-[10px] text-slateblue-400">{detail}</p>
              <p className="mt-2 font-mono text-[9px] text-slateblue-500">{hash}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center font-mono text-[9px] uppercase tracking-[0.24em] text-slateblue-500">
        Tamper-evident rate sealing — FX Engine audit chain
      </p>
    </div>
  );
}
