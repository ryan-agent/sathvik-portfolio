'use client'
import { motion } from 'framer-motion'

export function OrbitGlow() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(79,70,229,0.25),_transparent_55%)] blur-xl" />
      <div className="absolute inset-14 rounded-full border border-white/5" />
    </motion.div>
  )
}
