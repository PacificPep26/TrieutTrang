import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import menuConfig from '../../data/menuData.json';
import './RestaurantMenu.scss';

export default function RestaurantMenu() {
  const [selectedMenuPage, setSelectedMenuPage] = useState(null);
  const { dictionary } = useTranslation();
  const diningData = dictionary.dining;

  const { menuData, fullMenuPages } = menuConfig;
  const dacSanItems = menuData['menu-dac-san'] || [];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 15 } 
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
          <span className="section-eyebrow">ẨM THỰC ĐỒI CÁT</span>
          <h2 className="section-title">Món Đặc Sản Triều Trang</h2>
          <p style={{ maxWidth: '650px', margin: '0.5rem auto 0', color: '#666', fontSize: '0.95rem' }}>
            Thưởng thức hương vị trứ danh miền đồi cát Mũi Né - Phan Thiết được chế biến tươi sống đậm đà.
          </p>
          <div className="section-divider"></div>
        </motion.div>

        {/* 2 Món Đặc Sản Nổi Bật Trên Cùng */}
        <div className="specialty-highlight-container">
          <div className="menu-grid specialty-grid">
            {dacSanItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="menu-item specialty-card"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                {item.image && (
                  <div className="menu-item-img-wrapper">
                    <img 
                      className="menu-item-img" 
                      src={item.image} 
                      alt={item.name} 
                      loading="lazy" 
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                    />
                    <span className="specialty-badge">Đặc sản trứ danh</span>
                  </div>
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
        </div>

        {/* Menu chi tiết phía dưới: Xem Trọn Bộ Thực Đơn */}
        <div className="menu-full-cta">
          <div className="menu-full-cta-card">
            <div className="menu-full-cta-text">
              <h3>Xem Trọn Bộ Thực Đơn Triều Trang</h3>
              <p>Bấm vào từng trang bên dưới để phóng to menu chi tiết gồm cơm, mì, phở, các món lẩu, nước giải khát và set cơm đoàn phục vụ tại quán.</p>
            </div>
            <div className="menu-pages-preview">
              {fullMenuPages.map((p) => (
                <div 
                  key={p.page} 
                  className="menu-page-thumb" 
                  onClick={() => setSelectedMenuPage(p.img)}
                  title={`Bấm xem trang ${p.page}: ${p.title}`}
                >
                  <div className="thumb-img-wrapper">
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <div className="thumb-zoom-overlay">
                      <span className="material-icons">zoom_in</span>
                    </div>
                  </div>
                  <span className="thumb-title">Trang {p.page}: {p.title}</span>
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