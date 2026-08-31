"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    slug: "risorse",
    text: "Risorse",
  },
  { slug: "blog", text: "Blog" },
  { slug: "ricerca", text: "Ricerca" },
  { slug: "archivio", text: "Archivio" },
  { slug: "contatti", text: "Contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-black">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-auto md:py-4">
        {!isHome && (
          <Link
            href="/"
            className="text-xl font-bold text-heading whitespace-nowrap"
          >
            miao
          </Link>
        )}

        {/* Mobile button */}
        <button
          type="button"
          className="ml-auto min-h-11 px-2 md:hidden"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="ml-auto hidden items-center gap-4 font-medium md:flex">
          {navLinks.map((navLink) => (
            <li key={navLink.slug}>
              <Link className="text-xl font-bold" href={`/${navLink.slug}`}>
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="fixed inset-x-0 bottom-0 top-14 overflow-y-auto bg-inherit px-4 py-5 md:hidden">
            {navLinks.map((navLink) => (
              <li
                key={navLink.slug}
                className="border-b-2 border-black px-5 py-4 text-2xl"
              >
                <Link
                  href={`/${navLink.slug}`}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  {navLink.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
