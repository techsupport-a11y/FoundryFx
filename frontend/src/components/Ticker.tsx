const ITEMS = [
  "Collar", "Seagull", "Knock-In Barrier", "Knock-Out Barrier", "TARF",
  "Accumulator", "Decumulator", "Participating Forward", "Dual Currency",
  "Pivot", "Range Accrual", "Ratio Forward",
];

/* Slow marquee of structure names — the catalogue in motion. */
export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div data-testid="structure-ticker" className="overflow-hidden border-b border-slateblue-100 bg-white py-5">
      <div className="animate-ticker flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="px-7 font-mono text-[10px] uppercase tracking-[0.35em] text-slateblue-500">
                  {item}
                </span>
                <span className="h-1 w-1 rounded-full bg-slateblue-300" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
