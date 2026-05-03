'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const info = [
  { k: 'Email', v: 'ganaperkasa77@gmail.com' },
  { k: 'Telepon', v: '+62 858-0836-3785' },
  { k: 'Lokasi', v: 'Kediri, Indonesia' },
]
const social = [
  { label: 'Instagram', href: 'https://instagram.com/ganaperkasa_' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gana-perkasa' },
  { label: 'GitHub', href: 'https://github.com/ganaperkasa' },
]

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  outline: 'none',
  fontFamily: 'var(--f-display)',
  fontWeight: 300,
  fontSize: '0.95rem',
  color: 'var(--ink)',
  padding: '1rem 0',
  transition: 'border-color 0.2s',
  cursor: 'none',
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }) }, 3000)
  }

  const Field = ({ name, label, multi }: { name: keyof typeof form; label: string; multi?: boolean }) =>
    multi ? (
      <textarea
        rows={4}
        placeholder={label}
        value={form[name]}
        onChange={e => setForm({ ...form, [name]: e.target.value })}
        style={{ ...inputStyle, resize: 'none' }}
        onFocus={e => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
      />
    ) : (
      <input
        type={name === 'email' ? 'email' : 'text'}
        placeholder={label}
        value={form[name]}
        onChange={e => setForm({ ...form, [name]: e.target.value })}
        style={inputStyle}
        onFocus={e => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
      />
    )

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--deep)', padding: '8rem 2.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem' }}
        >
          <span className="sr-label">04 — kontak</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="contact-grid">

          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
          >
            <h2 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3.5rem)', letterSpacing: '-0.04em', lineHeight: 0.95, color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Mari kita{' '}
              <em style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>bekerja sama</em>
              .
            </h2>
            <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-2)', marginBottom: '3.5rem', maxWidth: '400px' }}>
              Selalu terbuka untuk diskusi peluang baru, proyek menarik, atau sekadar ngobrol soal teknologi.
            </p>

            <div style={{ marginBottom: '3rem' }}>
              {info.map((item, i) => (
                <motion.div key={item.k}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  style={{ display: 'flex', gap: '2rem', alignItems: 'baseline', padding: '1rem 0', borderBottom: '1px solid var(--rule)' }}
                >
                  <span className="sr-label" style={{ width: '72px', flexShrink: 0 }}>{item.k}</span>
                  <span style={{ fontFamily: 'var(--f-display)', fontWeight: 400, fontSize: '0.9rem', color: 'var(--ink)' }}>{item.v}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {social.map((s, i) => (
                <motion.a key={s.label}
                  href={s.href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="sr-label"
                  style={{ textDecoration: 'none', color: 'var(--ink-3)', border: '1px solid var(--rule)', padding: '8px 16px', transition: 'all 0.2s' }}
                  onMouseOver={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)' }}
                  onMouseOut={e => { e.currentTarget.style.color = 'var(--ink-3)'; e.currentTarget.style.borderColor = 'var(--rule)' }}
                  data-hover
                >{s.label}</motion.a>
              ))}
            </div>
          </motion.div>

          {/* right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <Field name="name" label="Nama kamu" />
              <div style={{ height: '1rem' }} />
              <Field name="email" label="Alamat email" />
              <div style={{ height: '1.5rem' }} />
              <Field name="message" label="Ceritakan proyekmu..." multi />
              <div style={{ height: '2rem' }} />
              <button
                type="submit"
                style={{
                  fontFamily: 'var(--f-code)', fontSize: '12px', letterSpacing: '0.08em',
                  textTransform: 'uppercase', cursor: 'none',
                  background: sent ? 'rgba(59,130,246,0.15)' : 'transparent',
                  border: '1px solid rgba(59,130,246, 0.4)',
                  color: sent ? 'var(--accent)' : 'var(--ink-2)',
                  padding: '14px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  transition: 'all 0.25s',
                  width: '100%',
                }}
                onMouseOver={e => { if (!sent) { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--accent)' }}}
                onMouseOut={e => { if (!sent) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-2)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)' }}}
              >
                <span>{sent ? 'Pesan terkirim ✓' : 'Kirim pesan'}</span>
                <span>→</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:4rem!important;}}`}</style>
    </section>
  )
}
