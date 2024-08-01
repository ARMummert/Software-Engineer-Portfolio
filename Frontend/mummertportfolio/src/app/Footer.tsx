"use client";
import "./globals.css";
import "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { ReactNode, useEffect, useState } from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ children }: { children: ReactNode }) => {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!showScroll && window.pageYOffset > 400) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
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
        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            padding: '10px 0',
          }}
        >
          <p style={{ fontSize: 14, textAlign: 'center', color: 'white' }}>
            © 2024 Amy Mummert. All Rights Reserved.
          </p>
          <div>
            <a href="https://linkedin.com/in/armummert" aria-label="LinkedIn">
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/ARMummert" aria-label="GitHub">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </div>
        </footer>
        <button
          onClick={scrollTop}
          style={{
            display: showScroll ? 'flex' : 'none',
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </>
    );
  };
  
  export default Footer;
  