# Rohith 3D React Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an enhanced, glossy, animated, 3D developer portfolio for Chinthaginjala Venkata Rohith using React.js, Vite, Three.js, Framer Motion, and custom glassmorphism styling, fully verified locally and Vercel-ready.

**Architecture:** A single-page React app powered by Vite. Background 3D animations are handled by Three.js (`@react-three/fiber` & `@react-three/drei`). UI components use Framer Motion for scroll/hover animations and custom CSS blur/glow glassmorphism styles.

**Tech Stack:** React 18, Vite, Three.js, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `lucide-react`, `canvas-confetti`.

## Global Constraints
- Full Name: Chinthaginjala Venkata Rohith
- Email: ch.venkatarohith9951@gmail.com
- Phone: +91 9951926332
- Location: Hyderabad, India
- Degree: MCA from RV Institute of Technology (2025, 70%)
- Featured Project: A Multi perspective Fraud Detection Method for Multi Participant Ecommerce Transactions
- Responsive layout supporting desktop, tablet, and mobile screens.

---

### Task 1: Initialize Project & Setup Dependencies

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/data/portfolioData.js`

**Interfaces:**
- Consumes: None
- Produces: `portfolioData` object containing resume data exported from `src/data/portfolioData.js`.

- [ ] **Step 1: Create package.json with dependencies**

```json
{
  "name": "rohith-3d-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^9.100.0",
    "@react-three/fiber": "^8.16.0",
    "canvas-confetti": "^1.9.4",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.162.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.6"
  }
}
```

- [ ] **Step 2: Create vite.config.js**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
```

- [ ] **Step 3: Create index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chinthaginjala Venkata Rohith | 3D Portfolio</title>
    <meta name="description" content="Portfolio of Chinthaginjala Venkata Rohith - MCA Graduate, Java & Web Developer, ML Enthusiast." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Create portfolioData.js**

```js
export const portfolioData = {
  personal: {
    name: "Chinthaginjala Venkata Rohith",
    title: "MCA Graduate & Full-Stack Java / Web Developer",
    email: "ch.venkatarohith9951@gmail.com",
    phone: "+91 9951926332",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/chinthaginjala-venkata-rohith/",
    github: "https://github.com/rohith-9951",
    objective: "Motivated MCA graduate seeking an entry-level position in a reputable organization where I can apply my programming knowledge in Java, SQL, Machine Learning, and Web Technologies while continuously learning new technologies and contributing to the growth of the company.",
    resumeUrl: "/Rohith_CV.pdf"
  },
  skills: [
    { name: "Java", category: "Languages & Core", level: 90, icon: "Code2" },
    { name: "Object-Oriented Programming (OOP)", category: "Languages & Core", level: 92, icon: "Cpu" },
    { name: "Java Collections", category: "Languages & Core", level: 88, icon: "Layers" },
    { name: "SQL", category: "Database", level: 85, icon: "Database" },
    { name: "HTML5 & CSS3", category: "Web Technologies", level: 90, icon: "Layout" },
    { name: "JavaScript & React.js", category: "Web Technologies", level: 85, icon: "Atom" },
    { name: "Python & Machine Learning", category: "Data & ML", level: 80, icon: "Brain" },
    { name: "AWS Cloud Practitioner", category: "Cloud & Tools", level: 75, icon: "Cloud" }
  ],
  projects: [
    {
      id: "fraud-detection",
      title: "Multi-Perspective Fraud Detection for E-Commerce",
      category: "Machine Learning & Security",
      technologies: ["Python", "Machine Learning", "NLP", "Data Analysis", "SQL"],
      summary: "Developed a multi-perspective fraud detection system for multi-participant e-commerce transactions using machine learning algorithms and NLP signal extraction.",
      highlights: [
        "Applied Natural Language Processing (NLP) to extract signals from unstructured text transaction details.",
        "Implemented real-time data analysis techniques to detect fraudulent patterns and suspicious activities.",
        "Architected scalable system pipeline capable of analyzing large marketplace datasets."
      ],
      link: "#",
      github: "#"
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "RV Institute of Technology, Guntur",
      year: "2025",
      score: "70%"
    },
    {
      degree: "Bachelor of Science (B.Sc - Computers)",
      institution: "Sri Nagarjuna Degree College, Ongole",
      year: "2022",
      score: "65%"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Chaitanya Bharathi Junior College, Chimakurthy",
      year: "2019",
      score: "6.8 Grade"
    },
    {
      degree: "SSC",
      institution: "Vidya Nikethan High School, Chimakurthy",
      year: "2017",
      score: "7.5 Grade"
    }
  ],
  certifications: [
    { title: "Java Training (Core Java, OOP)", issuer: "Comprehensive Java Certification Program" },
    { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)" }
  ]
};
```

---

### Task 2: Create CSS Design System & Global Styles

**Files:**
- Create: `src/index.css`
- Create: `src/main.jsx`

