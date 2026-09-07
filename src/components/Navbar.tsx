"use client";

import { usePathname } from "next/navigation";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export const navLinks = [
  {
    slug: "risorse",
    text: "Risorse",
    children: [
      {
        slug: "risorse-per-persone-grasse",
        text: "Per persone grasse",
      },
      {
        slug: "risorse-per-professionisty-della-salute",
        text: "Per professionisty della salute",
      },
      {
        slug: "english-resources",
        text: "[EN] Resources",
      },
    ],
  },
  { slug: "blog", text: "Blog" },
  { slug: "ricerca", text: "Ricerca" },
  { slug: "archivio", text: "Archivio" },
  { slug: "contatti", text: "Contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinksList = navLinks.map((navLink) => {
    if (navLink.children) {
      navLink.children = navLink.children.map((child) => {
        return {
          ...child,
          isActive: pathname.includes(child.slug),
        };
      });
    }

    return {
      ...navLink,
      isActive:
        pathname === `/${navLink.slug}` ||
        pathname.startsWith(`/${navLink.slug}/`),
    };
  });

  return (
    <header className="sticky top-0 z-50">
      <MobileNavbar isHome={isHome} navLinks={navLinksList} />
      <DesktopNavbar isHome={isHome} navLinks={navLinksList} />
    </header>
  );
}
