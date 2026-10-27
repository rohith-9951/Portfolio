import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, BookOpen, Target, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <User size={14} /> Profile & Background
        </div>
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          A dedicated MCA graduate passionate about building robust software solutions, clean code architectures, and machine learning models.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
        
        {/* Photo Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel gradient-border"
          style={{ padding: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}
        >
          <div style={{ width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #00f2fe', boxShadow: '0 0 30px rgba(0, 242, 254, 0.3)', marginBottom: '20px' }}>
            <img src={`${import.meta.env.BASE_URL}Profile1.png`} alt="Rohith" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
            {portfolioData.personal.name}
          </h3>
          <p style={{ color: '#00f2fe', fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px' }}>
            {portfolioData.personal.title}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            <span style={{ padding: '6px 14px', borderRadius: '20px', background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe', fontSize: '0.8rem', fontWeight: 600 }}>
              Hyderabad, India
            </span>
            <span style={{ padding: '6px 14px', borderRadius: '20px', background: 'rgba(127, 0, 255, 0.1)', color: '#7f00ff', fontSize: '0.8rem', fontWeight: 600 }}>
              MCA (2025)
            </span>
          </div>
        </motion.div>

        {/* Vision & Details Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ padding: '36px' }}
        >
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Target className="icon-glow" size={24} /> Professional Summary
          </h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '24px' }}>
            {portfolioData.personal.objective}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
              <MapPin size={18} style={{ color: '#00f2fe' }} />
              <span><strong>Location:</strong> {portfolioData.personal.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
              <Mail size={18} style={{ color: '#4facfe' }} />
              <span><strong>Email:</strong> {portfolioData.personal.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
              <Phone size={18} style={{ color: '#7f00ff' }} />
              <span><strong>Phone:</strong> {portfolioData.personal.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
              <BookOpen size={18} style={{ color: '#00f2fe' }} />
              <span><strong>Degree:</strong> MCA (70%)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
