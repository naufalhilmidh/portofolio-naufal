import Link from "next/link";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/lib/types";

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="text-4xl font-semibold tracking-tighter text-ink md:text-5xl">
          Project pilihan
        </h2>
        <Link href="/projects" className="text-sm text-subtle transition-colors hover:text-ink">
          Lihat semua project
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.1} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
