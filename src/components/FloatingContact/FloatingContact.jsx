import React from 'react';
import { motion } from 'framer-motion';
import './FloatingContact.scss';

const ZaloIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    <text x="8.5" y="15" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="sans-serif" strokeWidth="0">Z</text>
  </svg>
);

export default function FloatingContact() {
  return (
    <div className="floating-contacts">
      {/* Floating Zalo */}
      <motion.a 
        href="https://zalo.me/0979391234" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn btn-zalo"
        aria-label="Liên hệ Zalo"
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="pulse-ring"></span>
        <ZaloIcon />
        <span className="tooltip-text">Chat Zalo</span>
      </motion.a>

      {/* Floating Phone */}
      <motion.a 
        href="tel:0979391234" 
        className="floating-btn btn-phone"
        aria-label="Gọi hotline"
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: {
            duration: 2.5,
            delay: 0.5, // out of sync from Zalo
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="pulse-ring"></span>
        <span className="material-icons">phone</span>
        <span className="tooltip-text">Gọi ngay</span>
      </motion.a>
    </div>
  );
}
