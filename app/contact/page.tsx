import type { Metadata } from "next";
import { getProfile } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const profile = getProfile();

  const items = [
    { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { label: "Telepon", value: profile.contact.phone, href: `tel:${profile.contact.phone}` },
    { label: "LinkedIn", value: profile.contact.linkedin, href: profile.contact.linkedin },
    { label: "Instagram", value: profile.contact.instagram, href: profile.contact.instagram },
    { label: "GitHub", value: profile.contact.github, href: profile.contact.github },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-36">
      <h1 className="text-5xl font-semibold tracking-tighter text-ink md:text-7xl">Contact</h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-subtle">
        Hubungi saya untuk diskusi project, peluang kerja, atau kolaborasi.
      </p>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-6 py-5 transition-colors hover:text-white"
              >
                <span className="text-subtle">{item.label}</span>
                <span className="truncate text-ink">{item.value}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Form kontak ditambahkan di Fase 4 */}
        <div />
      </div>
    </div>
  );
}
