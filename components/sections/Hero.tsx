"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { EASE } from "@/lib/motion";
import type { Profile } from "@/lib/types";

// Urutan animasi: induk mengatur jeda antar anak
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
};

const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Kata naik dari balik "topeng" (overflow-hidden)
const word: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

type HeroProps = {
  profile: Profile;
  photo: ReactNode;
};

export default function Hero({ profile, photo }: HeroProps) {
  const words = profile.name.split(" ");

  // Posisi kursor untuk cahaya latar
  const mouseX = useMotionValue(700);
  const mouseY = useMotionValue(300);

  function handleMove(e: MouseEvent<HTMLElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - box.left);
    mouseY.set(e.clientY - box.top);
  }

  const glow = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(155,168,171,0.14), transparent 70%)`;

  return (
    <section onMouseMove={handleMove} className="relative overflow-hidden px-6 pb-24 pt-36">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={headline}
            className="text-6xl font-semibold leading-[0.95] tracking-tighter text-ink md:text-8xl"
          >
            {words.map((w) => (
              <span key={w} className="block overflow-hidden pb-2">
                <motion.span variants={word} className="block">
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-relaxed text-subtle">
            Mahasiswa {profile.major} di {profile.campus}. Saya membangun model prediktif,
            pipeline data, dan dashboard yang mudah dipahami.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">Lihat project</Button>
            <Button href="/contact" variant="secondary">
              Hubungi saya
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-surface"
        >
          {photo}
        </motion.div>
      </div>
    </section>
  );
}
