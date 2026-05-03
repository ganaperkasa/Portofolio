'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    num: '01', title: 'E-Commerce Platform',
    desc: 'Platform e-commerce full-featured dengan manajemen inventory real-time, payment gateway terintegrasi, dan dashboard analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    year: '2024', href: '#',
  },
  {
    num: '02', title: 'Task Management App',
    desc: 'Aplikasi manajemen tugas kolaboratif dengan real-time collaboration, drag-and-drop interface, dan notifikasi pintar.',
    tags: ['Vue.js', 'Firebase', 'Socket.io'],
    year: '2024', href: '#',
  },
  {
    num: '03', title: 'Creative Portfolio',
    desc: 'Portfolio interaktif dengan animasi 3D, particle effects, dan transisi halaman yang memukau menggunakan teknologi terkini.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    year: '2023', href: '#',
  },
  {
    num: '04', title: 'Analytics Dashboard',
    desc: 'Dashboard analytics enterprise dengan visualisasi data real-time, laporan otomatis, dan integrasi multi-platform.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    year: '2023', href: '#',
  },
]

function Row({ p, i }: { p: typeof projects[0]; i: number }) {
  return (
    <motion.a
      href={p.href}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16,1,0.3,1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '40px 1fr auto',
        gap: '2.5rem',
        alignItems: 'start',
        padding: '2.5rem 1rem',
        borderBottom: '1px solid var(--rule)',
        textDecoration: 'none',
        cursor: 'none',
        position: 'relative',
        borderRadius: '8px',
        margin: '0 -1rem'
      }}
      data-hover
      whileHover="hov"
    >
      {/* hover bg — elegant glass effect */}
      <motion.div
        variants={{ hov: { opacity: 1, scale: 1 }, rest: { opacity: 0, scale: 0.95 } }}
        initial="rest"
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '12px',
          zIndex: -1,
        }}
      />
      {/* thin left line on hover */}
      <motion.div
        variants={{ hov: { scaleY: 1, opacity: 1 }, rest: { scaleY: 0, opacity: 0 } }}
        initial="rest"
        style={{
          position: 'absolute', left: 0, top: '10%', bottom: '10%', width: '3px',
          background: 'var(--accent)', transformOrigin: 'center',
          borderRadius: '4px'
        }}
      />

      <span style={{ fontFamily: 'var(--f-code)', fontSize: '11px', color: 'var(--ink-3)', paddingTop: '3px' }}>{p.num}</span>

      <div>
        <motion.h3
          variants={{ hov: { color: '#e8eef8', x: 8 }, rest: { color: '#8fa3c4', x: 0 } }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}
        >{p.title}</motion.h3>
        <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--ink-3)', maxWidth: '540px', marginBottom: '1rem' }}>{p.desc}</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}>
        <span className="sr-label" style={{ color: 'var(--ink-3)' }}>{p.year}</span>
        <motion.span
          variants={{ hov: { x: 4, y: -4, color: '#3b82f6', scale: 1.1 }, rest: { x: 0, y: 0, color: '#3d5278', scale: 1 } }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ fontSize: '1.2rem', display: 'block' }}
        >↗</motion.span>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)', padding: '8rem 2.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '5rem' }}
          className="proj-header"
        >
          <h2 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(2rem,5vw,4rem)', letterSpacing: '-0.04em', lineHeight: 0.95, color: 'var(--ink)' }}>
            Proyek<br />
            <em style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink-2)' }}>Terpilih</em>
          </h2>
          <div style={{ textAlign: 'right' }}>
            <span className="sr-label" style={{ display: 'block', marginBottom: '0.5rem' }}>03 — proyek</span>
            <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--ink-3)', maxWidth: '240px', lineHeight: 1.6 }}>
              Di mana fungsi bertemu estetika
            </p>
          </div>
        </motion.div>

        {/* first row border-top */}
        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {projects.map((p, i) => <Row key={p.num} p={p} i={i} />)}
        </div>
      </div>
      <style>{`@media(max-width:640px){.proj-header{flex-direction:column;gap:1.5rem;}}`}</style>
    </section>
  )
}
