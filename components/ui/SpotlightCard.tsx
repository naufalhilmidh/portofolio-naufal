"use client";

import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

// Kartu dengan cahaya lembut yang mengikuti kursor
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 }); // posisi kursor di dalam kartu
  const [hover, setHover] = useState(false);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    setPos({ x: e.clientX - box.left, y: e.clientY - box.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
    >
      {/* Lapisan cahaya */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(155,168,171,0.16), transparent 60%)`,
        }}
      />
      {/* Isi kartu */}
      <div className="relative">{children}</div>
    </div>
  );
}
