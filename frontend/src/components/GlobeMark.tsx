import { HexMark } from "./HexMark";

/* Wireframe globe with a slow-spinning dashed orbit and the hex mark at centre. */
export function GlobeMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      <div className="animate-spin-slower absolute inset-0">
        <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
          <circle cx="200" cy="200" r="186" stroke="#7288AE" strokeOpacity="0.35" strokeDasharray="2 10" />
          <circle cx="200" cy="14" r="3" fill="#7288AE" />
          <circle cx="386" cy="200" r="3" fill="#7288AE" fillOpacity="0.6" />
        </svg>
      </div>
      <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
        <circle cx="200" cy="200" r="150" stroke="#7288AE" strokeOpacity="0.5" />
        <ellipse cx="200" cy="200" rx="150" ry="58" stroke="#7288AE" strokeOpacity="0.35" />
        <ellipse cx="200" cy="200" rx="58" ry="150" stroke="#7288AE" strokeOpacity="0.35" />
        <ellipse cx="200" cy="200" rx="112" ry="150" stroke="#7288AE" strokeOpacity="0.2" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="#7288AE" strokeOpacity="0.25" />
        <circle cx="200" cy="50" r="3.5" fill="#7288AE" />
        <circle cx="318" cy="262" r="3.5" fill="#7288AE" />
        <circle cx="92" cy="148" r="3.5" fill="#7288AE" fillOpacity="0.7" />
        <circle cx="262" cy="118" r="3.5" fill="#7288AE" fillOpacity="0.7" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <HexMark className="h-16 w-16 text-white/70" strokeWidth={1.6} />
      </div>
    </div>
  );
}
