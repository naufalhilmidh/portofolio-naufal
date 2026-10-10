"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import { EASE } from "@/lib/motion";
import type { Project } from "@/lib/types";

const categories = ["Semua", "Data Scientist", "Data Engineer", "Data Analyst"];

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? projects
      : projects.filter((project) => project.categories.includes(active));

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`relative rounded-full border px-5 py-2 text-sm transition-colors ${
              active === category
                ? "border-ink text-bg"
                : "border-line text-subtle hover:text-ink"
            }`}
          >
            {/* Latar putih yang "meluncur" ke tombol aktif */}
            {active === category && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative">{category}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 font-mono text-xs text-subtle">
        Menampilkan {filtered.length} dari {projects.length} project
      </p>
    </div>
  );
}
