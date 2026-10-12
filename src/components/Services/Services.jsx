'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import './Services.scss';

export default function Services() {
  const { dictionary } = useTranslation();
  const sData = dictionary.services;
  const [activeTab, setActiveTab] = useState('all');

  const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%22400%22 y=%22300%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3EBau Cat Trang%3C/text%3E%3C/svg%3E';

  const filteredItems = activeTab === 'all' 
    ? sData.items 
    : sData.items.filter(item => item.type === activeTab);

  return (
    <section className="services-section" id="dich-vu">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{sData.title}</h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Tab Selection */}
        <div className="services-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            {sData.tabs.all}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'jeep' ? 'active' : ''}`}
            onClick={() => setActiveTab('jeep')}
          >
            {sData.tabs.jeep}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'adventure' ? 'active' : ''}`}
            onClick={() => setActiveTab('adventure')}
          >
            {sData.tabs.adventure}
          </button>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          layout
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div 
                key={item.id} 
                className="service-card"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, boxShadow: "0px 20px 45px rgba(0, 0, 0, 0.08)" }}
              >
                <div className="card-img-wrapper">
                  <img 
                    src={item.image} 
                    onError={(e) => { e.target.src = placeholderImg; }} 
                    alt={item.title} 
                  />
                  <div className="price-badge">{item.price}</div>
                  {item.badge && <div className="schedule-badge">{item.badge}</div>}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <div className="card-footer">
                    <a 
                      href="https://zalo.me/0979391234" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                    >
                      <span className="material-icons">chat</span> {sData.bookBtn}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
