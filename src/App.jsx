'use client';
import React from 'react';
import { LanguageProvider, useTranslation } from './i18n/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import Services from './components/Services/Services';
import CheckInSpots from './components/CheckInSpots/CheckInSpots';
import Gallery from './components/Gallery/Gallery';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import FloatingContact from './components/FloatingContact/FloatingContact';
import SectionDots from './components/SectionDots/SectionDots';
import Footer from './components/Footer/Footer';
import './App.scss';

function MainContent() {
  const { dictionary } = useTranslation();
  const ctaData = dictionary.cta;

  return (
    <div className="app-container">
      {/* 1. Thanh điều hướng với bộ đổi ngôn ngữ VI - EN - KO - ZH */}
      <Navbar />

      {/* 2. Hero Banner ấn tượng */}
      <Hero />

      {/* 3. Thanh cam kết & giá trị cốt lõi (Trust Bar) */}
      <TrustBar />

      {/* 4. Hành trình Tour & Dịch vụ trải nghiệm có tab lọc */}
      <Services />

      {/* 5. Những tọa độ Check-in đẹp nhất (Must-visit Spots) */}
      <CheckInSpots />

      {/* 6. Thư viện ảnh khách check-in thực tế phong cách Sahara */}
      <Gallery />

      {/* 7. Trạm dừng chân Ẩm thực & Coffee nghỉ ngơi nạp năng lượng */}
      <RestaurantMenu />

      {/* 8. Đánh giá từ du khách (Social Proof) */}
      <Testimonials />

      {/* 9. Câu hỏi thường gặp (FAQ) */}
      <FAQ />

      {/* 10. CTA Section kêu gọi đặt tour nhanh */}
      <section className="cta-banner-section text-center">
        <div className="container">
          <h2 className="cta-title">{ctaData.title}</h2>
          <p className="cta-desc">{ctaData.desc}</p>
          <div className="cta-buttons">
            <a href="tel:0901234567" className="btn btn-primary btn-lg">
              <span className="material-icons">call</span> {ctaData.callNow}
            </a>
            <a href="https://zalo.me/0901234567" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
              <span className="material-icons">chat</span> {ctaData.chatZalo}
            </a>
          </div>
        </div>
      </section>

      {/* 11. Bản đồ & Thông tin liên hệ chi tiết */}
      <Contact />

      {/* 12. Floating Widgets Zalo & Hotline */}
      <FloatingContact />
      <SectionDots />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
