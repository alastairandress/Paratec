import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Mail, MapPin, ArrowRight, ArrowUpRight,
  ChevronDown, Send, Briefcase, Brain, Paperclip,
  TrendingUp, Blocks, Clock, DollarSign, ExternalLink,
} from 'lucide-react'
import NeuralNetwork from './components/NeuralNetwork'

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const CALENDAR_URL = 'https://calendar.google.com'

/* ── Animation Helpers ── */
function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Navbar ── */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Live Roles', href: '#roles' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-luna/10 border border-luna/20 flex items-center justify-center group-hover:bg-luna/20 transition-colors">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luna opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-luna" />
              </span>
            </div>
            <span className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              PARATEC
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <a key={href} href={href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                {label}
              </a>
            ))}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-luna text-white text-sm font-medium rounded-lg hover:bg-luna-light transition-colors"
            >
              Book Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-neutral-400 hover:text-white" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
              {links.map(({ label, href }) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="text-neutral-300 hover:text-white py-3 transition-colors border-b border-white/5">
                  {label}
                </a>
              ))}
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 text-center px-5 py-3 bg-luna text-white rounded-lg hover:bg-luna-light transition-colors"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


/* ── Hero ── */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetwork />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luna/8 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luna/5 rounded-full blur-[100px] animate-float-delayed" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luna/10 border border-luna/20 text-luna text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-luna animate-pulse" />
            Specialist Tech Recruitment
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Recruitment for the Future of{' '}
          <span className="text-luna">Web3</span>,{' '}
          <span className="text-luna">Machine Learning</span> and{' '}
          <span className="text-luna">Quant Finance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Connecting elite tech professionals with the most innovative companies
          shaping tomorrow's technology landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#roles"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-luna text-white font-medium rounded-lg hover:bg-luna-light transition-all"
          >
            View Live Roles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all border border-white/10"
          >
            See All Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-neutral-500 animate-bounce" />
      </motion.div>
    </section>
  )
}


