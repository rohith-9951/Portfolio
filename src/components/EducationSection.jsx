import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <GraduationCap size={14} /> Qualifications & Honors
        </div>
        <h2 className="section-title">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle">
          My academic journey, degree achievements, and verified technical credentials.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        {/* Education Timeline */}
        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <GraduationCap style={{ color: '#00f2fe' }} size={24} /> Academic History
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', paddingLeft: '20px', borderLeft: '2px solid rgba(0, 242, 254, 0.2)' }}>
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel"
                style={{ padding: '20px', position: 'relative' }}
              >
                {/* Timeline node icon */}
                <div style={{ position: 'absolute', left: '-31px', top: '24px', width: '20px', height: '20px', borderRadius: '50%', background: '#00f2fe', boxShadow: '0 0 10px #00f2fe', border: '4px solid #07090e' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.85rem', color: '#00f2fe', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} /> {edu.year}
                  </span>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '8px' }}>{edu.institution}</p>
                <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', background: 'rgba(79, 172, 254, 0.1)', color: '#4facfe', fontSize: '0.85rem', fontWeight: 600 }}>
                  Score: {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Wall */}
        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award style={{ color: '#7f00ff' }} size={24} /> Verified Certifications
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="glass-panel gradient-border"
                style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(127, 0, 255, 0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f2fe', flexShrink: 0 }}>
                  <Award size={30} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>{cert.title}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={15} style={{ color: '#00f2fe' }} /> {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
