'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import pp from '../public/PP.jpg'

function SpaceCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d')!
    let id: number
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    // particles
    const pts = Array.from({ length: 120 }, () => ({
      x: Math.random(), y: Math.random(),
      s: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.5 + 0.15,
      ph: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.008 + 0.002,
    }))

    const draw = () => {
      const W = c.width, H = c.height
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.ph += p.sp
        const o = p.o * (0.5 + 0.5 * Math.sin(p.ph))
        ctx.beginPath()
        ctx.arc(p.x * W, p.y * H, p.s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148,187,233,${o})`
        ctx.fill()
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
}

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--void)' }}>
      <SpaceCanvas />

      {/* subtle gradient blob — off-center, not centered */}
      <div style={{
        position: 'absolute', top: '10%', right: '8%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem', paddingTop: '80px' }}>

        {/* two-column layout: text left, photo right */}
        <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>

          {/* ── LEFT: all text content ── */}
          <div>
            {/* availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '3rem', padding: '5px 12px 5px 8px', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '4px', background: 'rgba(59,130,246,0.07)' }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', flexShrink: 0, animation: 'ping 2s ease infinite' }} />
              <span className="sr-label" style={{ color: 'var(--ink-2)', letterSpacing: '0.08em' }}>available for freelance</span>
            </motion.div>

            {/* main heading — asymmetric, raw */}
            <div style={{ marginBottom: '2.5rem' }}>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16,1,0.3,1] }}
                style={{
                  fontFamily: 'var(--f-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6.5vw, 6rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.04em',
                  color: 'var(--ink)',
                  marginBottom: '0.15em',
                }}
              >
                Muhamad
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16,1,0.3,1] }}
                style={{
                  fontFamily: 'var(--f-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(2.5rem, 6.5vw, 6rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: 'var(--accent)',
                  marginBottom: '0.15em',
                }}
              >
                Saifulloh
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16,1,0.3,1] }}
                style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}
              >
                <span style={{
                  fontFamily: 'var(--f-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 6.5vw, 6rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.04em',
                  color: 'var(--ink)',
                }}>Gana</span>
                <span className="sr-label" style={{ color: 'var(--ink-3)', alignSelf: 'flex-end', marginBottom: '0.5rem' }}>— Full Stack Dev</span>
              </motion.div>
            </div>

            {/* bottom row — desc + cta, max-width constrained */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'end', maxWidth: '900px' }}
              className="grid-stack"
            >
              <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--ink-2)', maxWidth: '480px' }}>
                Passionate dalam menciptakan pengalaman digital yang bermakna — berfokus pada keindahan kode dan estetika antarmuka yang tidak terlupakan.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
                <a href="#projects"
                  style={{
                    fontFamily: 'var(--f-code)', fontSize: '12px', letterSpacing: '0.08em',
                    textTransform: 'uppercase', textDecoration: 'none',
                    background: 'var(--accent)', color: '#fff',
                    padding: '12px 24px', display: 'block', textAlign: 'center',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >lihat proyek</a>
                <a href="#contact"
                  style={{
                    fontFamily: 'var(--f-code)', fontSize: '12px', letterSpacing: '0.08em',
                    textTransform: 'uppercase', textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.1)', color: 'var(--ink-2)',
                    padding: '12px 24px', display: 'block', textAlign: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.color = 'var(--ink)' }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--ink-2)' }}
                >hubungi saya</a>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: profile photo ── */}
          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', flexShrink: 0 }}
          >
            {/* outer glow ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', inset: '-16px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, rgba(59,130,246,0.4), rgba(37,99,235,0.1), rgba(59,130,246,0.4))',
                animation: 'spin 8s linear infinite',
                zIndex: 0,
              }}
            />
            {/* inner backdrop blur ring */}
            <div style={{
              position: 'absolute', inset: '-12px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
              zIndex: 0,
            }} />

            {/* photo container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative', zIndex: 1,
                width: '280px', height: '340px',
                borderRadius: '140px 140px 120px 120px',
                overflow: 'hidden',
                border: '1px solid rgba(59,130,246,0.2)',
                boxShadow: '0 0 40px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* ── Ganti src di bawah dengan path foto Anda, contoh: "/profile.jpg" ── */}
              <img
                src={pp.src}
                alt="Muhamad Saifulloh Gana"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              {/* subtle overlay gradient at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(10,15,28,0.6) 0%, transparent 100%)',
                pointerEvents: 'none',
              }} />
            </motion.div>

            {/* decorative corner accent — top right */}
            <motion.div
              initial={{ opacity: 0, x: 10, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                position: 'absolute', top: '-8px', right: '-8px', zIndex: 2,
                width: '24px', height: '24px',
                borderTop: '2px solid rgba(59,130,246,0.6)',
                borderRight: '2px solid rgba(59,130,246,0.6)',
              }}
            />
            {/* decorative corner accent — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -10, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                position: 'absolute', bottom: '-8px', left: '-8px', zIndex: 2,
                width: '24px', height: '24px',
                borderBottom: '2px solid rgba(59,130,246,0.6)',
                borderLeft: '2px solid rgba(59,130,246,0.6)',
              }}
            />

            {/* floating badge — experience */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', right: '-24px', top: '30%', zIndex: 3,
                background: 'rgba(10,15,28,0.9)',
                border: '1px solid rgba(59,130,246,0.25)',
                backdropFilter: 'blur(12px)',
                padding: '10px 14px',
                borderRadius: '6px',
                display: 'flex', flexDirection: 'column', gap: '2px',
                minWidth: '90px',
              }}
            >
              <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--accent)', lineHeight: 1 }}>3+</span>
              <span style={{ fontFamily: 'var(--f-code)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>tahun exp</span>
            </motion.div>

            {/* floating badge — projects */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', left: '-24px', bottom: '25%', zIndex: 3,
                background: 'rgba(10,15,28,0.9)',
                border: '1px solid rgba(59,130,246,0.25)',
                backdropFilter: 'blur(12px)',
                padding: '10px 14px',
                borderRadius: '6px',
                display: 'flex', flexDirection: 'column', gap: '2px',
                minWidth: '90px',
              }}
            >
              <span style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--accent)', lineHeight: 1 }}>20+</span>
              <span style={{ fontFamily: 'var(--f-code)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>proyek</span>
            </motion.div>
          </motion.div>

        </div>{/* end hero-layout */}

        {/* scroll nudge — bottom left, minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2 }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.5))', animation: 'grow 1.5s ease infinite alternate' }} />
          <span className="sr-label" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'var(--ink-3)' }}>scroll</span>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grow { from { transform: scaleY(0.4); } to { transform: scaleY(1); } }
        @keyframes ping { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr !important; }
          .hero-photo-wrapper { display: flex; justify-content: center; order: -1; margin-bottom: 2rem; }
          .hero-photo-wrapper > div[style*="280px"] { width: 200px !important; height: 240px !important; }
        }
        @media (max-width: 640px) { .grid-stack { grid-template-columns: 1fr !important; } }
      `}} />
    </section>
  )
}