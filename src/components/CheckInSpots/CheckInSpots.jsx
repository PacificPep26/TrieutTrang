'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import './CheckInSpots.scss';

export default function CheckInSpots() {
  const { dictionary } = useTranslation();
  const spotsData = dictionary.spots;

  const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%22400%22 y=%22300%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3ECheck-in Mui Ne%3C/text%3E%3C/svg%3E';

  return (
    <section className="checkin-spots-section" id="check-in">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{spotsData.title}</h2>
          <p className="section-subtitle">{spotsData.subtitle}</p>
          <div className="section-divider"></div>
        </motion.div>

        <div className="spots-grid">
          {spotsData.items.map((spot, index) => (
            <motion.div 
              key={index}
              className="spot-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="spot-img-wrapper">
                <img 
                  src={spot.image} 
                  onError={(e) => { e.target.src = placeholderImg; }} 
                  alt={spot.title} 
                />
                <div className="spot-overlay"></div>
                <div className="spot-number">0{index + 1}</div>
              </div>
              <div className="spot-content">
                <h3 className="spot-title">{spot.title}</h3>
                <p className="spot-desc">{spot.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
