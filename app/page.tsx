import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { HomeGallery } from '@/components/home-gallery'
import { FadeIn } from '@/components/fade-in'

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main className="pt-28 md:pt-32">
        <HomeGallery />

        <FadeIn className="mx-auto mt-28 max-w-[1600px] px-6 md:px-10">
          <div className="flex flex-col gap-8 border-t border-border pt-12 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-heading text-4xl font-light uppercase leading-[1.05] tracking-[0.02em] text-foreground md:text-6xl">
              Cinematic storytelling for brands &amp; creators
            </h2>
            <Link
              href="/works"
              className="nav-link shrink-0 font-heading text-sm font-medium uppercase tracking-[0.18em] text-foreground"
            >
              View all works
            </Link>
          </div>
        </FadeIn>
      </main>
      <SiteFooter />
    </>
  )
}
