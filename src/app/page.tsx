'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollScene } from '../components/ScrollScene'

const strengths = [
  'Full-stack engineering (Java, Spring Boot, Node.js, React, Angular)',
  'Microservices and distributed system design',
  'Cloud-native development (AWS, Kubernetes, Docker)',
  'Real-time, event-driven architecture',
  'CI/CD, DevOps, and production reliability',
  'Performance optimization & scalability engineering',
  'AI/GenAI integration (OpenAI, vector databases, semantic search)'
]

const achievements = [
  'Improved search efficiency by 35% using AI-powered semantic search',
  'Reduced manual effort by 25 hours/week through automation',
  'Optimized API performance by 50% to keep systems resilient',
  'Engineered backends supporting 500,000 concurrent users with sub-second latency',
  'Cut latency by 30% via serverless accelerators and edge caching',
  'Boosted data pipeline efficiency by 27% for streaming workflows',
  'Increased data retrieval efficiency by 40% with smart indexing'
]

const projects = [
  {
    title: 'AI-Powered Archive Search System',
    description:
      'LLM-driven archive search using GPT-4, vector embeddings, and responsive React + AWS flows to deliver intelligent retrieval.',
    highlights: ['OpenAI GPT-4 + vector DB', 'Semantic search with embeddings', 'React + AWS full stack']
  },
  {
    title: 'High-Scale Gaming Backend System',
    description:
      'Spring Boot microservices engineered for 500K concurrent gamers with event-driven resilience and observability.',
    highlights: ['Spring Boot + Kafka', 'Event-driven microservices', 'Performance & reliability']
  },
  {
    title: 'Cloud-Based Data Processing Platform',
    description:
      'Distributed pipelines on AWS Kinesis + SQS that transform streaming data into analytics with minimal latency.',
    highlights: ['AWS Kinesis + SQS', 'Microservices observability', 'Real-time dashboards']
  },
  {
    title: 'FinTech / Banking Application',
    description:
      'Secure, high-throughput transactional APIs fortified with OAuth2/TLS for enterprise banking workflows.',
    highlights: ['OAuth2 + TLS', 'Spring Boot resilience', 'High-performance transactions']
  }
]

const experience = [
  {
    company: 'ADP Technology Services, Inc',
    role: 'Senior Application Developer',
    duration: 'Nov 2024 – Present',
    bullets: [
      'Architected scalable client management platform with Java Spring Boot + Node.js services',
      'Integrated AWS Kinesis, SQS, Neptune for real-time processing',
      'Led async pipelines backed by PostgreSQL, DynamoDB, Elasticsearch, and Redis',
      'Enabled rapid deployments with Docker + EKS'
    ]
  },
  {
    company: 'University of Houston System',
    role: 'Student Technician IV',
    duration: 'Apr 2023 – May 2024',
    bullets: [
      'Built AI-powered archive search with GPT-4 + vector search',
      'Boosted search efficiency by 35% and cut manual work by 25h/week',
      'Reduced API latency by 50% and deployed via AWS Lambda + S3'
    ]
  },
  {
    company: 'IVY Software (Client: Entain)',
    role: 'Software Engineer – Full Stack',
    duration: 'Dec 2021 – Dec 2022',
    bullets: [
      'Engineered gaming backend for 500K concurrent users',
      'Cut processing time by 42% and improved data efficiency by 27%',
      'Implemented microservices, event-driven flows, and OAuth2 security'
    ]
  },
  {
    company: 'Capgemini (Client: Discover Financial)',
    role: 'Associate Consultant',
    duration: 'Sep 2018 – Nov 2021',
    bullets: [
      'Built banking applications with Spring Boot + Angular',
      'Cut latency by 30% via AWS serverless architecture',
      'Improved data retrieval efficiency by 40% and integrated Kafka'
    ]
  }
]

const skills = {
  languages: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  frontend: ['React', 'Angular', 'HTML5', 'CSS3'],
  backend: ['Spring Boot', 'Node.js', 'REST APIs', 'GraphQL'],
  cloud: ['AWS Lambda', 'S3', 'DynamoDB', 'Kinesis', 'SQS', 'EKS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Elasticsearch', 'Redis'],
  messaging: ['Kafka', 'SQS', 'Kinesis'],
  tools: ['Git', 'GitHub', 'Maven', 'Gradle', 'JIRA', 'Postman'],
  ai: ['Generative AI', 'OpenAI API', 'RAG', 'FAISS', 'Pinecone', 'LangChain', 'LlamaIndex', 'TensorFlow', 'PyTorch']
}

const research = {
  title: 'Adversarial Image Transformation Defense Study',
  platform: 'IEEE Xplore',
  link: 'https://ieeexplore.ieee.org/document/10737087',
  bullets: [
    'Defended ResNet50 and DenseNet121 CNNs against FGSM, RFGSM, and PGD',
    'Layered transformation pipelines that improved model robustness',
    'Published research-grade methodology and quantitative insights'
  ]
}

