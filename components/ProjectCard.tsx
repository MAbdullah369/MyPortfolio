type Props = {
  title: string
  description: string
  link?: string
  tags?: string[]
  year?: string
  index?: number
}

export default function ProjectCard({ title, description, link, tags = [], year, index = 0 }: Props) {
  return (
    <article
      className="project-card reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1rem',
        }}
      >
        {/* Decorative index number */}
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        {year && (
          <span className="tag">{year}</span>
        )}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.3rem',
          marginBottom: '0.65rem',
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--ink-soft)',
          lineHeight: '1.65',
          marginBottom: '1.25rem',
        }}
      >
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}

      {/* CTA */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            transition: 'gap 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = '0.7rem')}
          onMouseLeave={(e) => (e.currentTarget.style.gap = '0.4rem')}
        >
          View project
          <span style={{ fontSize: '1rem', lineHeight: 1 }}>→</span>
        </a>
      )}
    </article>
  )
}
