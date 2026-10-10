"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Jika perangkat pengunjung meminta animasi dikurangi,
// semua gerakan (selain pudar) otomatis dimatikan
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
