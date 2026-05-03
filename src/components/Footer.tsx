'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <footer style={{ background: 'var(--void)', borderTop: '1px solid var(--rule)', padding: '2rem 2.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: '14px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>
          gana<span style={{ color: 'var(--accent)' }}>.</span>
        </span>
        <span className="sr-label" style={{ color: 'var(--ink-3)' }}>© 2026 Muhamad Saifulloh Bahroin Gana Perkasa</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[['#home','Beranda'],['#about','Tentang'],['#projects','Proyek']].map(([h,l]) => (
            <a key={h} href={h} onClick={e => go(e as React.MouseEvent<HTMLAnchorElement>, h)}
              className="sr-label" style={{ textDecoration: 'none', transition: 'color 0.2s', color: 'var(--ink-3)' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--ink-3)')}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
