import '../styles/globals.css'
import { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://abdullah-zahid.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Abdullah Zahid — Full-Stack Developer',
    template: '%s | Abdullah Zahid',
  },
  description:
    'Portfolio of Abdullah Zahid — a full-stack developer specialising in AI-powered applications, beautiful interfaces, and scalable systems.',
  keywords: [
    'portfolio',
    'full-stack developer',
    'frontend engineer',
    'backend engineer',
    'Next.js',
    'React',
    'Node.js',
    'machine learning',
  ],
  authors: [{ name: 'Abdullah Zahid', url: BASE_URL }],
  creator: 'Abdullah Zahid',

  /* ── Open Graph ── */
  openGraph: {
    title: 'Abdullah Zahid — Full-Stack Developer',
    description:
      'Portfolio of Abdullah Zahid — a full-stack developer specialising in AI-powered applications and scalable web systems.',
    url: BASE_URL,
    siteName: 'Abdullah Zahid',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Abdullah Zahid — Full-Stack Developer',
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Zahid — Full-Stack Developer',
    description:
      'Portfolio of Abdullah Zahid — a full-stack developer specialising in AI-powered applications and scalable web systems.',
    creator: '@MAbdullah369',
    images: [`${BASE_URL}/og-image.png`],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  /* ── Verification (add your own tokens) ── */
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_TOKEN',
  },

  /* ── Alternate ── */
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD structured data — Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              url: BASE_URL,
              sameAs: [
                'https://github.com/yourusername',
                'https://linkedin.com/in/yourusername',
                'https://twitter.com/yourhandle',
              ],
              jobTitle: 'Creative Developer',
              description:
                'Creative developer specialising in beautiful, performant web experiences.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
