import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1600px] px-6 pb-12 pt-28 md:px-10">
      <div className="flex flex-col gap-12 border-t border-border pt-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="font-heading text-3xl font-light uppercase tracking-[0.04em] text-foreground md:text-4xl">
            Let&apos;s create something
            <br />
            cinematic.
          </p>
          <Link
            href="/contact"
            className="nav-link mt-6 inline-block font-heading text-sm font-medium uppercase tracking-[0.18em] text-foreground"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex flex-col gap-6 text-sm text-muted-foreground md:items-end">
          <div className="flex gap-6 font-heading uppercase tracking-[0.16em] text-foreground">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              YouTube
            </a>
            <a
              href="https://wa.me/971547689717"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              WhatsApp
            </a>
          </div>
          <p className="md:text-right">
            United Arab Emirates
            <br />
            <span className="text-foreground/70">
              salmanalimohammed608@gmail.com
            </span>
          </p>
        </div>
      </div>

      <p className="mt-16 font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} Salman Ali Mohammed — All rights reserved
      </p>
    </footer>
  )
}
