'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/works', label: 'Works' },
  // { href: '/photography', label: 'Photography' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10">
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
                className="nav-link font-heading text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col bg-background px-6 pt-8 md:hidden">
          <ul className="flex flex-col gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-active={isActive(link.href)}
                  className="font-heading text-3xl font-medium uppercase tracking-[0.12em] text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
