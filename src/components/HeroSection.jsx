import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send, Code, Award, GraduationCap, Sparkles, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const titles = [
  "Master of Computer Applications (MCA)",
  "Full-Stack Java & Web Developer",
  "Machine Learning & AI Enthusiast"
];

export default function HeroSection({ onOpenResume }) {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '90px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* LEFT Column: Content (Directly under Rohith.dev logo) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '620px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.25)', color: '#00f2fe', fontSize: '0.84rem', fontWeight: 600, marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f2fe', boxShadow: '0 0 10px #00f2fe' }}></span>
              Available for Entry-Level Software & AI Roles
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px', textShadow: '0 4px 30px rgba(7, 9, 14, 0.9)' }}>
              Hi, I'm <br />
              <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>

            <div style={{ height: '36px', display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
              <p style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)', color: '#94a3b8', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                {titles[titleIdx]}
              </p>
            </div>

            <p style={{ fontSize: '1.02rem', color: '#cbd5e1', maxWidth: '580px', marginBottom: '32px', lineHeight: 1.75 }}>
              {portfolioData.personal.objective}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
              <a href="#projects" className="btn-primary">
                Explore Work <ArrowRight size={18} />
              </a>
              <button onClick={onOpenResume} className="btn-outline">
                <Download size={18} /> Resume CV
              </button>
              <a href="#contact" className="btn-outline">
                <Send size={18} /> Contact Me
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <div className="glass-panel" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <GraduationCap style={{ color: '#00f2fe' }} size={22} />
                <div>
                  <h5 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0, color: '#fff' }}>MCA 70%</h5>
                  <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>RV Institute (2025)</p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Code style={{ color: '#4facfe' }} size={22} />
                <div>
                  <h5 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0, color: '#fff' }}>Core Stack</h5>
                  <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>Java, SQL, Python, React</p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Award style={{ color: '#7f00ff' }} size={22} />
                <div>
                  <h5 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0, color: '#fff' }}>Certified</h5>
                  <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0 }}>Java & AWS Cloud</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT Column: Dynamic Floating 3D Profile Frame (Moved UP to align with title) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
            whileHover={{ scale: 1.04 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '-60px' }}
          >
            {/* Pulsating Glowing Aura */}
            <div
              style={{
                position: 'relative',
                width: 'min(370px, 80vw)',
                aspectRatio: '1/1',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.5), rgba(127, 0, 255, 0.5))',
                padding: '4px',
                boxShadow: '0 0 60px rgba(0, 242, 254, 0.35)',
                transition: 'box-shadow 0.3s'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#090d16',
                  position: 'relative'
                }}
              >
                <img
                  src="/Profile1.png"
                  alt="Chinthaginjala Venkata Rohith"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '-15px',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderColor: 'rgba(0, 242, 254, 0.4)',
                  zIndex: 2,
                  boxShadow: '0 4px 20px rgba(0, 242, 254, 0.25)'
                }}
              >
                <Sparkles size={16} style={{ color: '#00f2fe' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>MCA Graduate</span>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-panel"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '-15px',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderColor: 'rgba(127, 0, 255, 0.4)',
                  zIndex: 2,
                  boxShadow: '0 4px 20px rgba(127, 0, 255, 0.25)'
                }}
              >
                <Brain size={16} style={{ color: '#00f2fe' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>AI & ML Specialist</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
