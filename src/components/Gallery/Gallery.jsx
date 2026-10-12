import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import './Gallery.scss';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { dictionary } = useTranslation();
  const gData = dictionary.gallery;

  const placeholderImg = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%23e0e0e0%22 width=%22800%22 height=%22600%22/%3E%3Ctext x=%22400%22 y=%22300%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage Not Available%3C/text%3E%3C/svg%3E';

  const images = [
    { id: 1, path: '/images/jeep-gate.jpg', fallback: placeholderImg, alt: 'Đội xe Jeep Triều Trang', size: 'tall' },
    { id: 2, path: '/images/camel-real.jpg', fallback: placeholderImg, alt: 'Nàng thơ cưỡi lạc đà Triều Trang', size: 'medium' },
    { id: 3, path: '/images/atv-convoy.jpg', fallback: placeholderImg, alt: 'Đoàn xe địa hình ATV leo đồi cát', size: 'short' },
    { id: 4, path: '/images/spot-ibautrang.jpg', fallback: placeholderImg, alt: 'Check-in I Love Bau Trang', size: 'tall' },
    { id: 5, path: '/images/fleet-sand.jpg', fallback: placeholderImg, alt: 'Đội xe địa hình trên sa mạc cát', size: 'medium' },
    { id: 6, path: '/images/spot-lake-real.jpg', fallback: placeholderImg, alt: 'Toàn cảnh hồ ốc đảo Bàu Trắng', size: 'short' },
    { id: 7, path: '/images/fleet-flag.jpg', fallback: placeholderImg, alt: 'Đoàn xe Jeep & ATV cờ đỏ sao vàng', size: 'tall' },
    { id: 8, path: '/images/ostrich-real.jpg', fallback: placeholderImg, alt: 'Trải nghiệm cưỡi đà điểu Triều Trang', size: 'medium' },
    { id: 9, path: '/images/gallery-2.jpg', fallback: placeholderImg, alt: 'Bậc thang check-in thời trang du mục', size: 'short' },
    { id: 10, path: '/images/sandboard.jpg', fallback: placeholderImg, alt: 'Trượt cát sa mạc Bàu Trắng', size: 'tall' },
    { id: 11, path: '/images/gallery-1.jpg', fallback: placeholderImg, alt: 'Check-in cùng lạc đà sa mạc', size: 'medium' },
    { id: 12, path: '/images/background.jpg', fallback: placeholderImg, alt: 'Flycam toàn cảnh hồ sen Bàu Bà', size: 'short' }
  ];

  const openLightbox = (imgUrl) => {
    setSelectedImage(imgUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  // Framer Motion variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 15 } 
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 15 } 
    }
  };

  return (
    <section className="gallery-section" id="thu-vien">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">{gData.title}</h2>
          {gData.subtitle && (
            <p style={{ maxWidth: '650px', margin: '0.5rem auto 0', color: '#666', fontSize: '0.95rem' }}>
              {gData.subtitle}
            </p>
          )}
          <div className="section-divider"></div>
        </motion.div>

        <motion.div 
          className="masonry-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {images.map(img => (
            <motion.div 
              key={img.id} 
              className={`masonry-item masonry-item--${img.size}`}
              variants={itemVariants}
              onClick={() => openLightbox(img.path)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 35px rgba(0, 0, 0, 0.12)',
                zIndex: 5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src={img.path} 
                onError={(e) => { e.target.src = img.fallback; }} 
                alt={img.alt} 
              />
              <div className="gallery-hover-overlay">
                <span className="material-icons">zoom_in</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox open" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) closeLightbox(); }}
          >
            <span className="lightbox-close material-icons" onClick={closeLightbox}>close</span>
            <motion.img 
              className="lightbox-img" 
              src={selectedImage} 
              alt="Zoomed view" 
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              style={{ animation: 'none' }}
              onError={(e) => {
                const matched = images.find(img => img.path === selectedImage);
                if (matched) e.target.src = matched.fallback;
              }} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
