"use client";
import "./globals.css";
import "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <button
          onClick={scrollTop}
          style={{
            display: showScroll ? 'flex' : 'none',
            position: 'fixed',
            bottom: '5px',
            right: '5px',
            backgroundColor: 'transparent',
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
  