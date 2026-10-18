"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  navLinks: NavLink[];
};

export default function MobileNavbar({ navLinks }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setOpenDropdown(null);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      aria-label="Navigazione principale"
      className={`mobile-navbar-shell flex h-16 items-center px-6 md:hidden ${isOpen ? "bg-navbar" : "bg-background"}`}
    >
      <button
        ref={menuButtonRef}
        type="button"
        className="ml-auto flex min-h-11 min-w-11 items-center justify-center"
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-primary-navigation"
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

      <ul
        id="mobile-primary-navigation"
        className={`fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-navbar px-4 py-5 mobile-navbar ${isOpen ? "block" : "hidden"}`}
      >
        {navLinks.map((navLink) => {
          const isDropdownOpen = openDropdown === navLink.slug;

          return (
            <li key={navLink.slug} className="">
              {navLink.children ? (
                <>
                  <button
                    type="button"
                    className={`flex min-h-14 w-full items-center gap-2 px-5 py-4 text-left text-3xl ${
                      navLink.isActive
                        ? "gd-acid-green-bg underline underline-offset-4"
                        : "bg-transparent"
                    }`}
                    aria-expanded={isDropdownOpen}
                    aria-controls={`${navLink.slug}-mobile-submenu`}
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
                      className={`h-6 w-6 transition-transform duration-200 gd-pink-bg ${
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

                  <ul
                    id={`${navLink.slug}-mobile-submenu`}
                    className={`ml-10 mb-4 max-w-fit flex-col gap-4 gd-pink-bg p-2 ${isDropdownOpen ? "flex" : "hidden"}`}
                  >
                    {navLink.children.map((child) => (
                      <li
                        key={child.slug}
                        className="flex items-start gap-2 text-2xl"
                      >
                        <span aria-hidden="true">✸</span>
                        <Link
                          href={`/${navLink.slug}/${child.slug}`}
                          className={
                            child.isActive ? "underline underline-offset-4" : ""
                          }
                          aria-current={child.isActive ? "page" : undefined}
                          onClick={closeMenu}
                        >
                          {child.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={`/${navLink.slug}`}
                  className={`block min-h-14 px-5 py-4 text-3xl ${
                    navLink.isActive
                      ? "gd-acid-green-bg underline underline-offset-4"
                      : "bg-transparent"
                  }`}
                  aria-current={navLink.isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {navLink.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
