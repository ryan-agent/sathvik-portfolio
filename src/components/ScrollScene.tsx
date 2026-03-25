'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, Variants, useInView } from 'framer-motion'

const sceneVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: 'easeOut'
    }
  })
}

export interface ScrollSceneProps {
  children: ReactNode
  id?: string
  className?: string
  onEnter?: () => void
  threshold?: number
  delay?: number
  forceRender?: boolean
}

export function ScrollScene({
  children,
  id,
  className,
  onEnter,
  threshold = 0.35,
  delay = 0,
  forceRender = false
}: ScrollSceneProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  const [hasRendered, setHasRendered] = useState(forceRender)

  useEffect(() => {
    if (inView) {
      setHasRendered(true)
      onEnter?.()
    }
  }, [inView, onEnter])

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={hasRendered ? 'visible' : 'hidden'}
      variants={sceneVariants}
      custom={delay}
    >
      {hasRendered ? children : <div className="min-h-[220px]" aria-hidden />}
    </motion.section>
  )
}
