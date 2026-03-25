'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollScene } from '../components/ScrollScene'
import { OrbitGlow } from '../components/OrbitGlow'

const navLinks = [
  { label: 'Name', id: 'ai' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]

const heroWords = ['AI', 'Scale', 'Systems']
const sceneDelay = 0.2

const work = [
  {
    title: 'AI Archive Search',
    metric: '35% faster retrieval',
    tech: ['OpenAI GPT-4', 'Vector DB', 'React + AWS']
  },
  {
    title: '500K Gaming Core',
    metric: '500K concurrent users',
    tech: ['Spring Boot', 'Event Mesh', 'Kafka + Redis']
  },
  {
    title: 'Cloud Data Platform',
    metric: 'Real-time pipelines',
    tech: ['Kinesis + SQS', 'Async Observability']
  },
  {
    title: 'FinTech Transaction Core',
    metric: '50% throughput boost',
    tech: ['OAuth2', 'TLS hardening', 'Spring Resilience']
  }
]

const impacts = ['500K+ users', '50% faster APIs', '25h automation', '30% lower latency']

const research = {
  title: 'Adversarial Image Transformation Defense',
  tag: 'IEEE Xplore',
  link: 'https://ieeexplore.ieee.org/document/10737087'
}

const formInitial = { name: '', email: '', message: '' }

export default function HomePage() {
  const [active, setActive] = useState('ai')
  const [form, setForm] = useState(formInitial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id || 'ai')
        })
      },
      { threshold: 0.45 }
    )
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    const data = new FormData(event.currentTarget)
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(Array.from(data.entries()) as [string, string][])
    })
    setForm(formInitial)
    setStatus('success')
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
      <nav className="sticky top-4 z-40 flex w-full items-center justify-between rounded-full border border-white/10 bg-black/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 backdrop-blur">
        <span className="text-sm tracking-[0.45em] text-white">Sathvik</span>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${active === link.id ? 'text-cyan-300' : 'hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <ScrollScene id="ai" className="w-full" forceRender>
        <section className="relative overflow-hidden rounded-[60px] border border-white/10 bg-gradient-to-br from-[#050a1f] via-[#03030a] to-[#000000] px-8 py-12 shadow-[0_30px_120px_rgba(2,6,23,0.9)]">
          <OrbitGlow />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Published IEEE contributor</p>
            <h1 className="mt-5 text-4xl font-semibold uppercase tracking-tight text-white sm:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text">
                AI-scale
              </span>{' '}
              Systems
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
              {heroWords.map((word, idx) => (
                <motion.span key={word} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }}>
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href="#projects"
                className="rounded-full border border-cyan-400/60 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-cyan-300"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="projects" className="w-full">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-[0.5em] text-white/50">Selected Work</div>
            <div className="h-0.5 w-32 rounded-full bg-gradient-to-r from-cyan-300 to-blue-600" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {work.map((item, idx) => (
              <motion.div
                key={item.title}
                className="group relative rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * sceneDelay, duration: 0.9 }}
              >
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-30" />
                <div className="text-xs uppercase tracking-[0.4em] text-white/60">Live</div>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-5 text-4xl font-bold text-cyan-300">{item.metric}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.4em] text-white/70">
                  {item.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="experience" className="w-full">
        <section className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-[0.5em] text-white/50">Impact</div>
            <div className="text-xs uppercase tracking-[0.4em] text-white/40">Minimal metrics</div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {impacts.map((item, idx) => (
              <motion.div
                key={item}
                className="rounded-3xl border border-white/5 bg-black/30 p-5 text-lg font-semibold uppercase tracking-[0.4em] text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="research" className="w-full">
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#080b1d] via-[#04030a] to-[#02020b] p-8 shadow-xl">
          <OrbitGlow />
          <div className="relative z-10 flex flex-col gap-4">
            <div className="text-xs uppercase tracking-[0.6em] text-white/60">Research</div>
            <h3 className="text-2xl font-semibold text-white">{research.title}</h3>
            <p className="text-sm uppercase tracking-[0.5em] text-white/50">{research.tag}</p>
            <a
              href={research.link}
              target="_blank"
              rel="noreferrer"
              className="w-max rounded-full border border-cyan-400/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200 transition hover:bg-cyan-400 hover:text-black"
            >
              View Publication
            </a>
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="contact" className="w-full mb-10">
        <section className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0c1123] to-[#03030a] p-8 shadow-[0_45px_130px_rgba(0,0,0,0.85)]">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Minimal form. Max impact.</h3>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="mt-6 grid gap-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Project or role"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Received' : 'Send request'}
            </button>
            {status === 'success' && <p className="text-center text-xs uppercase tracking-[0.4em] text-cyan-300">Thanks! I’ll reply soon.</p>}
          </form>
        </section>
      </ScrollScene>
    </div>
  )
}
