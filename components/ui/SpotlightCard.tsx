import type { ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

// Versi sementara: kartu biasa
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${className}`}>
      {children}
    </div>
  );
}