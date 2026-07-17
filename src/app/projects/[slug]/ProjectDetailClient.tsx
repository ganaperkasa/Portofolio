'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../../data/projects'
import CustomCursor from '../../../components/CustomCursor'

// Load StarsCanvas dynamically to avoid hydration/window errors
const StarsCanvas = dynamic(() => import('../../../components/StarsCanvas'), { ssr: false })

export default function ProjectDetailClient({ slug }: { slug: string }) {
  // Find the current project based on slug
  const project = projects.find((p) => p.slug === slug)

  // Handle case where project is not found
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--void)', color: 'var(--ink)' }}>
        <h1 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, marginBottom: '1rem' }}>Proyek Tidak Ditemukan</h1>
        <Link href="/#projects" style={{ color: 'var(--accent)', textDecoration: 'underline', fontFamily: 'var(--f-code)' }}> Kembali ke Portofolio</Link>
      </div>
    )
  }

  return (
    <>
      <StarsCanvas />
      <CustomCursor />

      <main style={{ minHeight: '100vh', background: 'var(--void)', color: 'var(--ink)', padding: '4rem 1.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Back Navigation Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '3rem' }}
          >
            <Link 
              href="/#projects" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--ink-2)', 
                textDecoration: 'none', 
                fontFamily: 'var(--f-code)', 
                fontSize: '13px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '8px 16px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.2s',
                cursor: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--ink)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'var(--ink-2)';
              }}
            >
              <span>←</span> Kembali ke Portofolio
            </Link>
          </motion.div>

          {/* Header Section */}
          <div style={{ marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--f-code)', color: 'var(--accent)', fontSize: '14px', letterSpacing: '0.1em' }}>PROJECT {project.num}</span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--ink-3)' }}></span>
                <span style={{ fontFamily: 'var(--f-code)', color: 'var(--ink-3)', fontSize: '13px' }}>{project.year}</span>
              </div>
              
              <h1 style={{ 
                fontFamily: 'var(--f-display)', 
                fontWeight: 800, 
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                color: 'var(--ink)'
              }}>
                {project.title}
              </h1>
              
              <p style={{ 
                fontFamily: 'var(--f-display)', 
                fontWeight: 300, 
                fontSize: '1.15rem', 
                lineHeight: 1.6, 
                color: 'var(--ink-2)',
                maxWidth: '750px' 
              }}>
                {project.desc}
              </p>
            </motion.div>
          </div>

          {/* Grid Layout for Gallery & Details */}
          <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
            
            {/* LEFT COLUMN: Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Main Active Image Display */}
              <div style={{ 
                width: '100%', 
                aspectRatio: '19 / 9',
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
                background: 'rgba(255,255,255,0.01)'
              }}>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImageIndex}
                    src={project.images[activeImageIndex]} 
                    alt={`${project.title} Screen ${activeImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails Row */}
              <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                {project.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.04 }}
                    style={{ 
                      width: '90px', 
                      height: '60px', 
                      borderRadius: '6px', 
                      overflow: 'hidden', 
                      border: `2px solid ${idx === activeImageIndex ? 'var(--accent)' : 'rgba(255,255,255,0.06)'}`,
                      cursor: 'none',
                      flexShrink: 0,
                      opacity: idx === activeImageIndex ? 1 : 0.6,
                      transition: 'border-color 0.2s, opacity 0.2s'
                    }}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Info & Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              {/* Detailed Long Description */}
              <div>
                <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '-0.01em', color: 'var(--ink)' }}>Tentang Proyek</h3>
                <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink-2)' }}>
                  {project.longDesc}
                </p>
              </div>

              {/* Technology Details */}
              <div>
                <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '-0.01em', color: 'var(--ink)' }}>Spesifikasi Teknologi</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.techDetails.map((detail, idx) => (
                    <li key={idx} style={{ fontFamily: 'var(--f-display)', fontSize: '0.9rem', color: 'var(--ink-2)', display: 'flex', alignItems: 'start', gap: '8px' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '1rem' }}>
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      fontFamily: 'var(--f-code)',
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      background: 'var(--accent)',
                      color: '#fff',
                      padding: '14px 20px',
                      borderRadius: '4px',
                      textAlign: 'center',
                      transition: 'opacity 0.2s',
                      cursor: 'none'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.opacity = '0.85' }}
                    onMouseOut={(e) => { e.currentTarget.style.opacity = '1' }}
                  >
                    Kunjungi Situs
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      fontFamily: 'var(--f-code)',
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--ink-2)',
                      padding: '14px 20px',
                      borderRadius: '4px',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      cursor: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                      e.currentTarget.style.color = 'var(--ink)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = 'var(--ink-2)';
                    }}
                  >
                    Lihat Kode
                  </a>
                )}
              </div>
            </motion.div>

          </div>

          {/* Features Full-Width Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              marginTop: '5rem', 
              paddingTop: '4rem', 
              borderTop: '1px solid var(--rule)'
            }}
          >
            <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.02em', marginBottom: '2rem', color: 'var(--ink)' }}>Fitur & Fungsionalitas Utama</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="features-grid">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    padding: '24px', 
                    borderRadius: '8px', 
                    background: 'rgba(255,255,255,0.01)', 
                    border: '1px solid rgba(255,255,255,0.03)',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <span style={{ 
                    fontFamily: 'var(--f-code)', 
                    color: 'var(--accent)', 
                    fontSize: '11px', 
                    display: 'block', 
                    marginBottom: '8px' 
                  }}>
                    FITUR {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <p style={{ fontFamily: 'var(--f-display)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 850px) {
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
        }
      `}} />
    </>
  )
}
