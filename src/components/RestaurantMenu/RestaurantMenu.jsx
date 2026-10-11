import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import './RestaurantMenu.scss';

export default function RestaurantMenu() {
  const [activeTab, setActiveTab] = useState('menu-mon-chinh');
  const { dictionary } = useTranslation();
  const diningData = dictionary.dining;

  const menuData = {
    'menu-mon-chinh': [
      { name: 'Lẩu thả Phan Thiết', price: '350.000đ', desc: 'Món ăn mang đậm nét văn hóa ẩm thực Bình Thuận với cá suốt, bắp chuối, trứng và thịt ba chỉ.' },
      { name: 'Bánh xèo miền Trung', price: '80.000đ', desc: 'Bánh xèo giòn rụm với nhân tôm thịt tươi, ăn kèm nước chấm đậu phộng đặc trưng.' },
      { name: 'Dông cát nướng muối ớt', price: '250.000đ', desc: 'Đặc sản đồi cát trứ danh, thịt dông thơm ngọt, dai giòn được tẩm ướp đậm đà.' },
      { name: 'Cơm gà đồi Cát Trắng', price: '120.000đ', desc: 'Thịt gà thả đồi chắc thịt thơm ngon ăn kèm cơm chiên tỏi và nước mắm chua ngọt.' }
    ],
    'menu-hai-san': [
      { name: 'Mực một nắng nướng sa tế', price: '180.000đ', desc: 'Mực ống tươi roi rói được phơi qua một nắng giòn ngọt, nướng muối ớt sa tế cay tê nách.' },
      { name: 'Tôm hùm Bình Thuận hấp nước dừa', price: 'Theo mùa', desc: 'Tôm hùm biển ngọt thịt được hấp cùng nước dừa xiêm béo ngậy, ngọt lịm tim.' },
      { name: 'Sò điệp nướng mỡ hành', price: '90.000đ', desc: 'Sò điệp béo múp nướng xèo xèo cùng mỡ hành, đậu phộng rang giòn bùi thơm nức.' },
      { name: 'Ghẹ hấp bia sả', price: '320.000đ/kg', desc: 'Ghẹ xanh đánh bắt trong ngày hấp bia thơm nồng sả ớt, chấm muối tiêu chanh chuẩn vị.' }
    ],
    'menu-giai-khat': [
      { name: 'Nước dừa tươi xiêm quả', price: '30.000đ', desc: 'Dừa xiêm ngọt thanh mát lạnh, thức uống lý tưởng sau những giờ đùa giỡn đồi cát nắng ấm.' },
      { name: 'Sinh tố thanh long đỏ', price: '40.000đ', desc: 'Được xay nhuyễn từ loại trái cây đặc sản nổi tiếng nhất Bình Thuận, giàu vitamin.' },
      { name: 'Nước ép chanh dây mát lạnh', price: '35.000đ', desc: 'Hương thơm nồng nàn chua chua ngọt ngọt đánh tan cơn khát tức thời.' },
      { name: 'Cà phê sữa đá Sài Gòn', price: '25.000đ', desc: 'Cà phê phin đậm đặc pha sữa đặc thơm béo ngậy kèm đá bào sảng khoái ngày hè.' }
    ]
  };

  const tabs = [
    { id: 'menu-mon-chinh', label: 'Món Đặc Sản' },
    { id: 'menu-hai-san', label: 'Hải Sản Tươi Sống' },
    { id: 'menu-giai-khat', label: 'Nước Giải Khát' }
  ];

  // Framer Motion variants
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
                {menuData[activeTab].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="menu-item"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
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
      </div>
    </section>
  );
}