const navLinks = [
  { label: 'AI', id: 'ai' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Research', id: 'research' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
]

const easing: [number, number, number, number] = [0.4, 0, 0.2, 1]
const projectCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.9,
      ease: easing
    }
  })
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('ai')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || 'ai')
          }
        })
      },
      { threshold: 0.38 }
    )
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) {
        observer.observe(element)
      }
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10">
      <nav className="sticky top-0 z-40 mx-auto mt-5 flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 backdrop-blur">
        <span className="text-sm tracking-[0.45em] text-white">Sathvik</span>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition hover:text-white ${activeSection === link.id ? 'text-cyan-300' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <ScrollScene id="ai" className="relative mt-16 w-full max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#101828] via-[#020617] to-[#03050b] px-10 py-14" forceRender>
        <motion.div className="pointer-events-none absolute inset-0 opacity-30" animate={{ translateY: [0, -50, 0] }} transition={{ duration: 12, repeat: Infinity }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_55%)]" />
        </motion.div>
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">AI-powered systems</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Architecting intelligent, cloud-native platforms with{' '}
            <span className="text-cyan-400">LLM-driven insights</span> and realtime scale.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Senior Software Engineer designing AI-first distributed systems, combining generative models, semantic search, and resilient cloud services for hundreds of thousands of users.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              Explore AI Work
            </a>
            <a href="mailto:sathvik0197@gmail.com" className="text-sm font-semibold text-white/80 hover:text-white">
              Contact Sathvik
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {achievements.slice(0, 3).map((item, index) => (
              <motion.div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollScene>

      <ScrollScene id="about" className="mt-16 w-full max-w-6xl">
        <section className="grid gap-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Summary</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Senior Engineer & Cloud Architect</h2>
            <p className="mt-3 max-w-3xl text-lg text-white/80">
              Sathvik builds mission-critical distributed systems with Java, Spring Boot, Node.js, and cloud-native primitives. He blends real-time data, microservices, and production reliability with generative AI to accelerate insights and automation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map((item, index) => (
              <motion.div
                key={item}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 text-sm text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.6 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="skills" className="mt-16 w-full max-w-6xl">
        <section className="space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">Skills</p>
              <h2 className="text-3xl font-semibold text-white">AI-first, Cloud everywhere</h2>
            </div>
            <div className="text-sm text-white/60">6+ years of scale</div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <SkillCard title="AI / GenAI" items={skills.ai} accent="from-fuchsia-500/60 to-blue-500/30" />
            <SkillCard title="Cloud & DevOps" items={skills.cloud} accent="from-cyan-500/60 to-blue-500/20" />
            <SkillCard title="Backend & Streaming" items={[...skills.backend, ...skills.messaging]} accent="from-amber-500/40 to-orange-500/10" />
            <SkillCard title="Frontend" items={skills.frontend} accent="from-sky-500/40 to-purple-500/10" />
            <SkillCard title="Databases" items={skills.databases} accent="from-lime-500/30 to-emerald-500/10" />
            <SkillCard title="Languages & Tools" items={[...skills.languages, ...skills.tools]} accent="from-violet-500/30 to-indigo-500/10" />
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="projects" className="mt-16 w-full max-w-6xl">
        <section className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Projects</p>
            <h2 className="text-3xl font-semibold text-white">Intelligent platforms & resilient systems</h2>
          </div>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-2xl"
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ translateY: -6 }}
              >
                <div className="mb-3 text-xs uppercase tracking-[0.5em] text-white/60">{project.title}</div>
                <p className="text-xl font-semibold text-white">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/70">
                  {project.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 px-4 py-1 text-[0.6rem] uppercase tracking-[0.3em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="research" className="mt-16 w-full max-w-6xl">
        <section className="grid gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Research</p>
            <h2 className="text-3xl font-semibold text-white">Adversarial Image Transformation Defense Study</h2>
            <p className="mt-3 max-w-3xl text-lg text-white/80">
              Published through IEEE Xplore, this study defends neural networks from FGSM / RFGSM / PGD attacks using transformation pipelines that improve robustness for production ML.
            </p>
          </div>
          <ul className="grid gap-3 text-white/80">
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
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/70 px-8 py-3 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            View IEEE Publication
          </a>
        </section>
      </ScrollScene>

      <ScrollScene id="experience" className="mt-16 w-full max-w-6xl">
        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Experience</p>
            <h2 className="text-3xl font-semibold text-white">Impact-focused engineering leadership</h2>
          </div>
          <div className="space-y-5">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                  <span className="text-xs uppercase tracking-[0.4em] text-white/60">{item.duration}</span>
                </div>
                <p className="mt-1 text-lg text-cyan-300">{item.role}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollScene>

      <ScrollScene id="contact" className="mt-16 mb-24 w-full max-w-6xl">
        <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0f1c32] to-[#040916] p-10 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.9)]">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">Contact</p>
              <h2 className="text-3xl font-semibold text-white">Let’s craft the next intelligent platform</h2>
              <p className="mt-3 text-white/80">
                Open for senior roles, strategic initiatives, and AI/GenAI partnerships. Send over a brief so we can align on building high-scale, intelligent systems.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white">
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

function SkillCard({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  return (
    <div className={`rounded-[32px] border border-white/10 bg-black/30 p-6 shadow-2xl`}>
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/60">
        <span>{title}</span>
        <span className={`h-1 w-16 rounded-full bg-gradient-to-r ${accent}`} />
      </div>
      <div className="flex flex-wrap gap-3 text-[0.7rem] text-white/80">
        {items.map((item) => (
          <span key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
