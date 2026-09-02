"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type NavChild = {
  slug: string;
  text: string;
};

type NavLink = {
  slug: string;
  text: string;
  children?: NavChild[];
  isActive: boolean;
};

type DesktopNavbarProps = {
  isHome: boolean;
  navLinks: NavLink[];
};

export default function DesktopNavbar({
  isHome,
  navLinks,
}: DesktopNavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLLIElement>(null);

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
    <div className="hidden md:block py-4">
      {/* Main navbar */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 py-4">
        {!isHome && (
          <Link href="/" className="whitespace-nowrap font-bold text-heading">
            <div className="flex flex-row justify-center items-center gap-2">
              <Image
                src={"/logo-grassi-diritti.png"}
                alt="logo grassi diritti"
                width={80}
                height={80}
              />
            </div>
          </Link>
        )}

        <ul className="ml-auto flex h-full items-center gap-2 font-medium">
          {navLinks.map((navLink) => {
            const isDropdownOpen = openDropdown === navLink.slug;

            return (
              <li
                key={navLink.slug}
                className="relative flex h-full items-center"
                ref={navLink.children ? dropdownRef : undefined}
              >
                {navLink.children ? (
                  <>
                    <button
                      type="button"
                      className={`flex items-center text-xl pl-2 py-2 hover:bg-[#ff82cf] ${
                        isDropdownOpen || navLink.isActive
                          ? "color-inverse"
                          : "bg-transparent"
                      } 
                    
                      `}
                      aria-expanded={isDropdownOpen}
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === navLink.slug ? null : navLink.slug,
                        )
                      }
                    >
                      {navLink.text}

                      <span
                        className={`flex h-6 w-6 items-center justify-center transition-colors  
                          ${isDropdownOpen ? "color-inverse" : "bg-transparent"}
                          
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

                    {isDropdownOpen && (
                      <div
                        className="absolute left-3/3 top-14 z-20 flex flex-col gap-2 items-start h-fit p-3 min-w-70 -translate-x-1/2 text-center color-inverse shadow-lg "
                        style={{
                          gridTemplateColumns: `repeat(${navLink.children.length}, minmax(0, 1fr))`,
                        }}
                      >
                        {navLink.children.map((child) => (
                          <Link
                            key={child.slug}
                            href={`/${navLink.slug}/${child.slug}`}
                            className="text-lg  hover:underline"
                            onClick={() => setOpenDropdown(null)}
                          >
                            * {child.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={`/${navLink.slug}`}
                    className={`text-xl p-2 hover:bg-[#ff82cf] ${
                      navLink.isActive ? "color-inverse " : "bg-transparent"
                    }`}
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
