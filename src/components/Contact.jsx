import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get in Touch</h2>
        
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.subtitle}>Contact Information</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Mail className={styles.icon} />
                <span>killimahesh2003@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.icon} />
                <span>+91 6305921792</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.icon} />
                <span>Sie c.r.reddy college of engineering, Eluru</span>
              </div>
            </div>

            <div className={styles.resumeWrapper}>
              <a href="/resume.pdf" className={styles.resumeButton}>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;