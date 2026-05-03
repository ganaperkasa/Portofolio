"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Kasa",
    category: "SaaS · Full Stack",
    year: "2024",
    desc: "Property management platform built for indie landlords. Real-time lease tracking, automated payment reminders, and tenant communication in one clean interface.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "Resend"],
    href: "#",
    color: "#7C3AED",
    colorLight: "#EDE9FE",
  },
  {
    title: "Wandr",
    category: "Mobile Web · API",
    year: "2024",
    desc: "Travel itinerary builder powered by a custom recommendation engine. Offline-first PWA with sync — works when you're somewhere without signal.",
    stack: ["React", "Node.js", "Redis", "Mapbox"],
    href: "#",
    color: "#0891B2",
    colorLight: "#E0F2FE",
  },
  {
    title: "Ledger",
    category: "Fintech · Dashboard",
    year: "2023",
    desc: "Internal financial ops dashboard for an e-commerce startup. Replaced three separate tools. Cut their monthly reporting time from six hours to twenty minutes.",
    stack: ["Vue 3", "FastAPI", "TimescaleDB", "Recharts"],
    href: "#",
    color: "#059669",
    colorLight: "#D1FAE5",
  },
];

const skills = [
  {
    group: "Frontend",
    icon: "◈",
    items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind"],
    color: "#7C3AED",
    bg: "#EDE9FE",
    darkBg: "#2E1065",
  },
  {
    group: "Backend",
    icon: "◎",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    color: "#0891B2",
    bg: "#E0F2FE",
    darkBg: "#082F49",
  },
  {
    group: "Infra",
    icon: "◆",
    items: ["Docker", "Vercel", "AWS", "CI/CD", "Linux"],
    color: "#059669",
    bg: "#D1FAE5",
    darkBg: "#022C22",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Avatar / Profile Photo Component
function ProfilePhoto({ size = 320, dark }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        border: `4px solid ${dark ? "#7C3AED" : "#7C3AED"}`,
        boxShadow: dark
          ? "0 0 0 8px rgba(124,58,237,0.15), 0 32px 64px rgba(0,0,0,0.4)"
          : "0 0 0 8px rgba(124,58,237,0.1), 0 32px 64px rgba(124,58,237,0.2)",
        background: dark
          ? "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)"
          : "linear-gradient(135deg, #ede9fe 0%, #c4b5fd 50%, #a78bfa 100%)",
        flexShrink: 0,
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03) rotate(1deg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) rotate(0deg)";
      }}
      title="Click to upload your photo"
    >
      {/* Silhouette illustration */}
      <svg
        viewBox="0 0 320 320"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={dark ? "#1e1b4b" : "#ede9fe"} />
            <stop offset="100%" stopColor={dark ? "#4c1d95" : "#a78bfa"} />
          </linearGradient>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={dark ? "#6d28d9" : "#7c3aed"} />
            <stop offset="100%" stopColor={dark ? "#4c1d95" : "#5b21b6"} />
          </linearGradient>
          <linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={dark ? "#7c3aed" : "#8b5cf6"} />
            <stop offset="100%" stopColor={dark ? "#6d28d9" : "#7c3aed"} />
          </linearGradient>
        </defs>
        <rect width="320" height="320" fill="url(#bgGrad)" />
        {/* Body */}
        <ellipse cx="160" cy="290" rx="100" ry="60" fill="url(#bodyGrad)" opacity="0.9" />
        <rect x="90" y="220" width="140" height="80" rx="24" fill="url(#bodyGrad)" opacity="0.9" />
        {/* Neck */}
        <rect x="140" y="188" width="40" height="36" rx="8" fill="url(#headGrad)" />
        {/* Head */}
        <ellipse cx="160" cy="160" rx="62" ry="70" fill="url(#headGrad)" />
        {/* Hair */}
        <ellipse cx="160" cy="105" rx="64" ry="28" fill={dark ? "#4c1d95" : "#5b21b6"} />
        <ellipse cx="110" cy="135" rx="20" ry="36" fill={dark ? "#4c1d95" : "#5b21b6"} />
        <ellipse cx="210" cy="135" rx="20" ry="36" fill={dark ? "#4c1d95" : "#5b21b6"} />
        {/* Eyes */}
        <ellipse cx="140" cy="155" rx="9" ry="10" fill={dark ? "#1e1b4b" : "#312e81"} />
        <ellipse cx="180" cy="155" rx="9" ry="10" fill={dark ? "#1e1b4b" : "#312e81"} />
        <circle cx="143" cy="152" r="3" fill="white" opacity="0.8" />
        <circle cx="183" cy="152" r="3" fill="white" opacity="0.8" />
        {/* Smile */}
        <path
          d="M 143 178 Q 160 190 177 178"
          stroke={dark ? "#1e1b4b" : "#312e81"}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Upload hint overlay */}
        <rect
          x="0"
          y="250"
          width="320"
          height="70"
          fill={dark ? "rgba(30,27,75,0.75)" : "rgba(237,233,254,0.75)"}
        />
        <text
          x="160"
          y="282"
          textAnchor="middle"
          fontSize="12"
          fill={dark ? "#a78bfa" : "#7c3aed"}
          fontFamily="sans-serif"
          fontWeight="600"
        >
          📷 Upload your photo
        </text>
        <text
          x="160"
          y="300"
          textAnchor="middle"
          fontSize="10"
          fill={dark ? "#7c3aed" : "#6d28d9"}
          fontFamily="sans-serif"
          opacity="0.8"
        >
          Replace this placeholder
        </text>
      </svg>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme vars
  const t = {
    bg: dark ? "#0a0a0f" : "#f9f7ff",
    bgWarm: dark ? "#111118" : "#f2efff",
    bgCard: dark ? "#13131d" : "#ffffff",
    ink: dark ? "#f0eeff" : "#1a1025",
    inkMuted: dark ? "#8b7db8" : "#5e4d7a",
    inkFaint: dark ? "#4a3f6b" : "#b5aad0",
    accent: "#7C3AED",
    accentLight: dark ? "#a78bfa" : "#7C3AED",
    line: dark ? "#1e1a2e" : "#e8e2f8",
    surface: dark ? "#16162a" : "#ffffff",
    navBg: dark
      ? "rgba(10,10,15,0.92)"
      : "rgba(249,247,255,0.92)",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          background: ${t.bg};
          color: ${t.ink};
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 300;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          transition: background 0.4s ease, color 0.4s ease;
        }

        ::selection { background: ${t.accent}; color: #fff; }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 48px;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          transition: background 0.4s ease, border-color 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .nav.scrolled {
          background: ${t.navBg};
          backdrop-filter: blur(16px);
          border-color: ${t.line};
        }
        .nav-logo {
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: ${t.ink};
          text-decoration: none;
          display: flex; align-items: center; gap: 6px;
        }
        .nav-logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: ${t.accent};
          display: inline-block;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }
        .nav-links { display: flex; gap: 32px; list-style: none; align-items: center; }
        .nav-links a {
          font-size: 13px; font-weight: 500;
          color: ${t.inkMuted}; text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: ${t.accentLight}; }
        .theme-toggle {
          width: 44px; height: 24px; border-radius: 12px;
          background: ${dark ? t.accent : t.line};
          border: none; cursor: pointer; position: relative;
          transition: background 0.3s ease;
          flex-shrink: 0;
        }
        .theme-toggle::after {
          content: '${dark ? "🌙" : "☀️"}';
          position: absolute; top: 1px;
          left: ${dark ? "22px" : "2px"};
          width: 20px; height: 20px;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; line-height: 1;
          transition: left 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 440px;
          align-items: center;
          padding: 100px 48px 80px;
          border-bottom: 1px solid ${t.line};
          position: relative; overflow: hidden;
          gap: 60px;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background: ${
            dark
              ? "radial-gradient(ellipse 60% 80% at 70% 30%, rgba(124,58,237,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(8,145,178,0.08) 0%, transparent 60%)"
              : "radial-gradient(ellipse 60% 80% at 70% 30%, rgba(124,58,237,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(8,145,178,0.06) 0%, transparent 60%)"
          };
          pointer-events: none;
        }
        .hero-content { position: relative; z-index: 1; }
        .hero-photo-col {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          position: relative; z-index: 1;
        }
        .hero-tag {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: ${t.accent}; margin-bottom: 28px;
          display: flex; align-items: center; gap: 10px;
        }
        .hero-tag-badge {
          background: ${dark ? "rgba(124,58,237,0.18)" : "rgba(124,58,237,0.1)"};
          border: 1px solid ${dark ? "rgba(124,58,237,0.3)" : "rgba(124,58,237,0.2)"};
          color: ${t.accentLight};
          padding: 5px 14px; border-radius: 100px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
          animation: pulse 1.5s ease-in-out infinite;
        }
        .hero-name {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 400; line-height: 0.95;
          letter-spacing: -0.025em;
          color: ${t.ink}; margin-bottom: 28px;
        }
        .hero-name em {
          font-style: italic;
          background: linear-gradient(135deg, ${t.accent} 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-desc {
          max-width: 440px;
          font-size: 17px; line-height: 1.75;
          color: ${t.inkMuted}; font-weight: 300;
          margin-bottom: 40px;
        }
        .hero-cta {
          display: flex; gap: 16px; flex-wrap: wrap; align-items: center;
        }
        .btn-primary {
          background: ${t.accent}; color: white;
          padding: 13px 28px; border-radius: 100px;
          font-size: 14px; font-weight: 500; letter-spacing: 0.02em;
          text-decoration: none; border: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          box-shadow: 0 4px 16px rgba(124,58,237,0.35);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124,58,237,0.45);
          background: #6d28d9;
        }
        .btn-secondary {
          color: ${t.inkMuted}; background: transparent;
          padding: 13px 28px; border-radius: 100px;
          font-size: 14px; font-weight: 500; letter-spacing: 0.02em;
          text-decoration: none;
          border: 1px solid ${t.line};
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-secondary:hover {
          border-color: ${t.accentLight}; color: ${t.accentLight};
          background: ${dark ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.04)"};
        }
        .photo-decoration {
          position: absolute;
          width: 100%; height: 100%;
          pointer-events: none;
        }

        /* Stats */
        .stats-bar {
          background: ${dark ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.04)"};
          border-top: 1px solid ${t.line};
          border-bottom: 1px solid ${t.line};
          padding: 32px 48px;
          display: flex; gap: 0;
          max-width: 100%;
        }
        .stat-item {
          flex: 1; text-align: center;
          border-right: 1px solid ${t.line};
          padding: 0 32px;
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Instrument Serif', serif;
          font-size: 40px; font-weight: 400;
          color: ${t.ink}; line-height: 1;
          margin-bottom: 8px;
        }
        .stat-num span { color: ${t.accent}; }
        .stat-label {
          font-size: 12px; color: ${t.inkMuted};
          letter-spacing: 0.06em; text-transform: uppercase;
          font-family: 'DM Mono', monospace;
        }

        /* Section */
        .section { padding: 100px 48px; max-width: 1280px; margin: 0 auto; }
        .section-divider { border-top: 1px solid ${t.line}; }

        .section-label {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: ${t.inkFaint}; margin-bottom: 56px;
          display: flex; align-items: center; gap: 12px;
        }
        .section-label-num {
          font-size: 10px; color: ${t.accent};
          background: ${dark ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.08)"};
          padding: 2px 8px; border-radius: 4px;
        }

        /* Projects */
        .project-list { display: flex; flex-direction: column; }
        .project-item {
          display: grid; grid-template-columns: 1fr 1.2fr;
          gap: 0; padding: 56px 0;
          border-top: 1px solid ${t.line};
          cursor: pointer;
          position: relative;
          transition: background 0.3s ease;
          border-radius: 0;
        }
        .project-item:last-child { border-bottom: 1px solid ${t.line}; }
        .project-item::before {
          content: '';
          position: absolute; left: -48px; right: -48px; top: 0; bottom: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-left { padding-right: 80px; position: relative; z-index: 1; }
        .project-num {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: ${t.inkFaint}; margin-bottom: 20px;
          letter-spacing: 0.06em;
        }
        .project-title {
          font-family: 'Instrument Serif', serif; font-size: 40px; font-weight: 400;
          line-height: 1.1; color: ${t.ink}; margin-bottom: 10px;
          transition: color 0.2s;
        }
        .project-category {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: ${t.inkFaint}; letter-spacing: 0.06em;
        }
        .project-right { padding-top: 6px; position: relative; z-index: 1; }
        .project-desc {
          font-size: 15px; line-height: 1.8;
          color: ${t.inkMuted}; margin-bottom: 28px; font-weight: 300;
        }
        .project-stack { display: flex; gap: 8px; flex-wrap: wrap; }
        .tag {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.06em; padding: 5px 12px;
          border-radius: 6px;
          color: ${t.inkMuted};
          background: ${dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"};
          border: 1px solid ${t.line};
          transition: all 0.2s;
        }
        .project-arrow {
          position: absolute; right: 0; top: 56px;
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; color: ${t.inkFaint};
          border: 1px solid ${t.line};
          transition: transform 0.3s ease, color 0.2s, border-color 0.2s, background 0.2s;
          background: transparent;
        }

        /* About */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .about-heading {
          font-family: 'Instrument Serif', serif; font-size: clamp(32px, 3.5vw, 52px);
          font-weight: 400; line-height: 1.15; letter-spacing: -0.01em;
        }
        .about-heading em {
          font-style: italic;
          background: linear-gradient(135deg, ${t.accent} 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-text {
          font-size: 16px; line-height: 1.85; color: ${t.inkMuted};
          font-weight: 300; margin-bottom: 20px;
        }
        .about-text:last-child { margin-bottom: 0; }

        /* Skills */
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .skill-card {
          background: ${t.bgCard};
          border: 1px solid ${t.line};
          border-radius: 20px;
          padding: 36px 32px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative; overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 20px 20px 0 0;
        }
        .skill-card:hover { transform: translateY(-4px); }
        .skill-icon {
          font-size: 24px; margin-bottom: 16px; display: block;
        }
        .skill-group-name {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 20px;
        }
        .skill-items { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .skill-items li {
          font-size: 14px; color: ${t.inkMuted}; font-weight: 400;
          display: flex; align-items: center; gap: 10px;
        }
        .skill-dot {
          width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        }

        /* Contact */
        .contact-box {
          background: ${
            dark
              ? "linear-gradient(135deg, #13131d 0%, #1a1030 100%)"
              : "linear-gradient(135deg, #f2efff 0%, #ede9fe 100%)"
          };
          border: 1px solid ${dark ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.15)"};
          border-radius: 28px;
          padding: 80px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .contact-box::before {
          content: '';
          position: absolute; top: -100px; right: -100px;
          width: 300px; height: 300px; border-radius: 50%;
          background: ${dark ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.06)"};
          pointer-events: none;
        }
        .contact-heading {
          font-family: 'Instrument Serif', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 400; line-height: 1;
          letter-spacing: -0.02em; margin-bottom: 20px;
          color: ${t.ink};
        }
        .contact-heading em {
          font-style: italic;
          background: linear-gradient(135deg, ${t.accent} 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-sub {
          font-size: 17px; color: ${t.inkMuted}; margin-bottom: 48px;
          font-weight: 300;
        }
        .contact-links {
          display: flex; gap: 16px; flex-wrap: wrap;
          justify-content: center; align-items: center;
        }
        .contact-link {
          font-family: 'DM Mono', monospace; font-size: 13px;
          letter-spacing: 0.04em; color: ${t.inkMuted};
          text-decoration: none; padding: 13px 24px;
          border: 1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"};
          border-radius: 100px;
          background: ${dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)"};
          transition: all 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .contact-link:hover {
          color: ${t.ink};
          border-color: ${t.accentLight};
          background: ${dark ? "rgba(124,58,237,0.12)" : "rgba(255,255,255,1)"};
          transform: translateY(-2px);
          box-shadow: 0 4px 16px ${dark ? "rgba(124,58,237,0.2)" : "rgba(0,0,0,0.08)"};
        }
        .contact-link.primary {
          background: ${t.accent}; color: white;
          border-color: ${t.accent};
          box-shadow: 0 4px 16px rgba(124,58,237,0.35);
        }
        .contact-link.primary:hover {
          background: #6d28d9; border-color: #6d28d9;
          box-shadow: 0 8px 24px rgba(124,58,237,0.45);
        }

        /* Footer */
        footer {
          padding: 28px 48px;
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px solid ${t.line};
        }
        footer p {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: ${t.inkFaint}; letter-spacing: 0.04em;
        }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: ${t.inkFaint}; text-decoration: none; letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: ${t.accentLight}; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; padding: 100px 24px 64px; }
          .hero-photo-col { display: none; }
          .nav { padding: 0 24px; }
          .nav-links li:not(:last-child) { display: none; }
          .section { padding: 72px 24px; }
          .project-item { grid-template-columns: 1fr; gap: 24px; }
          .project-left { padding-right: 0; }
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .skills-grid { grid-template-columns: 1fr; }
          .stats-bar { padding: 24px; gap: 0; }
          .stat-item { padding: 0 16px; }
          .contact-box { padding: 48px 24px; }
          footer { flex-direction: column; gap: 12px; text-align: center; }
          .footer-links { justify-content: center; }
        }
      `}</style>

      {/* Nav */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          <span className="nav-logo-dot" />
          rf.dev
        </a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
            />
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div style={{ opacity: 0, animation: "fadeUp 0.9s ease 0.1s forwards" }}>
            <div className="hero-tag">
              <span className="hero-tag-badge">
                <span className="hero-tag-dot" />
                Available for work
              </span>
            </div>
          </div>
          <div style={{ opacity: 0, animation: "fadeUp 0.9s ease 0.25s forwards" }}>
            <h1 className="hero-name">
              Muhamad Saifulloh Bahroin<br /><em>Gana Perkasa</em>
            </h1>
          </div>
          <div style={{ opacity: 0, animation: "fadeUp 0.9s ease 0.4s forwards" }}>
            <p className="hero-desc">
              Full stack developer building web products —{" "}
              from database to deployment. I care about code that's maintainable,
              interfaces that feel natural, and systems that hold up under pressure.
            </p>
          </div>
          <div style={{ opacity: 0, animation: "fadeUp 0.9s ease 0.55s forwards" }}>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">
                Get in touch ↗
              </a>
              <a href="#work" className="btn-secondary">
                View work
              </a>
            </div>
          </div>
        </div>

        {/* Photo column */}
        <div className="hero-photo-col" style={{ opacity: 0, animation: "fadeUp 0.9s ease 0.3s forwards" }}>
          <div style={{ position: "relative" }}>
            {/* Decorative ring */}
            <div style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              border: `1px dashed ${dark ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.15)"}`,
              animation: "spin 30s linear infinite",
            }} />
            <div style={{
              position: "absolute",
              inset: -40,
              borderRadius: "50%",
              border: `1px dashed ${dark ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.08)"}`,
              animation: "spin 50s linear infinite reverse",
            }} />
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            <ProfilePhoto size={300} dark={dark} />
            {/* Floating badge */}
            <div style={{
              position: "absolute",
              bottom: -10,
              right: -20,
              background: dark ? "#1a1030" : "#ffffff",
              border: `1px solid ${t.line}`,
              borderRadius: 16,
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: dark
                ? "0 8px 32px rgba(0,0,0,0.4)"
                : "0 8px 32px rgba(124,58,237,0.15)",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>⚡</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: t.ink, lineHeight: 1.2 }}>5+ Years</div>
                <div style={{ fontSize: 11, color: t.inkMuted, fontFamily: "'DM Mono', monospace" }}>Experience</div>
              </div>
            </div>
            {/* Tech badge */}
            <div style={{
              position: "absolute",
              top: 20,
              left: -30,
              background: dark ? "#1a1030" : "#ffffff",
              border: `1px solid ${t.line}`,
              borderRadius: 12,
              padding: "8px 14px",
              fontSize: 12,
              color: t.inkMuted,
              fontFamily: "'DM Mono', monospace",
              boxShadow: dark
                ? "0 4px 16px rgba(0,0,0,0.3)"
                : "0 4px 16px rgba(0,0,0,0.08)",
              letterSpacing: "0.04em",
            }}>
              Based in Malang, ID 🇮🇩
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        {[
          { num: "12+", label: "Projects Shipped" },
          { num: "5", label: "Years Building" },
          { num: "3", label: "Startups Helped" },
          { num: "100%", label: "Remote Ready" },
        ].map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08} className="stat-item">
            <div className="stat-num">
              {s.num.replace("+", "")}<span>{s.num.includes("+") ? "+" : s.num.includes("%") ? "" : ""}</span>
            </div>
            <div className="stat-label">{s.label}</div>
          </FadeIn>
        ))}
      </div>

      {/* Work */}
      <div id="work" style={{ borderBottom: `1px solid ${t.line}` }}>
        <div className="section">
          <FadeIn>
            <div className="section-label">
              <span className="section-label-num">01</span>
              Selected Work
            </div>
          </FadeIn>
          <div className="project-list">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="project-item"
                onMouseEnter={(e) => {
                  setHovered(i);
                  const el = e.currentTarget;
                  el.querySelector(".project-title").style.color = p.color;
                  el.querySelector(".project-arrow").style.background = p.color;
                  el.querySelector(".project-arrow").style.color = "white";
                  el.querySelector(".project-arrow").style.borderColor = p.color;
                  el.querySelector(".project-arrow").style.transform = "rotate(-45deg)";
                  el.querySelectorAll(".tag").forEach(t2 => {
                    t2.style.borderColor = p.color;
                    t2.style.color = p.color;
                    t2.style.background = p.colorLight + (dark ? "22" : "22");
                  });
                }}
                onMouseLeave={(e) => {
                  setHovered(null);
                  const el = e.currentTarget;
                  el.querySelector(".project-title").style.color = t.ink;
                  el.querySelector(".project-arrow").style.background = "transparent";
                  el.querySelector(".project-arrow").style.color = t.inkFaint;
                  el.querySelector(".project-arrow").style.borderColor = t.line;
                  el.querySelector(".project-arrow").style.transform = "rotate(0deg)";
                  el.querySelectorAll(".tag").forEach(t2 => {
                    t2.style.borderColor = t.line;
                    t2.style.color = t.inkMuted;
                    t2.style.background = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
                  });
                }}
              >
                <FadeIn delay={i * 0.08} className="project-left">
                  <div className="project-num" style={{ color: p.color, opacity: 0.7 }}>0{i + 1} — {p.year}</div>
                  <h2 className="project-title" style={{ transition: "color 0.25s" }}>{p.title}</h2>
                  <div className="project-category">{p.category}</div>
                </FadeIn>
                <FadeIn delay={i * 0.08 + 0.1} className="project-right">
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-stack">
                    {p.stack.map((s2) => (
                      <span key={s2} className="tag">{s2}</span>
                    ))}
                  </div>
                </FadeIn>
                <div className="project-arrow" style={{ transition: "all 0.3s ease" }}>↗</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <div style={{ borderBottom: `1px solid ${t.line}` }}>
        <div id="about" className="section">
          <FadeIn>
            <div className="section-label">
              <span className="section-label-num">02</span>
              About
            </div>
          </FadeIn>
          <div className="about-grid">
            <FadeIn delay={0.1}>
              <h2 className="about-heading">
                I write code<br />for people,<br /><em>not machines.</em>
              </h2>
              {/* Mini photo for about section */}
              <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.accent} 0%, #a78bfa 100%)`,
                  border: `2px solid ${t.accent}`,
                  overflow: "hidden", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                }}>
                  👨‍💻
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: t.ink }}>Rizky Fauzan</div>
                  <div style={{ fontSize: 12, color: t.inkMuted, fontFamily: "'DM Mono', monospace" }}>Full Stack Developer</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="about-text">
                Based in Malang. I've been building for the web for five years — mostly startups
                and small product teams where you have to care about everything from schema design
                to button states.
              </p>
              <p className="about-text">
                I'm most comfortable in the gap between frontend and backend: the API layer,
                the data model, the thing that makes the UI fast or slow. I write TypeScript by
                default, reach for Python when it fits, and think carefully before adding dependencies.
              </p>
              <p className="about-text">
                Outside of work: bad at chess, decent at cooking, still learning guitar.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ borderBottom: `1px solid ${t.line}` }}>
        <div className="section">
          <FadeIn>
            <div className="section-label">
              <span className="section-label-num">03</span>
              Skills & Stack
            </div>
          </FadeIn>
          <div className="skills-grid">
            {skills.map((sg, i) => (
              <FadeIn key={sg.group} delay={i * 0.1}>
                <div
                  className="skill-card"
                  style={{
                    "--card-color": sg.color,
                    boxShadow: dark
                      ? `0 0 0 0 transparent`
                      : `0 1px 3px rgba(0,0,0,0.06)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 12px 40px ${sg.color}22`;
                    e.currentTarget.style.borderColor = sg.color + "44";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = dark ? "none" : "0 1px 3px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = t.line;
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    borderRadius: "20px 20px 0 0",
                    background: `linear-gradient(90deg, ${sg.color} 0%, ${sg.color}88 100%)`,
                  }} />
                  <span className="skill-icon" style={{ color: sg.color }}>{sg.icon}</span>
                  <div className="skill-group-name" style={{ color: sg.color }}>{sg.group}</div>
                  <ul className="skill-items">
                    {sg.items.map((s2) => (
                      <li key={s2}>
                        <span className="skill-dot" style={{ background: sg.color + "66" }} />
                        {s2}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="section">
        <FadeIn>
          <div className="section-label">
            <span className="section-label-num">04</span>
            Get In Touch
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="contact-box">
            <h2 className="contact-heading">
              Let's build<br /><em>something great.</em>
            </h2>
            <p className="contact-sub">
              Open to freelance projects, full-time roles, and interesting conversations.
            </p>
            <div className="contact-links">
              <a href="mailto:hello@rfauzan.dev" className="contact-link primary">
                hello@rfauzan.dev ↗
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                LinkedIn
              </a>
              <a href="/cv.pdf" className="contact-link">
                Download CV
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Rizky Fauzan · Malang, ID</p>
        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p>Built with Next.js</p>
      </footer>
    </>
  );
}