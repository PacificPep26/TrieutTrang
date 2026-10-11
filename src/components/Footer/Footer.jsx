'use client';
import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import './Footer.scss';

export default function Footer() {
  const { dictionary } = useTranslation();
  const fData = dictionary.footer;
  const navText = dictionary.nav;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="logo shiny-text">BÀU CÁT TRẮNG</h3>
            <p className="brand-desc">{fData.desc}</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><span className="material-icons">facebook</span></a>
              <a href="#" aria-label="Instagram"><span className="material-icons">photo_camera</span></a>
              <a href="#" aria-label="YouTube"><span className="material-icons">play_circle_filled</span></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">{fData.quickLinks}</h4>
            <ul>
              <li><a href="#dieu-huong">{navText.home}</a></li>
              <li><a href="#dich-vu">{navText.services}</a></li>
              <li><a href="#check-in">{navText.spots}</a></li>
              <li><a href="#thu-vien">{navText.gallery}</a></li>
              <li><a href="#nha-hang">{navText.dining}</a></li>
              <li><a href="#danh-gia">{navText.reviews}</a></li>
              <li><a href="#faq">{navText.faq}</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">{fData.contactInfo}</h4>
            <ul>
              <li>
                <span className="material-icons">place</span>
                {fData.address}
              </li>
              <li>
                <span className="material-icons">phone</span>
                Hotline: <a href="tel:0901234567">0901 234 567</a>
              </li>
              <li>
                <span className="material-icons">email</span>
                Email: info@baucattrangmuine.vn
              </li>
              <li>
                <span className="material-icons">schedule</span>
                04:30 - 18:30 (Daily / 매일 / 每日)
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} {fData.rights}</p>
        </div>
      </div>
    </footer>
  );
}
