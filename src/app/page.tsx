'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollScene } from '../components/ScrollScene'

const strengths = [
  'Full-stack mastery with Java, Spring Boot, Node.js, React, Angular',
  'Microservices + event-driven distributed systems',
  'Cloud-native reliability on AWS, Kubernetes, Docker',
  'Real-time insights, CI/CD, and production automation',
  'Performance engineering for ultra-scale platforms',
  'AI/GenAI integrations—semantic search, vectors, RAG'
]

const achievements = [
  'Search efficiency up 35% via AI-powered semantic search',
  'Automation freed 25 hours/week for core engineering work',
  'API surfaces optimized 50% faster for enterprise clients',
  'Backends engineered for 500K concurrent users',
  'Latency trimmed 30% with serverless accelerators',
  'Data pipelines improved throughput by 27%',
  'Data retrieval speed increased 40% through smart indexing'
]

const projects = [
  {
    title: 'AI-Powered Archive Search System',
    description:
      'LLM-driven retrieval with GPT-4 embeddings, vector DBs, and a React + AWS interface for intelligent document discovery.',
    highlights: ['OpenAI GPT-4', 'Vector DB + RAG', 'React + AWS']
  },
  {
    title: 'High-Scale Gaming Backend System',
    description:
      'Spring Boot microservices coupled with event-driven Kafka flows built to sustain 500K concurrent gamers with sub-second ops.',
    highlights: ['Spring Boot + Kafka', 'Event-driven microservices', 'Performance-firstSLAs']
  },
  {
    title: 'Cloud-Based Data Processing Platform',
    description:
      'Async AWS Kinesis & SQS pipelines powering real-time ETL, observability, and reporting for distributed datasets.',
    highlights: ['AWS Kinesis + SQS', 'Async microservices', 'Live telemetry']
  },
  {
    title: 'FinTech / Banking Application',
    description:
      'Secure OAuth2/TLS transactional APIs engineered for enterprise finance with strict uptime and observability.',
    highlights: ['OAuth2 + TLS', 'Enterprise APIs', 'High-throughput transactions']
  }
]

const experience = [
  {
    company: 'ADP Technology Services, Inc',
    role: 'Senior Application Developer',
    duration: 'Nov 2024 – Present',
    bullets: [
      'Architected scalable client-management systems with Java Spring Boot + Node.js',
      'Integrated AWS Kinesis, SQS, Neptune for real-time decisioning',
      'Modernized async pipelines across Postgres, DynamoDB, Elasticsearch, Redis',
      'Deployments automated via Docker + EKS with blue-green safety'
    ]
  },
  {
    company: 'University of Houston System',
    role: 'Student Technician IV',
    duration: 'Apr 2023 – May 2024',
    bullets: [
      'Built GPT-4 + vector search archive discovery system',
      'Boosted search efficiency 35% while cutting 25h/week of manual toil',
      'Halved API latency using AWS Lambda + S3 orchestration'
    ]
  },
  {
    company: 'IVY Software (Client: Entain)',
    role: 'Software Engineer – Full Stack',
    duration: 'Dec 2021 – Dec 2022',
    bullets: [
      'Engineered gaming backend for 500K concurrent players',
      'Cut processing time 42% and boosted data efficiency 27%',
      'Built resilient microservices + OAuth2-secured flows'
    ]
  },
  {
    company: 'Capgemini (Client: Discover Financial)',
    role: 'Associate Consultant',
    duration: 'Sep 2018 – Nov 2021',
    bullets: [
      'Modernized banking apps with Spring Boot + Angular',
      'Slashed latency 30% via AWS serverless patterns',
      'Elevated data retrieval 40% and integrated Kafka'
    ]
  }
]

const research = {
  title: 'Adversarial Image Transformation Defense Study',
  link: 'https://ieeexplore.ieee.org/document/10737087',
  bullets: [
    'Defended ResNet50 / DenseNet121 against FGSM, RFGSM, PGD',
    'Transformation pipelines improved robustness across threat models',
    'Published on IEEE Xplore with a quantified methodology'
  ]
}

