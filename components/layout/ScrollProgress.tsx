"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Garis tipis di atas layar yang memanjang sesuai posisi scroll
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll(); // nilai 0 sampai 1
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-ink"
    />
  );
}
