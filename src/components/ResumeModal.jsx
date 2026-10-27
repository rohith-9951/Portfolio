import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="glass-panel"
          style={{ maxWidth: '900px', width: '100%', height: '85vh', display: 'flex', flexDirection: 'column', padding: '24px', position: 'relative' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText style={{ color: '#00f2fe' }} size={24} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Curriculum Vitae — {portfolioData.personal.name}</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href={`${import.meta.env.BASE_URL}Rohith_CV.pdf`} download="Rohith_CV.pdf" className="btn-primary btn-sm">
                <Download size={16} /> Download PDF
              </a>
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}>
                <X size={24} />
              </button>
            </div>
          </div>

          <div style={{ flex: 1, width: '100%', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
            <iframe 
              src={`${import.meta.env.BASE_URL}Rohith_CV.pdf`} 
              title="Rohith CV Resume"
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
