import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean; // true = buka di tab baru (untuk link luar)
  download?: boolean; // true = unduh file
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5";
  const style =
    variant === "primary"
      ? "bg-ink text-bg hover:bg-white"
      : "border border-line text-ink hover:bg-surface2";
  const className = `${base} ${style}`;

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
