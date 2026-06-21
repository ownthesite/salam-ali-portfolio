import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { WorksGrid } from '@/components/works-grid'
import { FadeIn } from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'Works — Salman Ali Mohammed',
  description:
    'Selected film and commercial work by Salman Ali Mohammed — commercial advertisements, brand campaigns, social content, reels and corporate films.',
}

export default function WorksPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-32 md:pt-40">
        <FadeIn className="mx-auto mb-16 max-w-[1600px] px-6 md:px-10">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Selected Works
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-light uppercase leading-[1] tracking-[0.02em] text-foreground md:text-7xl">
            Film &amp; Commercial Archive
          </h1>
        </FadeIn>
        <WorksGrid />
      </main>
      <SiteFooter />
    </>
  )
}
