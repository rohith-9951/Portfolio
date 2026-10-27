import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Database, Layout, Atom, Brain, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  Layers: Layers,
  Database: Database,
  Layout: Layout,
  Atom: Atom,
  Brain: Brain,
  Cloud: Cloud
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="section-tag">
          <Cpu size={14} /> Expertise & Technologies
        </div>
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">
          Key technologies, programming languages, and core concepts I specialize in.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
        {portfolioData.skills.map((skill, index) => {
          const IconComp = iconMap[skill.icon] || Code2;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="glass-panel"
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f2fe' }}>
                  <IconComp size={22} />
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', background: 'rgba(255, 255, 255, 0.05)', padding: '4px 10px', borderRadius: '20px' }}>
                  {skill.category}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>{skill.name}</h3>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden', marginTop: '10px' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, #00f2fe, #7f00ff)', borderRadius: '3px' }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
