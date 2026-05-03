'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const d = dot.current, r = ring.current
    if (!d || !r) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      d.style.left = mx + 'px'; d.style.top = my + 'px'
    }
    const anim = () => {
      rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14
      r.style.left = rx + 'px'; r.style.top = ry + 'px'
      requestAnimationFrame(anim)
    }
    anim()
    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => r.classList.add('big'))
      el.addEventListener('mouseleave', () => r.classList.remove('big'))
    })
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return <>
    <div ref={dot} id="cur-dot" />
    <div ref={ring} id="cur-ring" />
  </>
}
