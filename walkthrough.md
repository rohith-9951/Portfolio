# Walkthrough: Chinthaginjala Venkata Rohith 3D Portfolio

An enhanced, glossy, animated 3D developer portfolio for **Chinthaginjala Venkata Rohith** built with **React.js**, **Vite**, **Three.js** (`@react-three/fiber`), **Framer Motion**, and an obsidian glassmorphism design system.

---

## 🚀 Key Features Implemented

### 1. 3D WebGL Background (`Canvas3D.jsx`)
* Interactive particle sphere with subtle camera rotation and smooth animation.
* Orbiting wireframe Torus Knot geometry with glowing cyan/purple WebGL shaders.

### 2. Header Navigation (`Navbar.jsx`)
* Sticky glassmorphic bar with `backdrop-filter: blur(16px)`.
* Brand logo (`Rohith.dev`), section smooth links, and direct **Resume** trigger button.

### 3. Hero Section (`HeroSection.jsx`)
* Animated intro text cycling through:
  * *Master of Computer Applications (MCA)*
  * *Full-Stack Java & Web Developer*
  * *Machine Learning & SQL Enthusiast*
* Call-to-action buttons for "Explore Work", "Resume CV", and "Contact Me".
* Summary cards for MCA degree (70%), Core Tech Stack, and Certifications.

### 4. About Section (`AboutSection.jsx`)
* Objective statement from resume.
* Location (Hyderabad, India), Email, Phone, and Degree highlights.
* Glassmorphic strength cards detailing OOP architecture, ML analysis, and SQL experience.

### 5. Technical Skills Matrix (`SkillsSection.jsx`)
* Categorized skill cards with animated progress meters for:
  * Java, OOP, Java Collections
  * SQL, HTML5, CSS3, JavaScript, React.js
  * Python, Machine Learning, AWS Cloud Practitioner

### 6. Featured Project & Interactive Modal (`ProjectsSection.jsx`)
* Feature card for **Multi-Perspective Fraud Detection System for E-Commerce Transactions**.
* Interactive **Deep Dive Modal** detailing project architecture, NLP signal extraction, real-time transaction risk scoring, and data pipelines.

### 7. Education & Certifications (`EducationSection.jsx`)
* Vertical interactive timeline for MCA (2025, 70%), B.Sc (2022, 65%), Intermediate (2019, 6.8), and SSC (2017, 7.5).
* Glass badge wall featuring **Java Training** and **AWS Cloud Practitioner Essentials**.

### 8. Contact & Embedded Resume Viewer (`ContactSection.jsx` & `ResumeModal.jsx`)
* Interactive contact form with confetti celebration upon submission.
* Direct email (`ch.venkatarohith9951@gmail.com`), phone (`+91 9951926332`), location, and social links.
* Embedded inline PDF resume viewer with one-click download link.

---

## ⚡ Local Verification Results
* **Dev Server**: Running live at [http://localhost:3000/](http://localhost:3000/)
* **Production Build**: Verified with `npm run build` -> `✓ 2425 modules transformed`, output generated in `dist/`.

---

## 🌐 Deploying to Vercel

To deploy your portfolio to Vercel:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete 3D React portfolio for Rohith"
   git push origin main
   ```
2. **Deploy on Vercel**:
   - Go to [Vercel.com](https://vercel.com) and click **Add New Project**.
   - Import your GitHub repository.
   - Vercel automatically detects **Vite**:
     - Framework Preset: `Vite`
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click **Deploy**!
