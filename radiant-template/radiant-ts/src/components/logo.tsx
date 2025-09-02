'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }: { className?: string }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut' as const,
  }

  return (
    <motion.div
      variants={{ idle: {}, active: {} }}
      initial="idle"
      whileHover="active"
      className={clsx(className, 'overflow-visible font-display font-bold text-2xl text-gray-950')}
    >
      <motion.span
        variants={{
          idle: { scale: 1, opacity: 1 },
          active: {
            scale: [1, 1.15, 1],
            opacity: [1, 0.75, 1],
            transition: {
              ...transition,
              delay: 0,
            },
          },
        }}
      >
        Brian Fidler
      </motion.span>
    </motion.div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <div className={clsx(className, 'font-display font-bold text-xl text-gray-950')}>
      BF
    </div>
  )
}
