"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Membuat scroll terasa halus. Komponen ini tidak menampilkan apa pun.
export default function SmoothScroll() {
  useEffect(() => {
    // Lewati jika pengguna mematikan animasi di perangkatnya
    const kurangiGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (kurangiGerak) return;

    const lenis = new Lenis();
    let frameId = 0;

    function jalankan(waktu: number) {
      lenis.raf(waktu);
      frameId = requestAnimationFrame(jalankan);
    }
    frameId = requestAnimationFrame(jalankan);

    // Bersihkan saat komponen dilepas
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
