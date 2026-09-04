/* CSS/SVG product mockup of the Foundry trade builder (AUD/USD collar).
   PLACEHOLDER: swap this whole frame for real product screenshots when available. */
export default function TradeBuilderMockup({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      data-testid="trade-builder-mockup"
      data-placeholder="product-screenshot: trade-builder-audusd-collar"
      className={`overflow-hidden rounded-xl border border-white/15 bg-navy-950/90 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] backdrop-blur ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-navy-900/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-royal-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-slateblue-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-slateblue-300/60" />
        <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-[10px] tracking-wider text-slateblue-400">
          foundryfx.org/syfx/portal — Trade Builder
        </div>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-[1.5fr_1fr]">
        {/* Scenario chart */}
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slateblue-400">
              Scenario Analysis
            </p>
            <p className="text-[10px] tracking-wider text-slateblue-500">AUD/USD · 12M</p>
          </div>
          <svg viewBox="0 0 320 150" className="mt-2 w-full" fill="none" aria-hidden="true">
            {[30, 65, 100, 135].map((y) => (
              <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#7288AE" strokeOpacity="0.14" strokeDasharray="3 5" />
            ))}
            {/* collar payoff: floored, sloped, capped */}
            <path
              d="M8 118 L88 118 L232 34 L312 34"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M8 118 L88 118 L232 34 L312 34 L312 150 L8 150 Z" fill="#4B5694" fillOpacity="0.18" />
            <line x1="160" y1="10" x2="160" y2="150" stroke="#7288AE" strokeOpacity="0.4" strokeDasharray="2 4" />
            <circle cx="160" cy="76" r="3.5" fill="#FFFFFF" />
            <text x="166" y="72" fill="#8DA0C0" fontSize="8" letterSpacing="1">SPOT 0.6580</text>
            <text x="60" y="132" fill="#8DA0C0" fontSize="7" letterSpacing="0.5">FLOOR 0.6350</text>
            <text x="238" y="26" fill="#8DA0C0" fontSize="7" letterSpacing="0.5">CAP 0.6920</text>
          </svg>
          {!compact && (
            <div className="mt-1 grid grid-cols-3 gap-2 text-center">
              {[
                ["0.6350", "Participation 100%"],
                ["0.6580", "Mid · Zero Cost"],
                ["0.6920", "Upside Cap"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-md bg-white/[0.04] px-1 py-1.5">
                  <p className="text-[11px] font-semibold text-white">{v}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wider text-slateblue-500">{l}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Provider comparison + summary */}
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slateblue-400">
              Provider Comparison
            </p>
            <table className="mt-2 w-full text-left">
              <tbody>
                {[
                  ["DB", "0.6918", "+1.8 vols", true],
                  ["BARX", "0.6915", "+2.0 vols", false],
                  ["HSBC", "0.6912", "+2.2 vols", false],
                  ["CITI", "0.6909", "+2.4 vols", false],
                ].map(([lp, rate, prem, best]) => (
                  <tr key={lp as string} className="border-b border-white/5 last:border-0">
                    <td className="py-1.5 text-[10px] font-semibold tracking-wider text-white">
                      {lp}
                      {best ? (
                        <span className="ml-1.5 rounded-sm bg-royal-600 px-1 py-px text-[7px] uppercase tracking-wider text-white">
                          Best
                        </span>
                      ) : null}
                    </td>
                    <td className="py-1.5 text-right text-[10px] text-slateblue-300">{rate}</td>
                    <td className="py-1.5 text-right text-[10px] text-slateblue-500">{prem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-1 rounded-lg border border-royal-600/40 bg-royal-600/15 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slateblue-300">
              Trade Summary
            </p>
            <dl className="mt-2 space-y-1.5">
              {[
                ["Structure", "Zero-Cost Collar"],
                ["Notional", "USD 25,000,000"],
                ["Tenor", "12 Months"],
                ["Premium", "Zero"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-2">
                  <dt className="text-[9px] uppercase tracking-wider text-slateblue-400">{k}</dt>
                  <dd className="text-[10px] font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
