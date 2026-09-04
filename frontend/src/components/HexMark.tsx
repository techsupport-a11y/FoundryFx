export function HexMark({ className = "h-8 w-8", strokeWidth = 2.4 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <polygon
        points="24,3.5 42.6,14.2 42.6,33.8 24,44.5 5.4,33.8 5.4,14.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M24 24 L24 44.5 M24 24 L42.6 33.8 M24 24 L5.4 33.8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
