import Link from 'next/link'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/MAbdullah369'        },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mabdullah79'   },
  { label: 'Email',  href: 'mailto:abdullah.zahid2569@gmail.com'         },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        background: 'var(--surface)',
        padding: '3rem 0 2rem',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              marginBottom: '0.35rem',
            }}
          >
            Abdullah Zahid
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
            Full-Stack Developer · {new Date().getFullYear()}
          </p>
        </div>

        {/* Right — socials */}
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '72rem',
          margin: '2rem auto 0',
          padding: '1.5rem 1.5rem 0',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--muted)',
        }}
      >
        <span>Built with Next.js · Tailwind CSS · TypeScript</span>
        <Link href="/privacy" style={{ color: 'var(--muted)' }}>Privacy</Link>
      </div>
    </footer>
  )
}
