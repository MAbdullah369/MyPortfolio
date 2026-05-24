'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectCard from '../../components/ProjectCard'
import { useReveal } from '../../hooks/useReveal'

const projects = [
  {
    title: 'Quran Recitation App',
    description: 'Final year project providing real-time feedback on Quranic recitation accuracy using OpenAI\'s Whisper model. Improved error detection by 25% through model fine-tuning and reduced inference latency from 10 seconds to 1 second via INT8 quantization and TensorFlow Lite.',
    link: 'https://github.com/MAbdullah369',
    tags: ['Flutter', 'Whisper API', 'TensorFlow Lite', 'Python', 'Dart'],
    year: '2025',
  },
  {
    title: 'Quran Audio Data Collection Platform',
    description: 'Responsive full-stack platform optimized to crowdsource high-quality audio recordings for AI model training. Implemented custom authentication schemas and file-system bound upload parsing, successfully cataloging 15,000+ audio verse recordings.',
    link: 'https://github.com/MAbdullah369',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
    year: '2024',
  },
  {
    title: 'University Management Portal (CMS)',
    description: 'Comprehensive data-driven content management system enabling multi-tier university workflow scheduling. Implemented secure RBAC middleware supporting Admin, Instructor, and Student roles via JWT, with analytics views tracking course progression and grade distributions.',
    link: 'https://github.com/MAbdullah369',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    year: '2023',
  },
  {
    title: 'E-commerce Platform',
    description: 'Commercial-ready storefront with centralized production pipeline, product catalog, shopping cart, and order management. Reduced average server response latency by 40% through optimized MongoDB aggregation pipelines and high-throughput query structures.',
    link: 'https://github.com/MAbdullah369',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    year: '2023',
  },
]

export default function ProjectsPage() {
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
        }}
      >
        <div
          style={{ position: 'relative', marginBottom: '3rem' }}
        >
          <span
            className="big-num anim-fade"
            style={{ position: 'absolute', right: 0, top: '-1rem', opacity: 0.5 }}
          >
            02
          </span>

          <h1
            className="anim-fade-up"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
            }}
          >
            Projects
          </h1>
          <span className="accent-line" style={{ width: '2.5rem', marginBottom: '1rem' }} />
          <p
            className="anim-fade-up anim-fade-up-d1"
            style={{ color: 'var(--ink-soft)', maxWidth: '48ch', lineHeight: 1.7 }}
          >
            Full-stack projects spanning AI-powered applications, data platforms, content management systems,
            and e-commerce solutions built with modern tech stacks.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
