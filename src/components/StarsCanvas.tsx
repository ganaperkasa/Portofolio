'use client'
import { useEffect, useRef } from 'react'

export default function StarsCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const ctx = c.getContext('2d')!
    let id: number
    const r = () => { c.width = window.innerWidth; c.height = window.innerHeight }
    r()
    window.addEventListener('resize', r)
    // very subtle, not "AI star field"
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random(), y: Math.random(),
      s: Math.random() * 0.8 + 0.1,
      o: Math.random() * 0.25 + 0.05,
      ph: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.004 + 0.001,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      stars.forEach(p => {
        p.ph += p.sp
        ctx.beginPath()
        ctx.arc(p.x * c.width, p.y * c.height, p.s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148,187,233,${p.o * (0.6 + 0.4 * Math.sin(p.ph))})`
        ctx.fill()
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', r) }
  }, [])
  return <canvas ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}
