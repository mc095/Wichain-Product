"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import ThemeSwitcher from "@/components/theme-switcher";

export default function NavBar() {
  return (
    <Navbar isBlurred maxWidth="xl">
      {/* Centered brand for small screens */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-lg text-inherit"
          >
            WiChain
          </a>
        </NavbarBrand>
      </NavbarContent>

      {/* Brand for larger screens */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <a
            href="/"
            className="font-light tracking-tighter text-2xl flex gap-3 justify-center items-center"
          >
            WiChain
          </a>
        </NavbarBrand>
      </NavbarContent>

      {/* Right-side items */}
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <a
            href="https://github.com/mc095/wichain"
            target="_blank"
            rel="noreferrer"
            className="text-default-foreground hover:text-primary transition-colors"
            aria-label="GitHub Repository"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.371 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.192.694.801.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
            </svg>
          </a>
        </NavbarItem>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
