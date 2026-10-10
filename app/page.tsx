import Hero from "@/components/sections/Hero";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getProfile, getInterests, getFeaturedProjects, getSkills } from "@/lib/data";
import Marquee from "@/components/sections/Marquee";

export default function HomePage() {
  const profile = getProfile();
  const interests = getInterests();
  const featured = getFeaturedProjects();
  const allSkills = Object.values(getSkills()).flat();

  return (
    <>
      <Hero
        profile={profile}
        photo={<ProfilePhoto src={profile.photo} name={profile.name} />}
      />

      <Marquee items={allSkills} />

      <section className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <h2 className="mb-12 text-4xl font-semibold tracking-tighter text-ink md:text-5xl">
            Bidang minat
          </h2>
        </Reveal>
        <ExpertiseGrid interests={interests} />
      </section>

      <FeaturedProjects projects={featured} />

      <section className="mx-auto max-w-6xl px-6 pb-32 pt-12">
        <Reveal>
          <div className="rounded-3xl border border-line bg-surface p-10 md:p-16">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tighter text-ink md:text-5xl">
              Punya data yang perlu dianalisis?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-subtle">
              Kirim pesan dan ceritakan kebutuhan Anda. Saya akan membalas lewat email.
            </p>
            <div className="mt-10">
              <Button href="/contact">Kirim pesan</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
