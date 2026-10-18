"use client";

import { usePathname } from "next/navigation";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export const navLinks = [
  { slug: "", text: "home" },
  {
    slug: "risorse",
    text: "risorse",
    children: [
      {
        slug: "risorse-per-persone-grasse",
        text: "per persone grasse",
      },
      {
        slug: "risorse-per-professionisty-della-salute",
        text: "per professionisty della salute",
      },
      {
        slug: "english-resources",
        text: "[en] resources",
      },
    ],
  },
  { slug: "blog", text: "blog" },
  { slug: "ricerca", text: "ricerca" },
  { slug: "archivio", text: "archivio" },
  { slug: "contatti", text: "contatti" },
];

export default function Navbar() {
  const pathname = usePathname();

  const navLinksList = navLinks.map((navLink) => ({
    ...navLink,
    children: navLink.children?.map((child) => ({
      ...child,
      isActive: pathname.includes(child.slug),
    })),
    isActive: navLink.slug
      ? pathname === `/${navLink.slug}` ||
        pathname.startsWith(`/${navLink.slug}/`)
      : pathname === "/",
  }));

  return (
    <header className="sticky top-0 z-50 isolate bg-background">
      <MobileNavbar navLinks={navLinksList} />
      <DesktopNavbar navLinks={navLinksList} />
    </header>
  );
}
