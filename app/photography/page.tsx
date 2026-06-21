import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { FadeIn } from '@/components/fade-in'
import { PhotographyGrid } from '@/components/photography-grid'

export const metadata: Metadata = {
  title: 'Photography — Salman Ali Mohammed',
  description:
    'Fashion, portrait, editorial and creative photography archive by Salman Ali Mohammed.',
}

export default function PhotographyPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-32 md:pt-40">
        <FadeIn className="mx-auto mb-16 max-w-[1600px] px-6 md:px-10">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Photography
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-light uppercase leading-[1] tracking-[0.02em] text-foreground md:text-7xl">
            Stills Archive
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Fashion, portrait, editorial and creative work — viewed large, with
            room to breathe.
          </p>
        </FadeIn>
        <PhotographyGrid />
      </main>
      <SiteFooter />
    </>
  )
}
