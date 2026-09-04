/* Decorative FX-network mesh + candlestick line art. Pure SVG, inherits color via currentColor. */
export function NetworkMesh({ className = "" }: { className?: string }) {
  const nodes: Array<[number, number, number]> = [
    [80, 120, 3.5], [220, 70, 2.5], [360, 150, 4], [520, 90, 2.5], [680, 160, 3.5],
    [840, 80, 2.5], [1000, 150, 4], [1140, 90, 2.5], [150, 300, 2.5], [330, 380, 3.5],
    [500, 300, 2.5], [660, 400, 4], [850, 320, 2.5], [1030, 400, 3.5], [1180, 300, 2.5],
    [240, 500, 3], [470, 520, 2.5], [760, 520, 3], [980, 520, 2.5],
  ];
  const links: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
    [0, 8], [2, 8], [2, 9], [3, 10], [4, 10], [4, 11], [6, 12], [6, 13],
    [7, 14], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14],
    [8, 15], [9, 16], [11, 17], [13, 18], [15, 16], [16, 17], [17, 18],
  ];
  return (
    <svg
      viewBox="0 0 1260 600"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.28"
        />
      ))}
      {nodes.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill="currentColor" opacity="0.8" />
          <circle cx={x} cy={y} r={r * 3.2} stroke="currentColor" strokeWidth="0.6" opacity="0.22" />
        </g>
      ))}
    </svg>
  );
}

export function CandlestickArt({ className = "" }: { className?: string }) {
  const bars: Array<[number, number, number, number, number]> = [
    // x, high, open/close top, body height, low
    [60, 40, 70, 26, 150], [110, 60, 90, 30, 170], [160, 30, 60, 22, 130],
    [210, 80, 110, 34, 190], [260, 55, 85, 20, 160], [310, 90, 120, 28, 205],
    [360, 70, 100, 36, 185], [410, 40, 75, 24, 145], [460, 65, 95, 30, 175],
    [510, 25, 60, 20, 125], [560, 50, 80, 26, 155],
  ];
  return (
    <svg
      viewBox="0 0 620 240"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <polyline
        points="30,170 110,120 190,150 270,95 350,130 430,80 510,110 590,60"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {bars.map(([x, high, top, h, low], i) => (
        <g key={i} stroke="currentColor" opacity="0.55">
          <line x1={x} y1={high} x2={x} y2={low} strokeWidth="1.2" />
          <rect x={x - 8} y={top} width="16" height={h} strokeWidth="1.2" fill="currentColor" fillOpacity="0.12" />
        </g>
      ))}
    </svg>
  );
}
