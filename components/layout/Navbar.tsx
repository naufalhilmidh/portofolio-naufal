"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname(); // alamat halaman yang sedang dibuka
  const [open, setOpen] = useState(false); // status menu di HP

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-ink">
          Naufal Hilmi
        </Link>

        {/* Menu untuk desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href) ? "text-ink" : "text-subtle hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol menu untuk HP */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Buka atau tutup menu"
          className="text-sm text-ink md:hidden"
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </nav>

      {/* Menu dropdown untuk HP */}
      {open && (
        <ul className="flex flex-col gap-4 border-t border-line/60 px-6 py-5 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={isActive(link.href) ? "text-ink" : "text-subtle"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
