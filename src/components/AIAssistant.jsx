import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const quickPrompts = [
  "What is Rohith's experience in AI & ML?",
  "What are Rohith's Java & SQL skills?",
  "Tell me about his MCA & Academic scores",
  "Is Rohith available for immediate hiring?"
];

// Custom formatting parser so raw markdown (** or *) is cleanly rendered as HTML/React elements
function FormattedMessage({ text }) {
  if (typeof text !== 'string') return <span>{text}</span>;

  const lines = text.split('\n');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={lineIdx} style={{ height: '4px' }} />;

        // Header line (e.g. 🤖 Rohith's Experience...)
        if (trimmed.startsWith('🤖') || trimmed.startsWith('☕') || trimmed.startsWith('🌐') || trimmed.startsWith('🛢️') || trimmed.startsWith('🎓') || trimmed.startsWith('📜') || trimmed.startsWith('💼') || trimmed.startsWith('📞') || trimmed.startsWith('🚀') || trimmed.startsWith('⭐')) {
          return (
            <div key={lineIdx} style={{ fontWeight: 700, color: '#00f2fe', fontSize: '0.84rem', marginBottom: '2px' }}>
              {trimmed}
            </div>
          );
        }

        // Parse **bold** and *italic*
        const parts = trimmed.split(/(\*\*.*?\*\*|\*.*?\*)/g);
        const formattedContent = parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={pIdx} style={{ color: '#00f2fe', fontWeight: 700 }}>
                {part.slice(2, -2)}
              </strong>
            );
          }
          if (part.startsWith('*') && part.endsWith('*')) {
            return (
              <em key={pIdx} style={{ color: '#4facfe', fontStyle: 'normal', fontWeight: 600 }}>
                {part.slice(1, -1)}
              </em>
            );
          }
          return part;
        });

        // Bullet line
        if (trimmed.startsWith('•')) {
          return (
            <div key={lineIdx} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', marginLeft: '4px', fontSize: '0.8rem', color: '#cbd5e1' }}>
              <span style={{ color: '#00f2fe', fontWeight: 700 }}>•</span>
              <div>{formattedContent.map((el) => typeof el === 'string' ? el.replace(/^•\s*/, '') : el)}</div>
            </div>
          );
        }

        return (
          <div key={lineIdx} style={{ fontSize: '0.81rem', color: '#e2e8f0', lineHeight: 1.45 }}>
            {formattedContent}
          </div>
        );
      })}
    </div>
  );
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: `Hi there! 👋 I am Rohith's AI Portfolio Assistant. Ask me anything about his AI/ML experience, Java background, Fraud Detection project, education, or hiring availability!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (queryText) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    if (!queryText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = answerSpecificQuery(textToSend);
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 500);
  };

  // Comprehensive Intent Matching Engine
  const answerSpecificQuery = (query) => {
    const q = query.toLowerCase();

    // AI & Machine Learning Intent
    if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('machine learning') || q.includes('ml') || q.includes('nlp') || q.includes('python')) {
      return `🤖 **Rohith's Experience in AI & Machine Learning:**\n\nRohith has hands-on experience developing Machine Learning and Natural Language Processing (NLP) solutions in Python.\n\n• **Featured System:** Engineered a *Multi-Perspective Fraud Detection Method for E-Commerce Transactions*.\n• **NLP Signal Processing:** Applied NLP algorithms to extract signals from unstructured text logs and transaction data.\n• **Pattern Analytics:** Built real-time risk classification models to detect suspicious marketplace activity and fraudulent patterns.`;
    }

    // Java & Core OOP Intent
    if (q.includes('java') || q.includes('oop') || q.includes('object oriented') || q.includes('collection') || q.includes('backend')) {
      return `☕ **Java & Core Programming Experience:**\n\nRohith is highly proficient in Java development. His core expertise includes:\n\n• Object-Oriented Programming (OOP) design patterns\n• Java Collections Framework & Memory Structures\n• Certified in **Java Training (Core Java & OOP)**\n• Building modular, maintainable logic for enterprise systems.`;
    }

    // Web Development Intent
    if (q.includes('web') || q.includes('react') || q.includes('frontend') || q.includes('html') || q.includes('css') || q.includes('javascript') || q.includes('vite')) {
      return `🌐 **Web Development Stack:**\n\nRohith develops modern web applications using:\n\n• **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3, Vite\n• **UI / UX:** Glassmorphism design systems, 3D WebGL graphics (Three.js), and Framer Motion animations.`;
    }

    // Database & SQL Intent
    if (q.includes('sql') || q.includes('database') || q.includes('data') || q.includes('query')) {
      return `🛢️ **Database Expertise:**\n\nRohith has practical experience with SQL database design, writing queries, schema optimization, and querying relational data structures for analytical pipelines.`;
    }

    // Education / College / Marks Intent
    if (q.includes('education') || q.includes('score') || q.includes('mark') || q.includes('gpa') || q.includes('percentage') || q.includes('college') || q.includes('degree') || q.includes('mca') || q.includes('bsc') || q.includes('study')) {
      return `🎓 **Academic Record & Education:**\n\n• **MCA (Master of Computer Applications):** RV Institute of Technology (2025) — **70%**\n• **B.Sc (Computers):** Sri Nagarjuna Degree College (2022) — **65%**\n• **Intermediate (MPC):** Chaitanya Bharathi Jr. College (2019) — **6.8 Grade**\n• **SSC:** Vidya Nikethan High School (2017) — **7.5 Grade**`;
    }

    // Certifications Intent
    if (q.includes('certif') || q.includes('aws') || q.includes('cloud') || q.includes('course')) {
      return `📜 **Certifications & Credentials:**\n\n• **Java Training (Core Java, OOP)** — Comprehensive Java certification\n• **AWS Cloud Practitioner Essentials** — Amazon Web Services foundational cloud computing certification.`;
    }

    // Availability / Hiring / Location Intent
    if (q.includes('hire') || q.includes('job') || q.includes('availab') || q.includes('relocat') || q.includes('join') || q.includes('role') || q.includes('location')) {
      return `💼 **Hiring & Availability Status:**\n\n• **Current Status:** MCA Graduate available for **Immediate Hiring**\n• **Target Roles:** Software Engineer, Java Developer, Web Developer, AI/ML Associate\n• **Location:** Hyderabad, India (Open to Relocation across India & Remote roles).`;
    }

    // Contact Intent
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('linkedin')) {
      return `📞 **Contact Information:**\n\n• **Email:** ch.venkatarohith9951@gmail.com\n• **Phone:** +91 9951926332\n• **Location:** Hyderabad, India\n• **LinkedIn:** https://www.linkedin.com/in/chinthaginjala-venkata-rohith/`;
    }

    // General Project / Work Intent
    if (q.includes('experience') || q.includes('work') || q.includes('project')) {
      return `🚀 **Key Project Experience:**\n\nRohith engineered a **Multi-Perspective Fraud Detection System for E-Commerce Transactions** using Python, ML, and NLP to detect suspicious activities and extract unstructured text signals in real time.`;
    }

    // Strengths
    if (q.includes('strength') || q.includes('why') || q.includes('about')) {
      return `⭐ **Why Hire Rohith?**\n\n• Strong CS foundation backed by an MCA degree (2025)\n• Hands-on Machine Learning & Python NLP experience\n• Proficiency in Java, SQL, and modern Web Technologies\n• Fast learner with strong analytical problem-solving skills.`;
    }

    // Smart summary fallback
    return `Rohith is an MCA graduate (70%, 2025) specializing in Java, SQL, Machine Learning (Python/NLP), and React Web Development. Feel free to ask about his **AI experience**, **Java background**, **Fraud Detection project**, or **hiring availability**!`;
  };

  return (
    <>
      {/* Floating Bot Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
          background: 'linear-gradient(135deg, #00f2fe, #7f00ff)',
          color: '#fff',
          border: 'none',
          borderRadius: '50px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 6px 25px rgba(0, 242, 254, 0.4)',
          cursor: 'pointer',
          fontWeight: 700,
          fontSize: '0.85rem'
        }}
      >
        <Brain size={18} className="icon-glow" />
        <span>Ask Rohith AI</span>
      </motion.button>

      {/* Compact Sleek AI Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              position: 'fixed',
              bottom: '72px',
              right: '20px',
              zIndex: 9999,
              width: 'min(330px, calc(100vw - 24px))',
              height: '430px',
              borderRadius: '20px',
              background: 'rgba(9, 13, 22, 0.97)',
              backdropFilter: 'blur(25px)',
              border: '1px solid rgba(0, 242, 254, 0.35)',
              boxShadow: '0 16px 45px rgba(0, 0, 0, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Perfectly Aligned Header Controls */}
            <div
              style={{
                padding: '12px 16px',
                background: 'linear-gradient(90deg, rgba(0, 242, 254, 0.15), rgba(127, 0, 255, 0.15))',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #00f2fe, #7f00ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    color: '#fff',
                    flexShrink: 0
                  }}
                >
                  <Bot size={18} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2 }}>
                    Rohith AI Portfolio Bot
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: '#00f2fe', margin: 0, display: 'flex', alignItems: 'center', gap: '4px', lineHeight: 1.2 }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00f2fe' }} /> Online & Ready
                  </p>
                </div>
              </div>

              {/* Styled Circular Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255, 0, 0, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                aria-label="Close Chatbot"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages Container */}
            <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', scrollbarWidth: 'thin' }}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-start',
                    gap: '6px'
                  }}
                >
                  {msg.sender === 'ai' && (
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 242, 254, 0.2)', color: '#00f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Bot size={14} />
                    </div>
                  )}

                  <div
                    style={{
                      maxWidth: '85%',
                      padding: '10px 13px',
                      borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background: msg.sender === 'user' ? 'linear-gradient(135deg, #00f2fe, #4facfe)' : 'rgba(255, 255, 255, 0.05)',
                      color: msg.sender === 'user' ? '#07090e' : '#f8fafc',
                      fontSize: '0.8rem',
                      fontWeight: msg.sender === 'user' ? 600 : 400,
                      border: msg.sender === 'ai' ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
                    }}
                  >
                    <FormattedMessage text={msg.text} />
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00f2fe', fontSize: '0.78rem', paddingLeft: '30px' }}>
                  <Sparkles size={12} className="icon-glow" /> AI thinking...
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div style={{ padding: '6px 10px', display: 'flex', gap: '6px', overflowX: 'auto', borderTop: '1px solid rgba(255, 255, 255, 0.06)', scrollbarWidth: 'none' }}>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '5px 10px',
                    borderRadius: '16px',
                    background: 'rgba(0, 242, 254, 0.08)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    color: '#00f2fe',
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              style={{
                padding: '10px 12px',
                background: 'rgba(15, 23, 42, 0.95)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                gap: '6px',
                alignItems: 'center'
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI, Java, MCA..."
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#fff',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00f2fe, #7f00ff)',
                  border: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  cursor: 'pointer'
                }}
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
