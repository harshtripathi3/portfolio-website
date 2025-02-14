import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section 
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <motion.input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
