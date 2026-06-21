'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { photographs } from '@/lib/data'

export function PhotographyGrid() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <div className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2">
        {photographs.map((photo, i) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.9,
              delay: (i % 2) * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group block w-full text-left ${
              photo.orientation === 'landscape' ? 'md:col-span-2' : ''
            }`}
          >
            <div
              className={`relative w-full overflow-hidden bg-secondary ${
                photo.orientation === 'landscape'
                  ? 'aspect-[16/9]'
                  : 'aspect-[3/4]'
              }`}
            >
              <Image
                src={photo.src || '/placeholder.svg'}
                alt={photo.alt}
                fill
                sizes={
                  photo.orientation === 'landscape'
                    ? '100vw'
                    : '(max-width: 768px) 100vw, 50vw'
                }
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            </div>
            <p className="mt-4 font-heading text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {photo.group}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-6 top-6 text-foreground"
              onClick={() => setActive(null)}
            >
              <X size={26} />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photographs[active].src || '/placeholder.svg'}
                alt={photographs[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
