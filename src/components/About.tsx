'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { n: 50, sfx: '+', label: 'Proyek selesai' },
  { n: 5, sfx: '+', label: 'Tahun pengalaman' },
  { n: 30, sfx: '+', label: 'Klien puas' },
  { n: 24, sfx: '/7', label: 'Support tersedia' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 })

  return (
    <section id="about" ref={ref} style={{ background: 'var(--deep)', padding: '8rem 2.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* section label row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem' }}
        >
          <span className="sr-label">01 — tentang saya</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
        </motion.div>

        {/* two-col layout — intentionally unequal */}
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 3fr', gap: '5rem', alignItems: 'start' }} className="about-grid">

          {/* left — text-heavy */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
              style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '2rem' }}
            >
              Developer yang percaya bahwa kode yang baik{' '}
              <em style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink-2)' }}>
                adalah seni.
              </em>
            </motion.h2>

            {['Saya adalah seorang Full Stack Developer dengan pengalaman 5+ tahun dalam mengembangkan aplikasi web dan mobile. Spesialisasi meliputi React, Node.js, Python, dan berbagai teknologi modern.',
              'Setiap proyek adalah kesempatan untuk menciptakan sesuatu yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman yang menyenangkan bagi pengguna.'].map((t, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16,1,0.3,1] }}
                style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-2)', marginBottom: '1.25rem' }}
              >{t}</motion.p>
            ))}

            {/* quote — pulled left with border, not centered */}
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16,1,0.3,1] }}
              style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.25rem', marginTop: '2.5rem' }}
            >
              <p style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
                "Good code is clean code — maintainable, scalable, dan indah."
              </p>
            </motion.blockquote>
          </div>

          {/* right — stats, stacked vertically */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
                style={{ padding: '1.75rem 0', borderBottom: '1px solid var(--rule)' }}
              >
                <div style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: '2.8rem', letterSpacing: '-0.04em', color: 'var(--ink)', lineHeight: 1, marginBottom: '4px' }}>
                  {inView ? <CountUp end={s.n} duration={2} delay={0} preserveValue={true} /> : '0'}{s.sfx}
                </div>
                <div className="sr-label" style={{ color: 'var(--ink-3)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
