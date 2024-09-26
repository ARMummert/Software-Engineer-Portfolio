"use client";
import "./globals.css";
import "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { ReactNode, useEffect, useState } from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from './page.module.css';

const Footer = ({ children }: { children: ReactNode }) => {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!showScroll && window.scrollY > 400) {
          setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
          setShowScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [showScroll]);
  
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <>
        <footer className={styles.footer}>
        
          <section className={styles.socialMedia}>
            <a href="https://linkedin.com/in/armummert" aria-label="LinkedIn">
              <FontAwesomeIcon className={styles.icon3} icon={faLinkedin} />
            </a>
            <a href="https://github.com/ARMummert" aria-label="GitHub">
              <FontAwesomeIcon className={styles.icon4} icon={faGithub} />
            </a>
          </section>
          <button
          onClick={scrollTop}
          style={{
            display: showScroll ? 'flex' : 'none',
            position: 'fixed',
            bottom: '10px',
            right: '20px',
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <p className={styles.footerText}>
          © 2024 Amy Mummert. All Rights Reserved.
        </p>
        </footer>

      </>
    );
  };
  
  export default Footer;
  