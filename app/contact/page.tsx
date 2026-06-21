import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { FadeIn } from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'Contact — Salman Ali Mohammed',
  description:
    'Get in touch with Salman Ali Mohammed for cinematography, direction, fashion photography and brand campaigns. Based in the UAE and India.',
}

const details = [
  { label: 'Email', value: 'salmanalimohammed608@gmail.com', href: 'mailto:salmanalimohammed608@gmail.com' },
  { label: 'Phone — UAE', value: '+971 54 768 9717', href: 'tel:+971547689717' },
  { label: 'Phone — India', value: '+91 9946 176 466', href: 'tel:+919946176466' },
  { label: 'Location', value: 'United Arab Emirates / India' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'WhatsApp', href: 'https://wa.me/971547689717' },
]

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="flex min-h-screen flex-col pt-32 md:pt-40">
        <div className="mx-auto w-full max-w-[1600px] flex-1 px-6 md:px-10">
          <FadeIn>
            <p className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl font-light uppercase leading-[1] tracking-[0.02em] text-foreground md:text-8xl">
              Let&apos;s work together
            </h1>
          </FadeIn>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <FadeIn delay={0.1} className="lg:col-span-7">
              <dl className="flex flex-col">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col gap-1 border-t border-border py-6 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <dt className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground sm:w-40">
                      {d.label}
                    </dt>
                    <dd className="flex-1 sm:text-right">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="nav-link font-heading text-xl font-medium uppercase tracking-[0.04em] text-foreground md:text-2xl"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <span className="font-heading text-xl font-medium uppercase tracking-[0.04em] text-foreground md:text-2xl">
                          {d.value}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-5 lg:pl-8">
              <h2 className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Social
              </h2>
              <ul className="mt-8 flex flex-col gap-5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link font-heading text-2xl font-light uppercase tracking-[0.06em] text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
        <SiteFooter />
      </main>
    </>
  )
}
