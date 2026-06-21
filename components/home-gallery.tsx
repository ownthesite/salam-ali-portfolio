'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data'

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
}

function Tile({
  slug,
  index,
  className,
  sizes,
  priority,
  showLabelOverlay,
}: {
  slug: string
  index: number
  className?: string
  sizes: string
  priority?: boolean
  showLabelOverlay?: boolean
}) {
  const project = projects.find((p) => p.slug === slug)
  if (!project) return null

  return (
    <motion.div
      {...reveal}
      transition={{
        duration: 1,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      <Link href={`/works/${project.slug}`} className="group block h-full">
        <div className="relative h-full w-full overflow-hidden bg-secondary">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          {showLabelOverlay && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-2xl font-light uppercase tracking-[0.35em] text-white/90 drop-shadow-sm md:text-3xl">
                {project.title}
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="font-heading text-sm font-medium uppercase tracking-[0.16em] text-white">
              {project.title}
            </span>
            <span className="font-heading text-xs uppercase tracking-[0.14em] text-white/80">
              {project.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function HomeGallery() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      {/* Above the fold: large feature + two stacked blocks */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Tile
            slug="hermes"
            index={0}
            priority
            showLabelOverlay
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="aspect-[16/10] lg:aspect-[16/11]"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:col-span-4">
          <Tile
            slug="movement"
            index={1}
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="aspect-[4/3] lg:aspect-auto"
          />
          <Tile
            slug="silence"
            index={2}
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="aspect-[4/3] lg:aspect-auto"
          />
        </div>
      </div>

      {/* Second row: two equal blocks */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Tile
          slug="protocol"
          index={3}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="aspect-[4/3]"
        />
        <Tile
          slug="collective"
          index={4}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="aspect-[4/3]"
        />
      </div>

      {/* Third row: asymmetric — tall portrait + wide landscape */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Tile
          slug="atelier"
          index={5}
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="aspect-[3/4] lg:col-span-4"
        />
        <Tile
          slug="aura"
          index={6}
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="aspect-[16/10] lg:col-span-8 lg:aspect-auto"
        />
      </div>
    </div>
  )
}