/* ── About ── */
function About() {
  const stats = [
    { value: '3', label: 'Specialist Sectors' },
    { value: '150+', label: 'Placements Made' },
    { value: '50+', label: 'Partner Companies' },
    { value: '98%', label: 'Client Retention' },
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <span className="text-luna text-sm font-medium tracking-widest uppercase">About ParaTec</span>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Founded on a simple principle
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 text-neutral-400 leading-relaxed text-lg">
                The most transformative technology sectors deserve specialised recruitment partners
                who truly understand the landscape.
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                We don't just fill roles — we build relationships with the brightest minds in
                Web3, Machine Learning, and Quantitative Finance. Our deep domain expertise
                means we speak your language, understand your challenges, and know exactly
                where to find the talent that will drive your organisation forward.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 text-luna hover:text-luna-light transition-colors font-medium"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-luna/20 transition-colors">
                  <p className="text-3xl font-bold text-luna mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {value}
                  </p>
                  <p className="text-sm text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}


/* ── Services ── */
function ServiceCard({ icon: Icon, title, description, roles, detail }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-luna/30 transition-all duration-500 h-full flex flex-col">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-luna/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-8 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-xl bg-luna/10 border border-luna/20 flex items-center justify-center mb-6 group-hover:bg-luna/20 transition-colors">
          <Icon className="w-6 h-6 text-luna" />
        </div>

        <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h3>
        <p className="text-neutral-400 leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {roles.map(role => (
            <span key={role} className="px-3 py-1 text-xs font-medium text-luna/80 bg-luna/[0.08] rounded-full border border-luna/10">
              {role}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/[0.06] pt-6 mb-6 space-y-4">
                {detail.map(({ heading, text }) => (
                  <div key={heading}>
                    <h4 className="text-sm font-semibold text-white mb-1">{heading}</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-sm font-medium text-luna hover:text-luna-light transition-colors"
          >
            {expanded ? 'Show Less' : 'More Information'}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Services() {
  const services = [
    {
      icon: Blocks,
      title: 'Web3 & Blockchain',
      description: 'Smart contract developers, blockchain architects, DeFi specialists, and Web3 product managers.',
      roles: ['Smart Contract Dev', 'Blockchain Architect', 'DeFi Specialist', 'Web3 PM'],
      detail: [
        {
          heading: 'What We Cover',
          text: 'We recruit across the full Web3 stack — from Layer 1 and Layer 2 protocol engineers to DeFi application developers, NFT platform builders, and DAO governance specialists. Whether you\'re building on Ethereum, Solana, or emerging chains, we understand the nuances of each ecosystem.',
        },
        {
          heading: 'Roles We Place',
          text: 'Senior Solidity and Rust developers, blockchain architects designing consensus mechanisms, DeFi protocol engineers building AMMs and lending platforms, smart contract auditors, Web3 product managers bridging technical and business strategy, and cryptography researchers pushing the boundaries of zero-knowledge proofs.',
        },
        {
          heading: 'Our Approach',
          text: 'The Web3 talent pool is global, niche, and moves fast. We maintain deep networks within developer communities, hackathon circuits, and open-source contributor ecosystems to identify candidates who aren\'t just technically excellent — they believe in decentralisation and are committed to building the future of the open internet.',
        },
      ],
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'ML engineers, data scientists, AI researchers, and deep learning specialists driving the AI revolution.',
      roles: ['ML Engineer', 'Data Scientist', 'AI Researcher', 'Deep Learning'],
      detail: [
        {
          heading: 'What We Cover',
          text: 'From foundational research in large language models and computer vision to production ML systems at scale, we recruit across the entire AI and machine learning landscape. Our expertise spans NLP, reinforcement learning, generative AI, MLOps, and applied data science across industries.',
        },
        {
          heading: 'Roles We Place',
          text: 'Senior ML engineers building training pipelines and inference infrastructure, research scientists publishing at NeurIPS and ICML, data scientists turning complex datasets into actionable business intelligence, MLOps engineers designing robust deployment frameworks, and AI safety researchers working on alignment and interpretability.',
        },
        {
          heading: 'Our Approach',
          text: 'AI talent is the most competitive market in tech. We go beyond LinkedIn profiles — evaluating candidates on research output, open-source contributions, and real-world impact. We understand the difference between someone who can fine-tune a model and someone who can architect an end-to-end ML system from scratch.',
        },
      ],
    },
    {
      icon: TrendingUp,
      title: 'Quantitative Finance',
      description: 'Quantitative researchers, algorithmic traders, risk analysts, and financial engineers.',
      roles: ['Quant Researcher', 'Algo Trader', 'Risk Analyst', 'Financial Engineer'],
      detail: [
        {
          heading: 'What We Cover',
          text: 'We recruit for hedge funds, proprietary trading firms, investment banks, and fintech companies across systematic trading, quantitative research, risk management, and financial technology. From high-frequency market making to long-horizon factor investing, we understand the quantitative finance spectrum.',
        },
        {
          heading: 'Roles We Place',
          text: 'Quantitative researchers developing alpha-generating strategies, C++ and Python developers building low-latency trading systems, risk analysts modelling portfolio exposure, financial engineers pricing exotic derivatives, data engineers building real-time market data pipelines, and portfolio managers overseeing systematic strategies.',
        },
        {
          heading: 'Our Approach',
          text: 'Quant finance demands a rare intersection of mathematical rigour, programming excellence, and market intuition. We recruit from top-tier mathematics, physics, and computer science programmes, as well as experienced professionals moving between sell-side and buy-side. Discretion and speed are paramount in this space — we deliver both.',
        },
      ],
    },
  ]

  return (
    <section id="services" className="py-32 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(74,144,217,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-luna text-sm font-medium tracking-widest uppercase">Our Specialisations</span>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Three sectors, one mission
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Deep expertise in the technologies defining the next decade.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ── Apply Modal ── */
function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
  const [file, setFile] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-neutral-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
            Apply Now
          </h2>
          <p className="text-sm text-neutral-500 mb-6">
            {role.title} — {role.company}
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-luna/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-7 h-7 text-luna" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Application sent
              </h3>
              <p className="text-neutral-400 text-sm mb-6">We'll be in touch shortly.</p>
              <button onClick={onClose} className="px-6 py-2.5 bg-luna text-white text-sm font-medium rounded-lg hover:bg-luna-light transition-colors">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Mobile</label>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="+44 7xxx xxxxxx"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us why you're interested in this role..."
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors resize-none"
                />
              </div>
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  onChange={(e) => setFile(e.target.files[0] || null)}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-luna transition-colors"
                >
                  <Paperclip className="w-4 h-4" />
                  {file ? file.name : 'Attach CV or cover letter'}
                </button>
                {file && (
                  <button
                    type="button"
                    onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                    className="ml-3 text-xs text-neutral-500 hover:text-red-400 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-luna text-white font-medium rounded-lg hover:bg-luna-light transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  )
}


/* ── Live Roles ── */
function LiveRoles() {
  const roles = [
    {
      title: 'Senior Solidity Developer',
      company: 'DeFi Protocol',
      location: 'Remote',
      type: 'Full-time',
      salary: '$180k - $250k',
      tags: ['Solidity', 'DeFi', 'Smart Contracts'],
      sector: 'Web3',
    },
    {
      title: 'ML Engineer — LLMs',
      company: 'AI Startup',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£120k - £160k',
      tags: ['Python', 'PyTorch', 'LLMs'],
      sector: 'ML',
    },
    {
      title: 'Quantitative Researcher',
      company: 'Hedge Fund',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£150k - £300k + bonus',
      tags: ['Python', 'Statistics', 'Alpha Research'],
      sector: 'Quant',
    },
    {
      title: 'Blockchain Architect',
      company: 'Layer 2 Network',
      location: 'Remote (EU)',
      type: 'Full-time',
      salary: '$200k - $280k',
      tags: ['Rust', 'ZK Proofs', 'L2'],
      sector: 'Web3',
    },
    {
      title: 'Senior Data Scientist',
      company: 'FinTech Scale-up',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£100k - £140k',
      tags: ['ML', 'NLP', 'Python'],
      sector: 'ML',
    },
    {
      title: 'Algorithmic Trading Developer',
      company: 'Proprietary Trading Firm',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£130k - £200k + PnL',
      tags: ['C++', 'Low Latency', 'HFT'],
      sector: 'Quant',
    },
  ]

  const [filter, setFilter] = useState('All')
  const [applyRole, setApplyRole] = useState(null)
  const sectors = ['All', 'Web3', 'ML', 'Quant']

  const filtered = filter === 'All' ? roles : roles.filter(r => r.sector === filter)

  return (
    <section id="roles" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-luna text-sm font-medium tracking-widest uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luna opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-luna" />
              </span>
              Live Roles
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Current opportunities
            </h2>
            <p className="mt-4 text-neutral-400 text-lg">
              Browse our latest roles across Web3, ML, and Quant Finance.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-2 mb-12">
            {sectors.map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === s
                    ? 'bg-luna text-white'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((role) => (
              <motion.div
                key={role.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-luna/20 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-luna transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-1">{role.company}</p>
                  </div>
                  <button
                    onClick={() => setApplyRole(role)}
                    className="shrink-0 px-3.5 py-1.5 text-xs font-medium text-luna bg-luna/10 border border-luna/20 rounded-lg hover:bg-luna hover:text-white transition-all"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {role.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {role.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5" /> {role.salary}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {role.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium text-neutral-400 bg-white/[0.04] rounded-md border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <FadeIn delay={0.2}>
          <div className="text-center mt-12">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-luna hover:text-luna-light transition-colors font-medium"
            >
              Can't see the right role? Let's talk <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {applyRole && <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />}
      </AnimatePresence>
    </section>
  )
}


/* ── Contact ── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
  const [file, setFile] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(rgba(74,144,217,0.8) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col">
            <FadeIn>
              <span className="text-luna text-sm font-medium tracking-widest uppercase">Get in Touch</span>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Let's connect
              </h2>
              <p className="mt-6 text-neutral-400 leading-relaxed text-lg">
                Whether you're looking for your next hire or your next role,
                we'd love to hear from you.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luna/10 border border-luna/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-luna" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Email</p>
                    <a href="mailto:alastair@paratec.io" className="text-white hover:text-luna transition-colors">
                      alastair@paratec.io
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luna/10 border border-luna/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-luna" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Location</p>
                    <p className="text-white">London, UK</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luna/10 border border-luna/20 flex items-center justify-center">
                    <LinkedinIcon className="w-5 h-5 text-luna" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/108526997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-luna transition-colors inline-flex items-center gap-1"
                    >
                      ParaTec <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/447803559035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/wa"
                >
                  <div className="w-12 h-12 rounded-xl bg-luna/10 border border-luna/20 flex items-center justify-center group-hover/wa:bg-[#25D366]/10 group-hover/wa:border-[#25D366]/30 transition-colors">
                    <WhatsAppIcon className="w-5 h-5 text-luna group-hover/wa:text-[#25D366] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">WhatsApp</p>
                    <span className="text-white group-hover/wa:text-[#25D366] transition-colors">
                      +44 7803 559035
                    </span>
                  </div>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-luna text-white font-medium rounded-lg hover:bg-luna-light transition-colors"
                >
                  <Briefcase className="w-4 h-4" />
                  Book a Call
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full flex flex-col">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-luna/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-luna" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Message sent
                  </h3>
                  <p className="text-neutral-400">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 flex flex-col flex-1">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Mobile</label>
                    <input
                      type="tel"
                      value={form.mobile}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                      placeholder="+44 7xxx xxxxxx"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about what you're looking for..."
                      className="w-full flex-1 min-h-[80px] px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-luna/50 focus:ring-1 focus:ring-luna/30 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                      onChange={(e) => setFile(e.target.files[0] || null)}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-luna transition-colors"
                    >
                      <Paperclip className="w-4 h-4" />
                      {file ? file.name : 'Attach a file (CV, brief, etc.)'}
                    </button>
                    {file && (
                      <button
                        type="button"
                        onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                        className="ml-3 text-xs text-neutral-500 hover:text-red-400 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-luna text-white font-medium rounded-lg hover:bg-luna-light transition-colors flex items-center justify-center gap-2 mt-auto"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}


/* ── Footer ── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-luna/10 border border-luna/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-luna" />
              </div>
              <span className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                PARATEC
              </span>
            </div>
            <p className="text-neutral-500 max-w-sm leading-relaxed">
              Specialist recruitment for Web3, Machine Learning,
              and Quantitative Finance. London, UK.
            </p>
            <a
              href="https://www.linkedin.com/company/108526997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 p-2.5 rounded-lg bg-white/[0.04] hover:bg-luna/10 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 text-neutral-400 hover:text-luna" />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Navigate</h4>
            <div className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Live Roles', href: '#roles' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <a key={href} href={href} className="block text-neutral-500 hover:text-luna transition-colors text-sm">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Specialisations */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">Specialisations</h4>
            <div className="space-y-3">
              {['Web3 & Blockchain', 'Machine Learning', 'Quantitative Finance'].map(s => (
                <span key={s} className="block text-neutral-500 text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} PARATEC. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-neutral-600 hover:text-luna transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}


/* ── App ── */
export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <LiveRoles />
      <Contact />
      <Footer />
    </div>
  )
}
