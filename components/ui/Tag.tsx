import type { ReactNode } from "react";

// Label kecil untuk nama tools atau skill
export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-xs text-subtle">
      {children}
    </span>
  );
}
