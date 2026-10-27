import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="brand">
          <Sparkles className="icon-glow" size={24} />
          <span>Rohith<span className="dot">.dev</span></span>
        </a>

        <div className="nav-links desktop">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <button onClick={onOpenResume} className="btn-primary btn-sm">
            <FileText size={16} /> Resume
          </button>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setMobileOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          <button onClick={() => { setMobileOpen(false); onOpenResume(); }} className="btn-primary">
            <FileText size={16} /> View Resume
          </button>
        </div>
      )}
    </nav>
  );
}
