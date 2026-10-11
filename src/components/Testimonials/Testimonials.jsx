'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Star } from 'lucide-react';
import { useTranslation } from '../../i18n/LanguageContext';
import { reviewItems } from '../../data/reviewsData';
import './Testimonials.scss';

export default function Testimonials() {
  const trackRef = useRef(null);
  const { dictionary } = useTranslation();
  const tData = dictionary.reviews;

  // Lấy dữ liệu đánh giá: ưu tiên danh sách phong phú 20+ review có ảnh chân thực
  const reviews = reviewItems;

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.testimonial-card');
    // Di chuyển 1 lần đúng 1 card hoặc theo khoảng cách màn hình
    const step = card ? card.offsetWidth + 20 : 280;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
    
    if (dir > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (dir < 0 && track.scrollLeft <= 5) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    }
  };

  // Tự động cuộn mượt mà; tạm dừng khi người dùng hover chuột hoặc chạm tay
  useEffect(() => {
    const track = trackRef.current;
    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    
    track?.addEventListener('mouseenter', pause);
    track?.addEventListener('mouseleave', resume);
    track?.addEventListener('touchstart', pause, { passive: true });
    track?.addEventListener('touchend', resume);

    const timer = setInterval(() => { 
      if (!paused) scrollByCard(1); 
    }, 4500);

    return () => {
      clearInterval(timer);
      track?.removeEventListener('mouseenter', pause);
      track?.removeEventListener('mouseleave', resume);
      track?.removeEventListener('touchstart', pause);
      track?.removeEventListener('touchend', resume);
    };
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 15 }
    }
  };

  return (
    <section className="testimonials-section" id="danh-gia">
      <div className="container">
        <motion.div
          className="section-header text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag shiny-text">{tData.tag || 'TESTIMONIALS'}</span>
          <h2 className="section-title">{tData.title}</h2>
          
          {/* Trust Score Summary - Tạo uy tín mạnh mẽ */}
          <div className="trust-summary-bar">
            <div className="stars-group">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold" />
              ))}
            </div>
            <span className="score-text"><strong>4.9 / 5.0</strong> dựa trên hơn 1,280+ đánh giá thực tế</span>
            <span className="verified-badge">
              <CheckCircle2 size={16} /> Đã xác thực chuyến đi
            </span>
          </div>

          <div className="section-divider"></div>
        </motion.div>
      </div>

      <div className="testimonials-carousel">
        <button 
          className="carousel-nav prev" 
          aria-label="Previous" 
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="testimonials-track" ref={trackRef}>
          {reviews.map((item, idx) => (
            <article key={idx} className="testimonial-card">
              <div className="card-top-header">
                <div className="rating-stars">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="material-icons star-icon">star</span>
                  ))}
                </div>
                {item.tag && <span className="tour-tag">{item.tag}</span>}
              </div>

              <p className="testimonial-text">"{item.quote}"</p>

              <div className="testimonial-user">
                <div className="avatar-wrapper">
                  <img 
                    className="user-avatar" 
                    src={item.avatar} 
                    alt={item.name} 
                    loading="lazy" 
                  />
                  {item.verified && (
                    <span className="user-verified-icon" title="Khách hàng đã trải nghiệm">
                      <CheckCircle2 size={13} />
                    </span>
                  )}
                </div>
                
                <div className="user-info">
                  <h4 className="user-name">{item.name}</h4>
                  <div className="user-meta">
                    <span className="user-role">{item.from}</span>
                    {item.date && <span className="user-date">• {item.date}</span>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button 
          className="carousel-nav next" 
          aria-label="Next" 
          onClick={() => scrollByCard(1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
