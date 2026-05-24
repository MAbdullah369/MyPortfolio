'use client'
import { Metadata } from 'next'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useReveal } from '../../hooks/useReveal'

const education = [
  { degree: 'Bachelor of Science in Computer Science', school: 'Information Technology University', period: 'Sept 2022 – June 2026', details: 'Data Structures, Algorithms, AI, Database Management' },
  { degree: 'Intermediate in Pre-Engineering', school: 'Punjab Group of Colleges', period: 'Oct 2020 – June 2022', details: 'Engineering Foundation' },
]

export default function AboutPage() {
  useReveal()

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section
        style={{
          paddingTop: 'clamp(7rem, 18vw, 10rem)',
          paddingBottom: 'clamp(4rem, 10vw, 7rem)',
          maxWidth: '72rem',
          margin: '0 auto',
          padding: 'clamp(7rem, 18vw, 10rem) 1.5rem clamp(4rem, 10vw, 7rem)',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left column */}
        <div>
          {/* Avatar with profile picture */}
          <div
            className="anim-fade"
            style={{
              position: 'relative',
              width: '96px', height: '96px',
              marginBottom: '2rem',
            }}
          >
            <div className="pulse-ring" />
            <div className="pulse-ring" />
            <Image
              src="/profile.jpg"
              alt="Abdullah Zahid"
              width={96}
              height={96}
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
              }}
              priority
            />
          </div>

          <h1
            className="anim-fade-up"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
            }}
          >
            About Me
          </h1>
          <span className="accent-line" style={{ width: '2.5rem', marginBottom: '1.5rem' }} />

          <p
            className="anim-fade-up anim-fade-up-d1"
            style={{
              color: 'var(--ink-soft)',
              lineHeight: 1.75,
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          >
            I'm a computer science student at Information Technology University with a passion for building intelligent systems and elegant web experiences. I specialize in full-stack development with expertise in React, Node.js, and machine learning frameworks.
          </p>
          <p
            className="anim-fade-up anim-fade-up-d2"
            style={{ color: 'var(--ink-soft)', lineHeight: 1.75, fontSize: '1rem' }}
          >
            My final year project focuses on Quranic recitation analysis using AI. I'm driven by the challenge of combining cutting-edge ML with intuitive interfaces to solve real-world problems.
          </p>

          <div className="anim-fade-up anim-fade-up-d3" style={{ marginTop: '2rem' }}>
            <a href="/contact" className="btn-primary">Get in touch</a>
          </div>
        </div>

        {/* Right column — experience */}
        <div>
          <h2
            className="reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              letterSpacing: '-0.01em',
              marginBottom: '1.5rem',
              color: 'var(--muted)',
            }}
          >
            Education
          </h2>

          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {education.map(({ degree, school, period, details }, i) => (
              <li
                key={i}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '0.5rem 2rem',
                  alignItems: 'start',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.15rem' }}>
                    {degree}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{school}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.35rem' }}>{details}</p>
                </div>
                <span className="tag" style={{ marginTop: '0.1rem', whiteSpace: 'nowrap' }}>
                  {period}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </main>
  )
}
