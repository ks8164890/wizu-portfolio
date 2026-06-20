"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { socials } from "@/lib/content";

function MagneticIcon({
  label,
  url,
  children,
}: {
  label: string;
  url: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-bone transition-colors hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
    >
      {children}
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-surface2 px-2 py-1 font-mono text-[10px] text-muted opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </motion.a>
  );
}

export default function SocialDock() {
  const icons: Record<string, React.ReactNode> = {
    X: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-7.4 8.5L23 22h-6.9l-5.4-7-6.2 7H1.3l7.9-9L1 2h7l4.9 6.4L18.9 2Zm-2.4 18h1.9L8.6 4H6.6l9.9 16Z" />
      </svg>
    ),
    Telegram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.5 3.5 2.7 11.2c-1.1.4-1.1 1 0 1.4l4.8 1.5L19.9 6c.5-.3 1-.1.6.3l-9.6 8.8-.4 4.7c.3 0 .5-.1.7-.4l2.2-2.1 4.5 3.3c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.1-.4-1.6-1-1.3Z" />
      </svg>
    ),
    Instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  };

  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => (
        <MagneticIcon key={s.label} label={`${s.label} — ${s.value}`} url={s.url}>
          {icons[s.label]}
        </MagneticIcon>
      ))}
    </div>
  );
}
