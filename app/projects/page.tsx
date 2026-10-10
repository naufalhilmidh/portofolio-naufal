import type { Metadata } from "next";
import ProjectList from "@/components/projects/ProjectList";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-36">
      <h1 className="text-5xl font-semibold tracking-tighter text-ink md:text-7xl">Projects</h1>
      <p className="mb-14 mt-8 max-w-2xl text-lg leading-relaxed text-subtle">
        Kumpulan project analisis data, machine learning, dan data engineering. Pilih kategori
        untuk menyaring daftar.
      </p>
      <ProjectList projects={projects} />
    </div>
  );
}
