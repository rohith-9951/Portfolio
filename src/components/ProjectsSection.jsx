import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, X, Check, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <FolderGit2 size={14} /> Academic & Practical Work
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Project</span>
        </h2>
        <p className="section-subtitle">
          In-depth project showcase highlighting machine learning, natural language processing, and scalable data analysis.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel gradient-border"
            style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ padding: '6px 14px', borderRadius: '20px', background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe', fontSize: '0.85rem', fontWeight: 600 }}>
                {project.category}
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm" aria-label="GitHub Repository">
                  <Github size={16} /> GitHub
                </a>
                <button onClick={() => setActiveModal(project)} className="btn-primary btn-sm">
                  <Sparkles size={16} /> Deep Dive Modal
                </button>
              </div>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc' }}>
              {project.title}
            </h3>

            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {project.summary}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={18} style={{ color: '#00f2fe', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{highlight}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#00f2fe', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel"
              style={{ maxWidth: '700px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '36px', position: 'relative' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: '#00f2fe' }}>
                <ShieldAlert size={28} />
                <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Project Architecture</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px' }}>
                {activeModal.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.7 }}>
                <p>
                  <strong>System Overview:</strong> This project addresses critical security concerns in multi-participant digital marketplaces by analyzing transaction flows, user interaction histories, and text feedback signals.
                </p>

                <p>
                  <strong>Key Methodology:</strong>
                </p>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Applied Natural Language Processing (NLP) tokenization and sentiment analysis on unstructured transaction notes.</li>
                  <li>Trained machine learning classification models to calculate transaction risk scores in real-time.</li>
                  <li>Structured SQL data schema pipelines capable of handling high-volume concurrent transaction queries.</li>
                </ul>

                <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                  <h4 style={{ color: '#f8fafc', marginBottom: '8px' }}>Technologies Employed</h4>
                  <p style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>{activeModal.technologies.join(' • ')}</p>
                </div>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button onClick={() => setActiveModal(null)} className="btn-outline btn-sm">
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
