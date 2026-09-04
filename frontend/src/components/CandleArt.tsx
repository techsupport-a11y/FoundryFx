/* Thin-line candlestick illustration, deterministic pseudo-random walk. */
export function CandleArt({ className = "" }: { className?: string }) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  let mid = 140;
  const bars = Array.from({ length: 30 }, (_, i) => {
    mid = Math.max(24, Math.min(175, mid - 4 - rand() * 8 + rand() * 7));
    const body = 3 + rand() * 9;
    const up = rand() > 0.45;
    const top = up ? mid - body : mid;
    return {
      x: 10 + i * 20,
      high: top - 8 - rand() * 22,
      top,
      body,
      low: top + body + 8 + rand() * 22,
    };
  });
  return (
    <svg viewBox="0 0 600 220" preserveAspectRatio="none" className={className} aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="1">
        {bars.map((b, i) => (
          <g key={i}>
            <line x1={b.x} y1={b.high} x2={b.x} y2={b.low} opacity="0.7" />
            <rect x={b.x - 5.6} y={b.top} width="11.2" height={b.body} />
          </g>
        ))}
      </g>
    </svg>
  );
}
