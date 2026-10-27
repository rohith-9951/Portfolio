# Design Specification: Chinthaginjala Venkata Rohith - 3D React Portfolio

## 1. Overview
An enhanced, glossy, animated, 3D developer portfolio for **Chinthaginjala Venkata Rohith** built with **React.js**, **Vite**, **Three.js** (`@react-three/fiber`, `@react-three/drei`), **Framer Motion**, and custom obsidian glassmorphism styling. Optimized for 60fps performance and ready for seamless Vercel deployment.

---

## 2. Personal Information & Resume Data
* **Full Name**: Chinthaginjala Venkata Rohith
* **Email**: ch.venkatarohith9951@gmail.com
* **Phone**: +91 9951926332
* **Location**: Hyderabad, India
* **LinkedIn**: https://www.linkedin.com/in/chinthaginjala-venkata-rohith/
* **Career Objective**: Motivated MCA graduate seeking an entry-level position in a reputable organization to apply programming knowledge in Java, SQL, Machine Learning, and Web Technologies while continuously learning and contributing to organizational growth.

### Education History
1. **MCA (Master of Computer Applications)**
   - Institution: RV Institute of Technology, Guntur
   - Year: 2025 | Score: 70%
2. **Bachelor of Science (B.Sc - Computers)**
   - Institution: Sri Nagarjuna Degree College, Ongole
   - Year: 2022 | Score: 65%
3. **Intermediate (MPC)**
   - Institution: Chaitanya Bharathi Junior College, Chimakurthy
   - Year: 2019 | Grade: 6.8
4. **SSC**
   - Institution: Vidya Nikethan High School, Chimakurthy
   - Year: 2017 | Grade: 7.5

### Technical Skills
* **Programming Languages**: Java, Python, JavaScript
* **Core Concepts**: Object-Oriented Programming (OOP), Java Collections, Machine Learning, NLP
* **Databases**: SQL
* **Web Technologies**: HTML5, CSS3, React.js, Vite

### Featured Project
* **Title**: A Multi-Perspective Fraud Detection Method for Multi-Participant E-Commerce Transactions
* **Tech Stack**: Python, Machine Learning, Natural Language Processing (NLP), Data Analysis
* **Highlights**:
  - Engineered a fraud detection system for multi-participant e-commerce transactions using machine learning.
  - Applied NLP to extract signals from unstructured textual data and transaction details.
  - Implemented real-time pattern analysis for suspicious activities on scalable datasets.

### Certifications
1. **Java Training (Core Java, OOP)**
2. **AWS Cloud Practitioner Essentials**

---

## 3. Architecture & Tech Stack

### Core Stack
* **Framework**: React 18 + Vite
* **3D Graphics Engine**: `@react-three/fiber`, `@react-three/drei`, `three`
* **Animations**: `framer-motion`, `canvas-confetti`
* **Icons**: `lucide-react`
* **Styling**: Modern CSS Glassmorphism design system (`index.css` with CSS variables, custom animations, glowing borders, blur backdrops)

---

## 4. Visual & UI Component Structure

### A. Navigation Bar (`Navbar.jsx`)
* Floating glassmorphic header (`backdrop-filter: blur(16px)`).
* Brand logo: `Rohith.dev` with cyan dot glow.
* Nav items: About, Skills, Projects, Education, Certifications, Contact.
* Quick action button: "Resume" (opens embedded CV viewer/modal).

### B. 3D WebGL Canvas (`Canvas3D.jsx`)
* Interactive WebGL scene running smoothly in the background.
* Features interactive floating particle field, ambient cyan/purple lighting, smooth mouse parallax, and orbiting geometric torus knot wireframe.

### C. Hero Section (`HeroSection.jsx`)
* Dynamic animated greeting: "Hi, I'm **Chinthaginjala Venkata Rohith**".
* Typing effect cycling: *MCA Graduate*, *Java & Web Developer*, *Machine Learning Enthusiast*.
* Interactive action buttons: "Explore Work", "Get In Touch", "Download Resume".
* Quick highlight metrics (Degree status, Tech Count, Certifications).

### D. About Me (`AboutSection.jsx`)
* Glassmorphic grid detailing objective statement, core strengths, location, and educational status.
* Interactive badges for problem solving, clean code, and continuous learning.

### E. Skills Matrix (`SkillsSection.jsx`)
* Categorized skill cards with glowing icons and 3D tilt effects on hover.
* Categories:
  1. Programming & Core (Java, OOP, Java Collections, Python)
  2. Web & Frameworks (HTML, CSS, JavaScript, React.js, Vite)
  3. Database & Tools (SQL, AWS, Git)

### F. Projects Section (`ProjectsSection.jsx`)
* Glossy 3D tilt feature card for **Multi-Perspective Fraud Detection System**.
* Interactive modal overlay for deep dive into project architecture, NLP processing workflow, and ML algorithms.

### G. Education & Certifications (`EducationSection.jsx`)
* Interactive vertical timeline showcasing academic journey (MCA, B.Sc, Intermediate, SSC).
* Badge wall showcase for Java OOP and AWS Cloud Practitioner Essentials.

### H. Contact & Footer (`ContactSection.jsx`)
* Interactive contact form with real-time response feedback.
* Contact cards with direct links: Email (`ch.venkatarohith9951@gmail.com`), Phone (`+91 9951926332`), Location (`Hyderabad, India`).
* Resume Modal Previewer allowing inline reading and one-click PDF download.
* Footer with social links, live local clock, and copyright.

---

## 5. Verification & Performance Plan
* **Local Development**: Test with `npm run dev` and verify 60fps WebGL rendering.
* **Build Check**: Run `npm run build` to confirm zero build errors or broken dependencies.
* **Vercel Readiness**: Ensure clean package.json, `vercel.json` config if needed, and relative asset handling.

---

## 6. Self-Review Checklist
- [x] No placeholder text: All data extracted directly from `Rohith CV(2).pdf`.
- [x] Complete feature set: 3D canvas, glassmorphic UI, resume modal, responsive layout.
- [x] Clear component structure and file separation.
