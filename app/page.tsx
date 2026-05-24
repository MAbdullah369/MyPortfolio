'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { useReveal } from '../hooks/useReveal'
import { Metadata } from 'next'

const skills = [
  'React', 'Next.js', 'Flutter', 'Node.js', 'Express.js',
  'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'C++',
  'Docker', 'Git', 'REST APIs', 'TypeScript', 'SQL',
]

const featured = [
  {
    title: 'Quran Recitation App',
    description: 'Final year project providing real-time feedback on Quranic recitation accuracy using OpenAI\'s Whisper model. Improved error detection by 25% and reduced inference latency from 10s to 1s via INT8 quantization and TensorFlow Lite.',
    link: 'https://github.com/MAbdullah369',
    tags: ['Flutter', 'Whisper API', 'TensorFlow Lite', 'Python', 'Dart'],
    year: '2025',
  },
  {
    title: 'University Management Portal (CMS)',
    description: 'Comprehensive data-driven content management system enabling multi-tier university workflow scheduling. Implemented secure RBAC middleware supporting Admin, Instructor, and Student roles via JWT, with analytics views and 35% faster query response times.',
    link: 'https://github.com/MAbdullah369',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    year: '2023',
  },
  {
    title: 'E-commerce Platform',
    description: 'Commercial-ready storefront with centralized production pipeline, product catalog, shopping cart, and order management. Reduced server response latency by 40% through optimized MongoDB aggregation pipelines and high-throughput query structures.',
    link: 'https://github.com/MAbdullah369',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    year: '2023',
  },
]

export default function Home() {
  useReveal()

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 'clamp(6rem, 18vw, 10rem)',
          paddingBottom: 'clamp(4rem, 10vw, 7rem)',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          maxWidth: '72rem',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Decorative big number */}
        <span
          className="big-num anim-fade"
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '4rem',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          01
        </span>

        {/* Floating badge */}
        <div
          className="float-badge anim-fade anim-fade-d1"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            border: '1px solid var(--line)',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: 'var(--muted)',
            marginBottom: '2rem',
            background: 'var(--surface2)',
          }}
        >
          <span
            style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
            }}
          />
          Available for new projects
        </div>

        <h1
          className="anim-fade-up"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--ink)',
            maxWidth: '14ch',
            marginBottom: '0.5rem',
          }}
        >
          Hello — I'm<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Abdullah Zahid</em>
        </h1>

        <span className="accent-line" style={{ width: '3rem', marginBottom: '1.5rem' }} />

        <p
          className="anim-fade-up anim-fade-up-d2"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: 'var(--ink-soft)',
            maxWidth: '42ch',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          I build fast, elegant web experiences — from pixel-perfect interfaces
          to robust full-stack systems that scale.
        </p>

        <div
          className="anim-fade-up anim-fade-up-d3"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="/projects" className="btn-primary">View My Work</a>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              border: '1px solid var(--line)',
              borderRadius: '2px',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--ink)'
              e.currentTarget.style.background = 'var(--ink)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line)'
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--ink)'
            }}
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ── Skills Ticker ──────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '0.9rem 0',
          overflow: 'hidden',
          background: 'var(--surface2)',
        }}
      >
        {/* 
          ANIMATION: Marquee / infinite scroll ticker
          - .marquee-track duplicates the list so the scroll looks seamless
          - CSS animation: marquee moves translateX from 0 to -50% (half = one full copy)
          - Pauses on hover via animation-play-state: paused
        */}
        <div className="marquee-track" aria-hidden>
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              style={{
                padding: '0 2rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                whiteSpace: 'nowrap',
              }}
            >
              {s}
              <span style={{ marginLeft: '2rem', color: 'var(--gold)' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured Projects ──────────────────────────────────── */}
      <section
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: 'clamp(4rem, 10vw, 7rem) 1.5rem',
          width: '100%',
        }}
      >
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '2.5rem',
            gap: '1rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              letterSpacing: '-0.025em',
            }}
          >
            Featured Work
          </h2>
          <a
            href="/projects"
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              whiteSpace: 'nowrap',
            }}
          >
            All projects →
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {featured.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────────── */}
      <section
        className="reveal"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.12) 0%, rgba(79,156,255,0.12) 100%)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            maxWidth: '20ch',
            margin: '0 auto 1.5rem',
            color: 'var(--ink)',
          }}
        >
          Have a project in mind?
        </p>
        <a
          href="/contact"
          className="btn-primary"
          style={{ background: 'var(--accent)', display: 'inline-flex' }}
        >
          Let's work together →
        </a>
      </section>

      <Footer />
    </main>
  )
}
