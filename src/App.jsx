import React from 'react';
import { Github, Linkedin, LucideGithub, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.navInner}>
            <span className={styles.logo}>Portfolio</span>
            <div className={styles.navLinks}>
              <a href="#home" className={styles.navLink}>Home</a>
              <a href="#skills" className={styles.navLink}>Skills</a>
              <a href="#projects" className={styles.navLink}>Projects</a>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInner}>
            <div className={styles.socialLinks}>
              <a href="https://github.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className={styles.socialLink}>
                <Mail size={24} />
              </a>
            </div>
            <p className={styles.copyright}>© 2024 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;