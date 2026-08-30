"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { slug: "risorse", text: "Risorse" },
  { slug: "blog", text: "Blog" },
  { slug: "ricerca", text: "Ricerca" },
  { slug: "archivio", text: "Archivio" },
  { slug: "contatti", text: "Contatti" },
];

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const isHome = path === "/";

  return (
    <header>
      <nav className="fixed w-full z-20 top-0 inset-s-0 border-b-2 border-default">
        <div className="max-w-7xl flex flex-wrap items-center p-4 mx-auto justify-between">
          {isHome ? (
            <p></p>
          ) : (
            <Link
              href={"/"}
              className="self-center text-xl font-bold text-heading whitespace-nowrap"
            >
              Grassi diritti
            </Link>
          )}

          {/* desktop */}

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row border border-default gap-4 md:border-0">
              {navLinks.map((navlink) => (
                <li key={navlink.slug}>
                  <Link className="text-xl" href={`/${navlink.slug}`}>
                    {navlink.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* mobile */}

          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </nav>
    </header>
  );
}
