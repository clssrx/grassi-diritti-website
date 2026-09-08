"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavChild = {
  slug: string;
  text: string;
  isActive?: boolean;
};

type NavLink = {
  slug: string;
  text: string;
  children?: NavChild[];
  isActive: boolean;
};

type MobileNavbarProps = {
  isHome: boolean;
  navLinks: NavLink[];
};

export default function MobileNavbar({ isHome, navLinks }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="flex h-16 items-center px-6 md:hidden">
      {!isHome && !isOpen && (
        <Link href="/" className="whitespace-nowrap " onClick={closeMenu}>
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              src={"/logo-grassi-diritti.png"}
              alt="logo grassi diritti"
              width={50}
              height={50}
            />
          </div>
        </Link>
      )}

      <button
        type="button"
        className="ml-auto flex min-h-11 min-w-11 items-center justify-center"
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen((open) => !open);

          if (isOpen) {
            setOpenDropdown(null);
          }
        }}
      >
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <ul className="fixed inset-x-0 bottom-0 top-14 overflow-y-auto bg-inherit px-4 py-5 font-semibold mobile-navbar">
          {navLinks.map((navLink) => {
            const isDropdownOpen = openDropdown === navLink.slug;

            return (
              <li key={navLink.slug} className="">
                {navLink.children ? (
                  <>
                    <button
                      type="button"
                      className={`flex min-h-14 w-full items-center gap-2 px-5 py-4 text-left text-3xl ${
                        navLink.isActive ? "gd-pink-bg" : "bg-transparent"
                      }`}
                      aria-expanded={isDropdownOpen}
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === navLink.slug ? null : navLink.slug,
                        )
                      }
                    >
                      <span>{navLink.text}</span>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className={`h-6 w-6 transition-transform duration-200 gd-acid-green-bg ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                        />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <ul className="flex flex-col ml-10 mb-4 max-w-fit gap-4 gd-acid-green-bg p-2">
                        {navLink.children.map((child) => (
                          <li
                            key={child.slug}
                            className="flex flex-row  items-start text-2xl gap-2"
                          >
                            <span>✸</span>
                            <Link
                              href={`/${navLink.slug}/${child.slug}`}
                              className={` ${child.isActive ? "underline" : "bg-transparent"}`}
                              onClick={closeMenu}
                            >
                              {child.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={`/${navLink.slug}`}
                    className={`block min-h-14 px-5 py-4 text-3xl font-semibold ${
                      navLink.isActive
                        ? "gd-pink-bg underline"
                        : "bg-transparent"
                    }`}
                    onClick={closeMenu}
                  >
                    {navLink.text}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
