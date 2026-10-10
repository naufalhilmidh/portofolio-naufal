import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import type { Interest } from "@/lib/types";

export default function ExpertiseGrid({ interests }: { interests: Interest[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {interests.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.1} className="h-full">
          <SpotlightCard className="h-full p-8">
            {item.priority === 1 && (
              <p className="mb-4 font-mono text-xs text-subtle">Fokus utama</p>
            )}
            <h3 className="text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-subtle">{item.summary}</p>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}
