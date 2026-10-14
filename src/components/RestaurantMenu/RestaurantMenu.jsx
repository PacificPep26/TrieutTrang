import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import menuConfig from '../../data/menuData.json';
import './RestaurantMenu.scss';

export default function RestaurantMenu() {
  const { dictionary, lang } = useTranslation();
  const diningData = dictionary.dining;
  const specialties = menuConfig.menuData['menu-dac-san'] || [];
  const ctaLabel = { vi: 'Xem toàn bộ thực đơn', en: 'View the full menu', ko: '전체 메뉴 보기', zh: '查看完整菜单' }[lang];
  const specialtyLabel = { vi: 'Đặc sản trứ danh', en: 'Signature specialty', ko: '대표 특선 요리', zh: '招牌特色菜' }[lang];

  return (
    <section className="restaurant-section" id="nha-hang">
      <div className="container">
        <motion.div className="section-header text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <span className="section-tag">{diningData.tag}</span>
          <h2 className="section-title">{diningData.title}</h2>
          <p className="restaurant-intro">{diningData.subtitle}</p>
          <div className="section-divider" />
        </motion.div>

        <div className="specialty-grid">
          {specialties.map((item, index) => (
            <motion.article className="specialty-card" key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }}>
              <div className="specialty-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span>{specialtyLabel}</span>
              </div>
              <div className="specialty-content">
                <div className="specialty-heading">
                  <h3>{item.name}</h3>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="restaurant-menu-link">
          <p>{diningData.menuIntro}</p>
          <Link href="/menu" className="btn btn-primary">
            {ctaLabel}<span className="material-icons" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
