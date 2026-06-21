'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/data'

const aspectMap: Record<Project['span'], string> = {
  large: 'aspect-[16/10]',
  wide: 'aspect-[16/9]',
  tall: 'aspect-[3/4]',
  standard: 'aspect-[4/3]',
}

export function ProjectTile({
  project,
  priority = false,
  index = 0,
}: {
  project: Project
  priority?: boolean
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.9,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/works/${project.slug}`} className="group block">
        <div
          className={`relative w-full overflow-hidden bg-secondary ${aspectMap[project.span]}`}
        >
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-heading text-lg font-medium uppercase tracking-[0.08em] text-foreground">
            {project.title}
          </h3>
          <span className="font-heading text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {project.year}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
      </Link>
    </motion.div>
  )
}
