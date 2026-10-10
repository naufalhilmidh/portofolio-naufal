import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import type { Profile } from "@/lib/types";

type HeroProps = {
  profile: Profile;
  photo: ReactNode; // foto diterima dari luar (slot)
};

export default function Hero({ profile, photo }: HeroProps) {
  const words = profile.name.split(" "); // ["Naufal", "Hilmi", "Dharmawan"]

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36">
      <div aria-hidden className="bg-grid absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 className="text-6xl font-semibold leading-[0.95] tracking-tighter text-ink md:text-8xl">
            {words.map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-subtle">
            Mahasiswa {profile.major} di {profile.campus}. Saya membangun model prediktif,
            pipeline data, dan dashboard yang mudah dipahami.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">Lihat project</Button>
            <Button href="/contact" variant="secondary">
              Hubungi saya
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-surface">
          {photo}
        </div>
      </div>
    </section>
  );
}
