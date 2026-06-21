"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/works", label: "Works" },
  // { href: '/photography', label: 'Photography' },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu automatically when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-[70] bg-white">
      <nav className="relative z-50 mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10">
        <Link
          href="/"
          className="font-heading text-lg font-medium uppercase tracking-[0.22em] text-foreground md:text-xl"
        >
          Salman Ali Mohammed
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-active={isActive(link.href)}
                className="nav-link font-heading text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground data-[active=true]:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-[40] bg-black/10 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[50] w-[85vw] max-w-sm bg-white pt-28 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-7 px-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="inline-block w-full rounded-md  px-4 py-3 font-heading text-3xl font-medium uppercase tracking-[0.12em] text-foreground backdrop-blur-sm transition-colors active:bg-foreground/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
