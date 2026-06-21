import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getProject, getRelated, projects } from '@/lib/data'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ProjectTile } from '@/components/project-tile'
import { FadeIn } from '@/components/fade-in'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Work — Salman Ali Mohammed' }
  return {
    title: `${project.title} — Salman Ali Mohammed`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const related = getRelated(project.slug, project.category)

  return (
    <>
      <SiteNav />
      <main className="pt-28 md:pt-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Link
            href="/works"
            className="nav-link inline-flex items-center gap-2 font-heading text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} /> All Works
          </Link>
        </div>

        <FadeIn
          y={16}
          className="mx-auto mt-8 max-w-[1600px] px-6 md:px-10"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary rounded-2xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            {project.id ? (() => {
              // 🟢 Automatically extracts just the digits (e.g. 164562375) 
              // even if the database has a full link or extra query symbols.
              const cleanNumericId = String(project.id).match(/\d+/)?.at(0) || "";

              return (
                <iframe
                  title={project.title || "vimeo-player"}
                  src={`https://player.vimeo.com/video/${project.id}?controls=1&badge=0&autopause=0 &player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&mute=1`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0 object-cover"
                />
              );
            })() : (
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        </FadeIn>


        <div className="mx-auto mt-12 max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {project.category}
              </p>
              <h1 className="mt-4 font-heading text-5xl font-light uppercase leading-[1] tracking-[0.02em] text-foreground md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-5 lg:pl-8">
              <dl className="flex flex-col gap-5">
                <div className="flex justify-between border-b border-border pb-4">
                  <dt className="font-heading text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Client
                  </dt>
                  <dd className="font-heading text-sm uppercase tracking-[0.08em] text-foreground">
                    {project.client}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-border pb-4">
                  <dt className="font-heading text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Year
                  </dt>
                  <dd className="font-heading text-sm uppercase tracking-[0.08em] text-foreground">
                    {project.year}
                  </dd>
                </div>
                {project.credits.map((credit) => (
                  <div
                    key={credit.role + credit.name}
                    className="flex justify-between border-b border-border pb-4"
                  >
                    <dt className="font-heading text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {credit.role}
                    </dt>
                    <dd className="font-heading text-sm uppercase tracking-[0.08em] text-foreground">
                      {credit.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mx-auto mt-28 max-w-[1600px] px-6 md:px-10">
            <h2 className="mb-12 font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Related Works
            </h2>
            <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-3">
              {related.map((p, i) => (
                <ProjectTile key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
