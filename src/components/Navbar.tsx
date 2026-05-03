'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#skills', label: 'Keahlian' },
  { href: '#projects', label: 'Proyek' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 50,
          padding: '0 2.5rem',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          background: scrolled ? 'rgba(6,9,15,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '60px',
        }}
      >
        <a href="#home" onClick={e => go(e, '#home')}
          style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: '15px', letterSpacing: '-0.03em', color: 'var(--ink)', textDecoration: 'none' }}>
          gana<span style={{ color: 'var(--accent)' }}>.</span>
        </a>
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => go(e, l.href)}
              className="sr-label"
              style={{ textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--ink-3)')}
            >{l.label}</a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'none', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--ink)', transition: '0.3s', transform: open ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--ink)', opacity: open ? 0 : 1, transition: '0.3s' }} />
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--ink)', transition: '0.3s', transform: open ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
        </button>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{ position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 49, background: 'rgba(6,9,15,0.97)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 2.5rem' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={e => go(e, l.href)} className="sr-label"
                style={{ display: 'block', padding: '0.75rem 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
