import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { FadeIn } from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'About — Salman Ali Mohammed',
  description:
    'Salman Ali Mohammed is a content creator, cinematographer and director with 5+ years of experience in cinematography, editing, direction, fashion photography and creative direction.',
}

const services = [
  'Cinematography',
  'Video Editing',
  'Creative Direction',
  'Fashion Photography',
  'Commercial Advertisements',
  'Social Media Content Creation',
  'Brand Campaigns',
  'Production Management',
]

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary">
                <Image
                  src="/about-portrait.png"
                  alt="Portrait of Salman Ali Mohammed holding a cinema camera"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-7 lg:pt-6">
              <p className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Content Creator • Cinematographer • Director
              </p>
              <h1 className="mt-4 font-heading text-5xl font-light uppercase leading-[1] tracking-[0.02em] text-foreground md:text-7xl">
                Salman Ali
                <br />
                Mohammed
              </h1>
              <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  Creative professional with 5+ years of experience in
                  Cinematography, Video Editing, Script Writing and Direction.
                  Possesses immense knowledge in Fashion Photography, Styling,
                  Production Management and Creative Direction.
                </p>
                <p>
                  Passionate about creating cinematic visual experiences that
                  connect brands and audiences through storytelling — combining
                  a filmmaker&apos;s eye with a modern visual aesthetic across
                  commercial, fashion and social work.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-24 border-t border-border pt-12">
            <h2 className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-baseline gap-4 border-b border-border pb-4"
                >
                  <span className="font-heading text-xs text-muted-foreground">
                    {String(services.indexOf(service) + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-lg font-medium uppercase tracking-[0.06em] text-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
