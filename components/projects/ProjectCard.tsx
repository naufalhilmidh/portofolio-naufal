import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.results[0]; // gambar pertama jadi sampul

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <SpotlightCard className="h-full transition-transform duration-500 group-hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface2">
          {cover ? (
            <Image
              src={cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-subtle">
              Gambar belum ditambahkan
            </div>
          )}
        </div>

        <div className="p-6">
          <p className="mb-3 text-sm text-subtle">{project.categories.join(", ")}</p>
          <h3 className="text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-subtle">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
