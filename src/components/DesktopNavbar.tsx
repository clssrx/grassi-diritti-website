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

type DesktopNavbarProps = {
  navLinks: NavLink[];
};

export default function DesktopNavbar({ navLinks }: DesktopNavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!openDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = dropdownRef.current;

      if (!dropdown) return;

      if (!dropdown.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  return (
    <div className="hidden bg-background py-2 md:block">
      {/* Main navbar */}
      <nav
        aria-label="Navigazione principale"
        className="mx-auto flex w-full max-h-fit max-w-7xl items-center px-6 sm:px-4"
      >
        <ul className="ml-auto flex h-full items-center gap-2 font-medium">
          {navLinks.map((navLink) => {
            const isDropdownOpen = openDropdown === navLink.slug;

            return (
              <li
                key={navLink.slug}
                className="relative flex h-full items-center"
                ref={navLink.children ? dropdownRef : undefined}
                onBlur={(event) => {
                  if (
                    navLink.children &&
                    !event.currentTarget.contains(event.relatedTarget as Node)
                  ) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {navLink.children ? (
                  <>
                    <button
                      ref={triggerRef}
                      type="button"
                      className={`flex items-center text-xl pl-2 py-2 hover:bg-[#ff82cf] hover:underline cursor-pointer ${
                        isDropdownOpen || navLink.isActive
                          ? "gd-pink-bg"
                          : "bg-transparent"
                      } ${navLink.isActive ? "underline decoration-[#171717] underline-offset-4" : ""}
                    
                      `}
                      aria-expanded={isDropdownOpen}
                      aria-controls={`${navLink.slug}-desktop-submenu`}
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === navLink.slug ? null : navLink.slug,
                        )
                      }
                    >
                      {navLink.text}

                      <span
                        className={`flex h-6 w-6 items-center justify-center transition-colors  
                          ${isDropdownOpen ? "gd-pink-bg" : "bg-transparent"}
                          
                          `}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
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
                      </span>
                    </button>

                    <ul
                      id={`${navLink.slug}-desktop-submenu`}
                      className={`absolute right-0 top-full z-20 w-max flex-col gap-2 p-3 gd-pink-bg shadow-lg ${isDropdownOpen ? "flex" : "hidden"}`}
                    >
                      {navLink.children.map((child) => (
                        <li
                          key={child.slug}
                          className={`flex items-center gap-2 ${child.isActive ? "gd-pink-bg" : ""}`}
                        >
                          <span aria-hidden="true">✸</span>
                          <Link
                            href={`/${navLink.slug}/${child.slug}`}
                            className={`navbar-pink-focus text-lg hover:underline ${child.isActive ? "underline  decoration-[#171717] underline-offset-4" : ""}`}
                            aria-current={child.isActive ? "page" : undefined}
                            onClick={() => setOpenDropdown(null)}
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
                    className={`text-xl p-2 hover:bg-[#ff82cf] hover:underline ${
                      navLink.isActive
                        ? "gd-pink-bg underline decoration-[#171717] underline-offset-4"
                        : "bg-transparent"
                    }`}
                    aria-current={navLink.isActive ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {navLink.text}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
