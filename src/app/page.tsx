'use client'

import { FormEvent, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollScene } from '../components/ScrollScene'

const navLinks = [
  { label: 'Name', id: 'ai' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]

const heroStatements = ['AI-powered systems', 'Cloud-native scale', 'LLM-driven insights']

const work = [
  {
    title: 'AI-Powered Archive Search',
    metric: '35% faster search',
    highlights: ['OpenAI GPT-4', 'Vector DB', 'React + AWS'],
    color: 'from-cyan-500/60 to-blue-500/20'
  },
  {
    title: '500K-Scale Gaming Backend',
    metric: '500K concurrent users',
    highlights: ['Spring Boot microservices', 'Event-driven streaming', 'Kafka + Redis'],
    color: 'from-purple-500/60 to-indigo-500/20'
  },
  {
    title: 'Cloud Data Processing',
    metric: 'Real-time pipelines',
    highlights: ['AWS Kinesis + SQS', 'Observability', 'Async workflows'],
    color: 'from-emerald-500/60 to-lime-500/20'
  },
  {
    title: 'FinTech Transaction Core',
    metric: '50% throughput gain',
    highlights: ['OAuth2 + TLS', 'High-performance APIs', 'Enterprise readiness'],
    color: 'from-amber-500/60 to-orange-500/20'
  }
]

const impacts = [
  { label: 'Scale', detail: '500K+ concurrent users supported' },
  { label: 'Performance', detail: '50% faster APIs' },
  { label: 'Automation', detail: '25h/week reclaimed via AI workflows' },
  { label: 'Reliability', detail: '30% latency cut across services' }
]

const research = {
  title: 'Adversarial Image Transformation Defense',
  detail: 'IEEE-published methodology defending ResNet50 / DenseNet121 against FGSM / PGD',
  link: 'https://ieeexplore.ieee.org/document/10737087'
}

const formInitialState = { name: '', email: '', message: '' }

type FormStatus = 'idle' | 'sending' | 'success'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('ai')
  const [formData, setFormData] = useState(formInitialState)
  const [status, setStatus] = useState<FormStatus>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || 'ai')
          }
        })
      },
      { threshold: 0.45 }
    )

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const data = new FormData(form)
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(Array.from(data.entries()) as [string, string][])
    })
    setStatus('success')
    setFormData(formInitialState)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
      <nav className="sticky top-4 z-40 mx-auto flex w-full items-center justify-between rounded-full border border-white/15 bg-black/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 backdrop-blur">
        <span className="text-sm tracking-[0.45em] text-white">Sathvik</span>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${activeSection === link.id ? 'text-cyan-300' : 'hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <ScrollScene id="ai" className="mt-10 w-full" forceRender>
        <section className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-[#080f1d] via-[#05050c] to-[#03030b] px-8 py-12 text-center shadow-2xl">
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-40"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(14,165,233,0.15),_transparent_60%)]" />
          </motion.div>
          <div className="relative z-10 space-y-6">
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Published IEEE Researcher</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">Building AI-powered scalable systems</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
              {heroStatements.map((statement) => (
                <span key={statement} className="rounded-full border border-white/15 px-4 py-2">
                  {statement}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full border border-cyan-400/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-cyan-400 hover:text-black"
              >
                Selected Work
              </a>
              <a href="#contact" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70 hover:text-white">
                Work & Contact
              </a>
            </div>
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="projects" className="mt-16 w-full">
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Selected Work</p>
            <span className="text-xs uppercase tracking-[0.4em] text-white/40">AI-focused systems</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {work.map((item, index) => (
              <motion.div
                key={item.title}
                className={`group rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)]`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index, duration: 0.8 }}
                whileHover={{ translateY: -6 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">AI</span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-cyan-300">{item.metric}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-white/70">
                  {item.highlights.map((tag) => (
                    <span key={tag} className={`rounded-full border border-white/10 bg-gradient-to-r ${item.color} px-3 py-1 text-xs`}> 
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="experience" className="mt-16 w-full">
        <section className="grid gap-6 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Experience / Impact</p>
            <span className="text-xs uppercase tracking-[0.4em] text-white/40">Story-driven metrics</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {impacts.map((impact, idx) => (
              <motion.div
                key={impact.label}
                className="flex flex-col gap-2 rounded-3xl border border-white/5 bg-black/30 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.8 }}
              >
                <span className="text-xs uppercase tracking-[0.5em] text-white/60">{impact.label}</span>
                <p className="text-lg font-semibold text-white">{impact.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="research" className="mt-16 w-full">
        <section className="rounded-[40px] border border-white/10 bg-gradient-to-tr from-[#040d1e] via-[#050114] to-[#02030b] p-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">Research</p>
              <h3 className="text-2xl font-semibold text-white">{research.title}</h3>
              <p className="mt-3 max-w-3xl text-sm text-white/70">{research.detail}</p>
            </div>
            <a
              href={research.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              View Publication
            </a>
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="contact" className="mt-16 w-full mb-16">
        <section className="grid gap-10 rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0e172c] to-[#020617] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Contact</p>
            <h3 className="text-3xl font-semibold text-white">Drop a line for AI / Cloud work</h3>
            <p className="mt-2 text-sm text-white/60">Email: ravikumard7288@gmail.com</p>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Project or role details"
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : status === 'success' ? 'Message received' : 'Send request'}
            </button>
            {status === 'success' && (
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">Thanks! I’ll reply soon.</p>
            )}
          </form>
        </section>
      </ScrollScene>
    </div>
  )
}
