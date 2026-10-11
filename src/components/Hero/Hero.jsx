import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import './Hero.scss';

export default function Hero({ onBooking }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { dictionary } = useTranslation();
  const heroData = dictionary.hero;
  
  const titleText = heroData.title || "Bàu Cát Trắng";
  const words = titleText.split(" ");

  const videoRef = useRef(null);
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Next SSR: video may finish loading before React hydrates and attaches onLoadedData
  useEffect(() => {
    if (videoRef.current?.readyState >= 2) setVideoLoaded(true);
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 12 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section className="hero" id="dieu-huong">
      <div className="hero-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          className={`hero-video ${videoLoaded ? 'loaded' : ''}`}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <span 
              key={i} 
              className="particle"
              style={{
                // deterministic pseudo-random so server and client HTML match (no hydration error)
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i * 1.7) % 5}s`,
                animationDuration: `${3 + ((i * 2.3) % 4)}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="hero-tag"
          variants={tagVariants}
        >
          {heroData.tag}
        </motion.span>
        
        <motion.h1 
          className="hero-title"
          style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.25em' }}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="split-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {word.split("").map((char, charIndex) => (
                <motion.span 
                  key={charIndex} 
                  className="split-char" 
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          variants={childVariants}
        >
          {heroData.subtitle}
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          variants={childVariants}
        >
          <motion.button 
            onClick={onBooking || (() => window.location.href = '#dich-vu')} 
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {heroData.exploreBtn}
          </motion.button>
          <motion.a 
            href="#thu-vien" 
            className="btn btn-outline-light"
            whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            {heroData.galleryBtn}
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 0.8, y: 15 }}
        transition={{
          y: {
            duration: 1.2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          },
          opacity: { duration: 0.5, delay: 1.5 }
        }}
      >
        <span className="material-icons">keyboard_double_arrow_down</span>
      </motion.div>
    </section>
  );
}
