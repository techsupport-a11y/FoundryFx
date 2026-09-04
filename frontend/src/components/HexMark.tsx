export function HexMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 3.5 41.5 13.75v20.5L24 44.5 6.5 34.25V13.75L24 3.5Z"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M24 14.5 32.5 19.5v9.5L24 34l-8.5-5v-9.5l8.5-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        opacity="0.85"
      />
      <path
        d="M24 14.5V24m0 0 8.5-4.5M24 24l-8.5-4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.6"
      />
    </svg>
  );
}
