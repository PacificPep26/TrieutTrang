'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CarFront, Camera, MapPinned, BadgeCheck } from 'lucide-react';

// locale files keep Material icon names; map them to thinner Lucide icons
const ICONS = {
  directions_car: CarFront,
  photo_camera: Camera,
  access_time_filled: MapPinned,
  verified_user: BadgeCheck,
};
import { useTranslation } from '../../i18n/LanguageContext';
import './TrustBar.scss';

export default function TrustBar() {
  const { dictionary } = useTranslation();
  const trustData = dictionary.trust;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="trust-bar-section">
      <div className="container">
        <motion.div 
          className="trust-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="trust-main-title">{trustData.title}</h2>
        </motion.div>

        <motion.div 
          className="trust-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trustData.items.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="trust-card"
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="icon-wrapper">
                {React.createElement(ICONS[item.icon] || BadgeCheck, { size: 26, strokeWidth: 1.5 })}
              </div>
              <div className="trust-info">
                <h3 className="trust-item-title">{item.title}</h3>
                <p className="trust-item-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
