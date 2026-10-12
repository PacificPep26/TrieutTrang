import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import menuConfig from '../../data/menuData.json';
import './RestaurantMenu.scss';

export default function RestaurantMenu() {
  const [activeTab, setActiveTab] = useState('menu-dac-san');
  const [selectedMenuPage, setSelectedMenuPage] = useState(null);
  const { dictionary } = useTranslation();
  const diningData = dictionary.dining;

  const { menuData, tabs, fullMenuPages } = menuConfig;

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 15 } 
    }
  };

  const paneVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.35, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -15, 
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  };

  return (
    <section className="restaurant-section" id="nha-hang">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">{diningData.title}</h2>
          <p style={{ maxWidth: '650px', margin: '0.5rem auto 0', color: '#666', fontSize: '0.95rem' }}>
            {diningData.subtitle}
          </p>
          <div className="section-divider"></div>
        </motion.div>

        <div className="menu-tabs-wrapper">
          <ul className="menu-tabs">
            {tabs.map(tab => (
              <li 
                key={tab.id}
                className={`menu-tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    className="active-tab-underline" 
                    layoutId="activeTabUnderline"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-content-container">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              className="menu-pane-active"
              variants={paneVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="menu-grid">
                {menuData[activeTab]?.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="menu-item"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    {item.image && (
                      <img 
                        className="menu-item-img" 
                        src={item.image} 
                        alt={item.name} 
                        loading="lazy" 
                        onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                      />
                    )}
                    <div className="menu-item-details">
                      <h4 className="menu-item-title">
                        {item.name} <span>{item.price}</span>
                      </h4>
                      <p className="menu-item-desc">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View Full Menu Banner */}
        <div className="menu-full-cta">
          <div className="menu-full-cta-card">
            <div className="menu-full-cta-text">
              <h3>Xem Trọn Bộ Thực Đơn Triều Trang</h3>
              <p>Xem thực đơn chi tiết gồm các món cơm, mì, lẩu, đồ uống và set cơm đoàn phục vụ tại quán.</p>
            </div>
            <div className="menu-pages-preview">
              {fullMenuPages.map((p) => (
                <div 
                  key={p.page} 
                  className="menu-page-thumb" 
                  onClick={() => setSelectedMenuPage(p.img)}
                  title={`Bấm xem trang ${p.page}: ${p.title}`}
                >
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span>Trang {p.page}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Menu Pages */}
      <AnimatePresence>
        {selectedMenuPage && (
          <motion.div 
            className="menu-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMenuPage(null)}
          >
            <span className="menu-lightbox-close material-icons">close</span>
            <motion.div 
              className="menu-lightbox-dialog"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedMenuPage} 
                alt="Thực đơn chi tiết Triều Trang" 
                className="menu-lightbox-img" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}