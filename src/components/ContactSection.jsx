import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <Mail size={14} /> Get In Touch
        </div>
        <h2 className="section-title">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Have an open software opportunity or project? Reach out directly!
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Contact info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <motion.a
            href={`mailto:${portfolioData.personal.email}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-panel"
            style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f2fe' }}>
              <Mail size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>Email</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{portfolioData.personal.email}</p>
            </div>
          </motion.a>

          <motion.a
            href={`tel:${portfolioData.personal.phone}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="glass-panel"
            style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(79, 172, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4facfe' }}>
              <Phone size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>Phone / Mobile</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{portfolioData.personal.phone}</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(127, 0, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7f00ff' }}>
              <MapPin size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>Location</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{portfolioData.personal.location}</p>
            </div>
          </motion.div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>

        {/* Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-panel gradient-border"
          style={{ padding: '36px' }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle2 size={48} style={{ color: '#00f2fe', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Message Sent!</h3>
              <p style={{ color: '#94a3b8' }}>Thank you for reaching out, Rohith will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '4px' }}>Send a Message</h3>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Your Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Rohith, I'd like to discuss..."
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <footer style={{ marginTop: '100px', paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Built with React, Vite & Three.js WebGL graphics.</p>
      </footer>
    </section>
  );
}
