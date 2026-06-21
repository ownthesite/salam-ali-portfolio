'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, projects, type Category } from '@/lib/data'
import { ProjectTile } from '@/components/project-tile'

type Filter = 'All' | Category

export function WorksGrid() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

  const filters: Filter[] = ['All', ...categories]

  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <div className="mb-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-border pb-8">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            data-active={filter === f}
            className="nav-link font-heading text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors data-[active=true]:text-foreground hover:text-foreground"
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectTile project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
