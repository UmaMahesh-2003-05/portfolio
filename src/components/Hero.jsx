import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.titleWrapper}
        >
          <div className={styles.gradient}></div>
          <h1 className={styles.title}>Killi Uma maheswara rao</h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          Full Stack Developer
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.buttons}
        >
          <a href="#contact" className={styles.primaryButton}>
            Get in Touch
          </a>
          <a href="#projects" className={styles.secondaryButton}>
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;