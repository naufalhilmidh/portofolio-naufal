import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { getProjects, getProjectBySlug } from "@/lib/data";

type PageProps = { params: Promise<{ slug: string }> };

// Memberi tahu Next.js alamat mana saja yang harus dibuat saat build
export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? project.title : "Project tidak ditemukan" };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Jika slug tidak ada di data, tampilkan halaman 404
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 pb-28 pt-36">
      <Link href="/projects" className="text-sm text-subtle transition-colors hover:text-ink">
        Kembali ke semua project
      </Link>

      <p className="mt-10 text-sm text-subtle">{project.categories.join(", ")}</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tighter text-ink md:text-6xl">
        {project.title}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-subtle">{project.description}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>

      <div className="mt-10">
        <Button href={project.github} external>
          Lihat kode di GitHub
        </Button>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">Hasil project</h2>
        <ProjectGallery images={project.results} title={project.title} />
      </section>
    </div>
  );
}
