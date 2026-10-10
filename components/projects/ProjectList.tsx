"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/types";

const categories = ["Semua", "Data Scientist", "Data Engineer", "Data Analyst"];

export default function ProjectList({ projects }: { projects: Project[] }) {
  // state = ingatan komponen. Di sini: kategori yang sedang dipilih
  const [active, setActive] = useState("Semua");

  // Saring project sesuai kategori
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
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              active === category
                ? "border-ink bg-ink text-bg"
                : "border-line text-subtle hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-subtle">
        Menampilkan {filtered.length} dari {projects.length} project
      </p>
    </div>
  );
}