- [ ] **Step 1: Write index.css with Obsidian Dark Glassmorphism variables and animations**

```css
:root {
  --bg-dark: #07090e;
  --bg-card: rgba(15, 23, 42, 0.65);
  --bg-card-hover: rgba(30, 41, 59, 0.8);
  --border-glass: rgba(255, 255, 255, 0.1);
  --border-glow: rgba(0, 242, 254, 0.3);
  --accent-cyan: #00f2fe;
  --accent-violet: #4facfe;
  --accent-purple: #7f00ff;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-sans);
  overflow-x: hidden;
  line-height: 1.6;
}

.glass-panel {
  background: var(--bg-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-glass);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-panel:hover {
  border-color: var(--border-glow);
  box-shadow: 0 12px 40px 0 rgba(0, 242, 254, 0.15);
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-violet), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-violet));
  color: #07090e;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 242, 254, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 12px;
  border: 1px solid var(--border-glass);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-outline:hover {
  border-color: var(--accent-cyan);
  background: rgba(0, 242, 254, 0.05);
  transform: translateY(-2px);
}
```

- [ ] **Step 2: Create main.jsx**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Task 3: Build 3D WebGL Background Canvas Component

**Files:**
- Create: `src/components/Canvas3D.jsx`

- [ ] **Step 1: Write Canvas3D component with WebGL particle mesh and floating geometric shape**

```jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'three/examples/jsm/math/MeshSurfaceSampler.js';

function ParticleField(props) {
  const ref = useRef();
  // Generate 2000 points inside sphere
  const sphere = React.useMemo(() => {
    const coords = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 2.5;
      const sinPhi = Math.sin(phi);
      coords[i * 3] = r * sinPhi * Math.cos(theta);
      coords[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      coords[i * 3 + 2] = r * Math.cos(phi);
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingTorusKnot() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={[1.8, 0, -1]}>
      <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />
      <meshStandardMaterial
        color="#7f00ff"
        wireframe
        emissive="#00f2fe"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Canvas3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ParticleField />
        <FloatingTorusKnot />
      </Canvas>
    </div>
  );
}
```

---

### Task 4: Build Navbar & Hero Section

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/HeroSection.jsx`

- [ ] **Step 1: Build Navbar component with brand, links, and Resume Modal action**

```jsx
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

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
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
```

- [ ] **Step 2: Build HeroSection component**

```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send, Code, Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const titles = [
  "Master of Computer Applications (MCA)",
  "Full-Stack Java & Web Developer",
  "Machine Learning & SQL Enthusiast"
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
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="badge-tag"
        >
          <span className="pulse-dot"></span> Available for Hiring & Software Roles
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle-wrapper"
        >
          <p className="hero-subtitle">{titles[titleIdx]}</p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-description"
        >
          {portfolioData.personal.objective}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-actions"
        >
          <a href="#projects" className="btn-primary">
            Explore Work <ArrowRight size={18} />
          </a>
          <button onClick={onOpenResume} className="btn-outline">
            <Download size={18} /> Resume CV
          </button>
          <a href="#contact" className="btn-outline">
            <Send size={18} /> Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="hero-stats"
        >
          <div className="stat-card glass-panel">
            <GraduationCap className="stat-icon" size={24} />
            <div>
              <h4>MCA Graduate</h4>
              <p>RV Institute (70%)</p>
            </div>
          </div>
          <div className="stat-card glass-panel">
            <Code className="stat-icon" size={24} />
            <div>
              <h4>Core Stack</h4>
              <p>Java, SQL, React, ML</p>
            </div>
          </div>
          <div className="stat-card glass-panel">
            <Award className="stat-icon" size={24} />
            <div>
              <h4>Certifications</h4>
              <p>Java OOP & AWS Cloud</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 5: Build About, Skills, Projects, Education, and Contact Sections

**Files:**
- Create: `src/components/AboutSection.jsx`
- Create: `src/components/SkillsSection.jsx`
- Create: `src/components/ProjectsSection.jsx`
- Create: `src/components/EducationSection.jsx`
- Create: `src/components/ContactSection.jsx`
- Create: `src/components/ResumeModal.jsx`
- Create: `src/App.jsx`

- [ ] **Step 1: Write AboutSection.jsx**
- [ ] **Step 2: Write SkillsSection.jsx**
- [ ] **Step 3: Write ProjectsSection.jsx with interactive Fraud Detection modal**
- [ ] **Step 4: Write EducationSection.jsx with timeline and certificates**
- [ ] **Step 5: Write ContactSection.jsx with interactive form and resume viewer trigger**
- [ ] **Step 6: Write ResumeModal.jsx with embedded CV view and download link**
- [ ] **Step 7: Assemble everything in App.jsx**

---

### Task 6: Build Verification & Vercel Build Testing

- [ ] **Step 1: Run local development check with Vite (`npm run dev`)**
- [ ] **Step 2: Run production build check (`npm run build`)**
- [ ] **Step 3: Verify zero errors and 60fps performance**
