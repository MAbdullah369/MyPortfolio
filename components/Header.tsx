'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About'    },
  { href: '/contact',  label: 'Contact'  },
]

export default function Header() {
  const pathname  = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close mobile menu on route change */
  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: 'background 0.4s, box-shadow 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(15,15,30,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '8px', height: '8px',
              borderRadius: '50%',
              background: 'var(--accent)',
            }}
          />
          Abdullah Zahid
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link"
              style={{ color: pathname === href ? 'var(--ink)' : undefined }}
            >
              {label}
              {pathname === href && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px', left: 0,
                    width: '100%', height: '1.5px',
                    background: 'var(--accent)',
                  }}
                />
              )}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  )
}
