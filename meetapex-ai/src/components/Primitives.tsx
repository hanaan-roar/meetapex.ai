import React from 'react';

const I: Record<string, string> = {
  zap: "M13 2 3 14h9l-1 8 10-12h-9l1-8Z",
  layers: "M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5",
  compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z",
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  check: "M20 6 9 17l-5-5",
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M18 6 6 18M6 6l12 12",
  quote: "M3 21c3 0 7-1 7-8V5H3v7h4M14 21c3 0 7-1 7-8V5h-7v7h4",
  workflow: "M3 3h6v6H3zM15 15h6v6h-6zM9 6h6a2 2 0 0 1 2 2v7",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2",
  chevronDown: "M6 9l6 6 6-6",
  arrowUpRight: "M7 17 17 7M7 7h10v10",
  sparkles: "M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8",
  plus: "M12 5v14M5 12h14",
  key: "M15.5 7.5a4 4 0 1 1-5.4 3.76L3 18.4V21h2.6l1-1h2v-2h2l1.13-1.13A4 4 0 0 0 15.5 7.5Z",
  refresh: "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11",
  fileText: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6ZM14 2v6h6M9 13h6M9 17h6",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
  trendingUp: "M22 7l-8.5 8.5-5-5L2 17M16 7h6v6",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  gauge: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 12l4-4",
  dollar: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  calendar: "M8 2v4M16 2v4M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  message: "M21 11.5a8.38 8.38 0 0 1-9 8.34 9 9 0 0 1-4-1L3 20l1.16-4A8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z",
  building: "M4 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M4 22h16M9 7h2M9 11h2M9 15h2",
  rocket: "M5 13c-1 1.5-1 4-1 6 2 0 4.5 0 6-1M4.5 14.5a14 14 0 0 1 8-10.5c2 0 4 0 5 1s1 3 1 5a14 14 0 0 1-10.5 8M9 15l-1-1m7-7a1.5 1.5 0 1 0 0 0Z",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8.2 13.9 7 22l5-3 5 3-1.2-8.1",
  cpu: "M4 4h16v16H4zM9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3",
  slack: "M6 14a2 2 0 1 1-2-2h2v2ZM7 14a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0v-5ZM10 6a2 2 0 1 1 2 2h-2V6ZM10 7a2 2 0 0 1 0 4H5a2 2 0 0 1 0-4h5ZM18 10a2 2 0 1 1 2 2h-2v-2ZM17 10a2 2 0 0 1-4 0V5a2 2 0 0 1 4 0v5ZM14 18a2 2 0 1 1-2-2h2v2ZM14 17a2 2 0 0 1 0-4h5a2 2 0 0 1 0 4h-5Z",
  logIn: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3",
  user: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
};

export function Spark({ size = 16, color = 'var(--apex-mint)', style }: { size?: number; color?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden="true">
      <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z" />
    </svg>
  );
}

export function Icon({ name, size = 20, color = 'currentColor', stroke = 1.75 }: { name: string; size?: number; color?: string; stroke?: number }) {
  const d = I[name] ?? '';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d.split('M').filter(Boolean).map((seg, i) => <path key={i} d={'M' + seg} />)}
    </svg>
  );
}

export function Stars({ size = 14, color = 'var(--accent-action)' }: { size?: number; color?: string }) {
  return (
    <span className="stars" style={{ color }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '18px', height: '18px' }}>
          <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.4l-5.8 3.07 1.1-6.47-4.7-4.58 6.5-.95L12 2.5Z" style={{ fill: 'rgb(31, 122, 72)', strokeWidth: '1px' }} />
        </svg>
      ))}
    </span>
  );
}

export function Button({ children, variant = 'primary', size = 'md', iconRight, iconLeft, onClick, type }: {
  children: React.ReactNode;
  variant?: string;
  size?: string;
  iconRight?: string;
  iconLeft?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const sz = size === 'lg' ? 17 : size === 'sm' ? 14 : 16;
  return (
    <button className={`ax-btn ax-btn-${variant} ax-btn-${size}`} onClick={onClick} type={type ?? 'button'}>
      {iconLeft && <Icon name={iconLeft} size={sz} stroke={1.75} />}
      {children}
      {iconRight && <span className="arr"><Icon name={iconRight} size={sz} stroke={1.75} /></span>}
    </button>
  );
}
