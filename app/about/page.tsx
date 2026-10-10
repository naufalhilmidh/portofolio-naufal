import type { Metadata } from "next";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { getProfile, getInterests, getSkills } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const profile = getProfile();
  const interests = getInterests();
  const skills = getSkills();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-36">
      <Reveal>
        <h1 className="text-5xl font-semibold tracking-tighter text-ink md:text-7xl">
          Tentang saya
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-subtle">
          Saya {profile.name}, mahasiswa {profile.major} di {profile.campus}. Saya tertarik pada
          tiga bidang data: data scientist, data engineer, dan data analyst.
        </p>
      </Reveal>

      <section className="mt-24">
        <h2 className="mb-10 text-3xl font-semibold tracking-tighter text-ink md:text-4xl">
          Bidang minat
        </h2>
        <ExpertiseGrid interests={interests} />
      </section>

      <section className="mt-24">
        <h2 className="mb-10 text-3xl font-semibold tracking-tighter text-ink md:text-4xl">
          Skill dan tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items], index) => (
            <Reveal key={group} delay={index * 0.1} className="h-full">
              <SpotlightCard className="h-full p-8">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
