import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { getProfile, getSkills, getProjects } from "@/lib/data";

export const metadata: Metadata = { title: "CV" };

export default function CvPage() {
  const profile = getProfile();
  const skills = getSkills();
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-4xl px-6 pb-28 pt-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-5xl font-semibold tracking-tighter text-ink md:text-7xl">CV</h1>
          <p className="mt-6 text-lg text-subtle">{profile.name}</p>
        </div>
        <Button href="/CV-Naufal-Hilmi-Dharmawan.pdf" download>
          Unduh CV (PDF)
        </Button>
      </div>

      <section className="mt-20 border-t border-line pt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Pendidikan</h2>
        <p className="mt-5 text-lg text-ink">{profile.campus}</p>
        <p className="mt-1 text-subtle">{profile.major}</p>
        <p className="mt-1 font-mono text-sm text-subtle">TODO: isi periode kuliah</p>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Skill dan tools</h2>
        <div className="mt-6 space-y-8">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-3 text-subtle">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Project</h2>
        <ul className="mt-6 space-y-4">
          {projects.map((project) => (
            <li key={project.slug} className="text-ink">
              {project.title}
              <span className="ml-3 text-sm text-subtle">{project.categories.join(", ")}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