const skills = {
  ai: ['Generative AI', 'OpenAI API', 'RAG', 'FAISS', 'Pinecone', 'LangChain', 'LlamaIndex'],
  languages: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  frontend: ['React', 'Angular', 'HTML5', 'CSS3'],
  backend: ['Spring Boot', 'Node.js', 'REST', 'GraphQL'],
  cloud: ['AWS Lambda', 'S3', 'DynamoDB', 'Kinesis', 'SQS', 'EKS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  data: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Elasticsearch', 'Redis'],
  messaging: ['Kafka', 'SQS', 'Kinesis'],
  tools: ['Git', 'GitHub', 'Maven', 'Gradle', 'JIRA', 'Postman']
}

const navItems = [
  { id: 'ai', label: 'AI' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
]

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('ai')
  const achievementsList = useMemo(() => achievements.slice(0, 3), [])

  const handleSectionEnter = (id: string) => () => setActiveSection(id)

  return (
    <div className="relative overflow-hidden pb-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,220,255,0.2),_transparent_40%)]"
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-[600px] bg-[radial-gradient(circle,_rgba(79,70,229,0.25),_transparent_60%)] blur-[140px]"
        animate={{ x: ['-20%', '0%', '-20%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <nav className="sticky top-4 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-white/70 shadow-xl backdrop-blur">
        <span className="font-semibold tracking-[0.6em] text-white">Sathvik Poreddy</span>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition ${
                activeSection === item.id
                  ? 'text-white underline decoration-cyan-400 decoration-2 underline-offset-4'
                  : 'hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <ScrollScene
        id="ai"
        forceRender
        className="relative mx-auto mt-12 max-w-6xl rounded-[48px] border border-white/10 bg-gradient-to-br from-[#0b1224] via-[#070a13] to-[#020615] p-10 shadow-[0_50px_90px_rgba(2,6,23,0.8)]"
        delay={0}
        onEnter={handleSectionEnter('ai')}
      >
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">AI-powered platforms</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Architecting{' '}
              <span className="text-cyan-400">AI-first</span> distributed systems that drive real-time intelligence
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Senior software engineer blending AI, cloud-native microservices, and performance-first architectures for platforms serving hundreds of thousands of users.
            </p>
          </div>
          <motion.div
            className="grid gap-4 md:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {achievementsList.map((item) => (
              <motion.div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80"
                whileHover={{ translateY: -6 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ScrollScene>

      <ScrollScene
        id="about"
        className="mx-auto mt-16 max-w-5xl space-y-6"
        onEnter={handleSectionEnter('about')}
      >
        <section className="rounded-[36px] border border-white/10 bg-black/40 p-8 shadow-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">About</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Engineering scale for AI-first experiences</h2>
            </div>
            <p className="text-sm text-white/60">Sathvik · Alpharetta, GA · sathvik0197@gmail.com</p>
          </div>
          <p className="mt-4 text-white/80">
            Blending Java, Node.js, Spring Boot, and AWS, Sathvik builds distributed platforms with AI assistants, semantic search, and robust pipelines that stay responsive across spikes.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 text-sm text-white/80">
                {item}
              </div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene
        id="skills"
        className="mx-auto mt-16 max-w-6xl"
        onEnter={handleSectionEnter('skills')}
      >
        <div className="space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Skills</p>
              <h2 className="text-3xl font-semibold text-white">AI first, infrastructure everywhere</h2>
            </div>
            <span className="text-sm text-white/60">6+ years of scale</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <SkillCard title="AI & GenAI" items={skills.ai} accent="from-fuchsia-500/60 to-blue-500/30" />
            <SkillCard title="Cloud & DevOps" items={skills.cloud} accent="from-cyan-500/60 to-blue-500/20" />
            <SkillCard title="Backend & Data" items={[...skills.backend, ...skills.data, ...skills.messaging]} accent="from-amber-500/40 to-orange-500/10" />
            <SkillCard title="Frontend" items={skills.frontend} accent="from-sky-500/40 to-purple-500/10" />
            <SkillCard title="Languages" items={[...skills.languages, ...skills.tools]} accent="from-violet-500/30 to-indigo-500/10" />
          </div>
        </div>
      </ScrollScene>

      <ScrollScene
        id="projects"
        className="mx-auto mt-20 max-w-6xl space-y-8"
        onEnter={handleSectionEnter('projects')}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Projects</p>
          <h2 className="text-3xl font-semibold text-white">Story-driven AI & platform builds</h2>
        </div>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 0.15} />
          ))}
        </div>
      </ScrollScene>

      <ScrollScene
        id="research"
        className="mx-auto mt-20 max-w-5xl"
        onEnter={handleSectionEnter('research')}
      >
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Research</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Adversarial Image Transformation Defense Study</h2>
          <p className="mt-4 text-white/80">
            Published on IEEE Xplore—this study hardens CNNs using ResNet50/DenseNet121 against FGSM / RFGSM / PGD by applying transformation defenses. It’s an engineering-first contribution to production ML security.
          </p>
          <ul className="mt-6 grid gap-3 text-white/80">
            {research.bullets.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                {item}
              </li>
            ))}
          </ul>
          <a
            href={research.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-cyan-400/70 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            View IEEE Publication
          </a>
        </div>
      </ScrollScene>

      <ScrollScene
        id="experience"
        className="mx-auto mt-20 max-w-6xl space-y-6"
        onEnter={handleSectionEnter('experience')}
        threshold={0.25}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Experience</p>
          <h2 className="text-3xl font-semibold text-white">Impact-focused engineering leadership</h2>
        </div>
        <div className="space-y-6">
          {experience.map((role, index) => (
            <motion.div
              key={role.company}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{role.company}</h3>
                <span className="text-sm uppercase tracking-[0.3em] text-white/60">{role.duration}</span>
              </div>
              <p className="mt-1 text-lg text-cyan-300">{role.role}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </ScrollScene>

      <ScrollScene
        id="contact"
        className="mx-auto mt-16 max-w-5xl"
        onEnter={handleSectionEnter('contact')}
      >
        <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0f1c32] to-[#040916] p-10 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.9)]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Let’s build intelligent platforms together</h2>
            <p className="mt-3 text-white/80">
              Sathvik is available for senior engineering roles and strategic AI + cloud partnerships. Tell us about your scale, and let’s design the next-gen experience.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-white">
              <div>
                <span className="font-semibold">Email:</span>{' '}
                <a className="text-cyan-300" href="mailto:sathvik0197@gmail.com">
                  sathvik0197@gmail.com
                </a>
              </div>
              <div>
                <span className="font-semibold">LinkedIn:</span>{' '}
                <a className="text-cyan-300" href="https://linkedin.com/in/sathvikporeddy0197" target="_blank" rel="noreferrer">
                  linkedin.com/in/sathvikporeddy0197
                </a>
              </div>
            </div>
            <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Tell me about your challenge"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black"
              >
                Send request
              </button>
            </form>
          </div>
        </section>
      </ScrollScene>
    </div>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[number]
  delay: number
}

function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <motion.article
      className="group rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.7 }}
      whileHover={{ translateY: -6, boxShadow: '0 20px 40px rgba(15,23,42,0.4)' }}
    >
      <div className="mb-3 text-xs uppercase tracking-[0.5em] text-white/60">{project.title}</div>
      <p className="text-xl font-semibold text-white">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
        {project.highlights.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em]"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

function SkillCard({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  return (
    <motion.div
      className="rounded-[32px] border border-white/10 bg-black/30 p-6 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.4em] text-white/60">
        <span>{title}</span>
        <span className={`h-1 w-16 rounded-full bg-gradient-to-r ${accent}`} />
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-white/80">
        {items.map((item) => (
          <span key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
