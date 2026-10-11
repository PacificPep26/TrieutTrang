'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import './FAQ.scss';

export default function FAQ() {
  const { dictionary } = useTranslation();
  const faqData = dictionary.faq;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{faqData.title}</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="faq-container">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span className="faq-q-text">{item.q}</span>
                  <span className="material-icons faq-icon">
                    {isOpen ? 'remove' : 'add'}
                  </span>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
