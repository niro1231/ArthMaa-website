export function LogoMark({ size = 44 }: { size?: number }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#6b1f2a" />
      <circle cx="32" cy="32" r="27" fill="none" stroke="#e3a72f" strokeWidth="1.2" strokeDasharray="1.5 3" />
      <g transform="translate(32 32)">
        {petals.map((a) => (
          <path
            key={a}
            d="M0 -4 C 5 -10, 5 -17, 0 -22 C -5 -17, -5 -10, 0 -4 Z"
            fill={a % 90 === 0 ? "#e3a72f" : "#c2573a"}
            transform={`rotate(${a})`}
          />
        ))}
        <circle r="4" fill="#fbf4e8" />
      </g>
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-none">
        <span
          className={`block font-serif text-2xl font-bold tracking-tight ${
            light ? "text-cream" : "text-maroon"
          }`}
        >
          ArthMaa
        </span>
        <span
          className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] ${
            light ? "text-gold" : "text-terracotta"
          }`}
        >
          Crafts &amp; Decor
        </span>
      </span>
    </span>
  );
}
