import { getProfile } from "@/lib/data";

export default function Footer() {
  const profile = getProfile();
  const tahun = 2026;

  const links = [
    { label: "GitHub", href: profile.contact.github },
    { label: "LinkedIn", href: profile.contact.linkedin },
    { label: "Instagram", href: profile.contact.instagram },
  ];

  return (
    <footer className="border-t border-line/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-subtle">
          © {tahun} {profile.name}
        </p>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-subtle transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
