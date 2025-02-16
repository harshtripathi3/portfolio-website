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
        
        <li ref={dropdownRef} className="nav-item">
          <span 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="nav-link"
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
                className="dropdown-menu"
              >
                <li>
                  <a 
                    href="https://www.linkedin.com/in/harsh-tripathi-378a97195/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/harshtripathi3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-link"
                  >
                    GitHub
                  </a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        
        <li><a href="#contact">Contact</a></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
