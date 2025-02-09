import React from 'react';
import { Code2, Database, Terminal, Server } from 'lucide-react';
import styles from './Skills.module.css';

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className={styles.icon} />,
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: <Server className={styles.icon} />,
    items: ['Node.js', 'Express', 'Python', 'Java']
  },
  {
    category: 'Database',
    icon: <Database className={styles.icon} />,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    category: 'Tools',
    icon: <Terminal className={styles.icon} />,
    items: ['Git', 'Docker', 'AWS', 'Linux']
  }
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.content}>
        <h2 className={styles.title}>Skills & Expertise</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.category} className={styles.card}>
              <div className={styles.cardHeader}>
                {skill.icon}
                <h3 className={styles.cardTitle}>{skill.category}</h3>
              </div>
              <div className={styles.skillList}>
                {skill.items.map((item) => (
                  <div key={item} className={styles.skillItem}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;