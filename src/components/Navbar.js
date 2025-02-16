import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li ref={dropdownRef}>
          <span 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ cursor: 'pointer' }}
          >
            Links
          </span>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                backgroundColor: '#000000',
                color: '#ffffff',
                padding: '10px',
                borderRadius: '4px',
                boxShadow: '0 2px 5px rgba(255,255,255,0.1)',
                listStyle: 'none',
                marginTop: '8px',
                display: 'flex', // Add flex display
                gap: '15px', // Add space between items
                alignItems: 'center' // Vertical alignment
              }}
            >
              <li>
                <a 
                  href="https://www.linkedin.com/in/harsh-tripathi-378a97195/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'inherit', 
                    textDecoration: 'none',
                    whiteSpace: 'nowrap' // Prevent text wrapping
                  }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/harshtripathi3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'inherit', 
                    textDecoration: 'none',
                    whiteSpace: 'nowrap' // Prevent text wrapping
                  }}
                >
                  GitHub
                </a>
              </li>
            </motion.ul> )}
          </AnimatePresence>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
