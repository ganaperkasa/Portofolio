'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cols = [
  { label: 'Frontend', skills: [
    { name: 'React.js', pct: 90 }, { name: 'Vue.js', pct: 85 },
    { name: 'Tailwind CSS', pct: 95 }, { name: 'Next.js', pct: 88 },
  ]},
  { label: 'Backend', skills: [
    { name: 'Node.js', pct: 88 }, { name: 'Python', pct: 92 },
    { name: 'MongoDB', pct: 80 }, { name: 'PostgreSQL', pct: 75 },
  ]},
  { label: 'DevOps & Tools', skills: [
    { name: 'Git', pct: 95 }, { name: 'Docker', pct: 75 },
    { name: 'AWS', pct: 70 }, { name: 'CI / CD', pct: 72 },
  ]},
]

function Bar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 })
  return (
    <div ref={ref} style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontFamily: 'var(--f-display)', fontWeight: 500, fontSize: '14px', color: 'var(--ink)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--f-code)', fontSize: '11px', color: 'var(--ink-3)' }}>{pct}</span>
      </div>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16,1,0.3,1] }}
          style={{ position: 'absolute', height: '1px', top: 0, left: 0, background: 'var(--accent)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--void)', padding: '8rem 2.5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '5rem' }}
        >
          <span className="sr-label">02 — keahlian & tools</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
          <h2 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.03em', color: 'var(--ink)', whiteSpace: 'nowrap' }}>
            Expertise
          </h2>
        </motion.div>

        {/* 3-col grid — no card backgrounds, just rules */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0' }} className="skills-grid">
          {cols.map((col, ci) => (
            <motion.div key={col.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              style={{ padding: '0 3rem 0 0', borderRight: ci < 2 ? '1px solid var(--rule)' : 'none', paddingRight: ci === 2 ? 0 : '3rem', paddingLeft: ci > 0 ? '3rem' : 0 }}
            >
              <div className="sr-label" style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--rule)' }}>{col.label}</div>
              {col.skills.map((s, si) => (
                <Bar key={s.name} {...s} delay={ci * 0.1 + si * 0.06 + 0.2} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.skills-grid{grid-template-columns:1fr!important;} .skills-grid>div{border-right:none!important;padding-left:0!important;border-bottom:1px solid var(--rule);padding-bottom:2rem;margin-bottom:2rem;}}`}</style>
    </section>
  )
}
