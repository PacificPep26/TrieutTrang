'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation, languages } from '../../i18n/LanguageContext';
import './Navbar.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { lang, setLang, dictionary } = useTranslation();
  const navText = dictionary.nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  };

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleDrawer} aria-label="Mở Menu">
              <span className="material-icons">menu</span>
            </button>
            <span className="header-phone">
              <span className="material-icons">phone</span> 0901 234 567
            </span>
          </div>

          <div className="header-center">
            <a href="#" className="logo shiny-text">BÀU CÁT TRẮNG</a>
          </div>

          <div className="header-right">
            {/* Language Selector Dropdown gọn gàng */}
            <div className="lang-selector-wrapper">
              <button 
                className="lang-btn" 
                onClick={() => setLangDropdown(!langDropdown)}
                aria-label="Chọn ngôn ngữ"
              >
                <span className="flag-icon"><img src={`https://flagcdn.com/${currentLangObj.flag}.svg`} alt="" width="20" height="15" /></span>
                <span className="lang-code">{currentLangObj.short}</span>
                <span className="material-icons arrow-icon">arrow_drop_down</span>
              </button>

              {langDropdown && (
                <div className="lang-dropdown-menu">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      className={`lang-option ${lang === item.code ? 'active' : ''}`}
                      onClick={() => {
                        setLang(item.code);
                        setLangDropdown(false);
                      }}
                    >
                      <span className="flag"><img src={`https://flagcdn.com/${item.flag}.svg`} alt="" width="20" height="15" /></span>
                      <span className="label">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#dich-vu" className="btn btn-outline-light header-cta">
              {navText.bookNow}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile / Fullscreen Drawer Menu (Gọn gàng như cũ) */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="logo">BÀU CÁT TRẮNG</span>
          <button className="drawer-close" onClick={toggleDrawer}>
            <span className="material-icons">close</span>
          </button>
        </div>

        {/* Chuyển ngôn ngữ trong Drawer */}
        <div className="drawer-lang-selector">
          <span className="drawer-lang-title">Language / 언어 / 语言:</span>
          <div className="drawer-lang-grid">
            {languages.map((item) => (
              <button
                key={item.code}
                className={`drawer-lang-btn ${lang === item.code ? 'active' : ''}`}
                onClick={() => {
                  setLang(item.code);
                }}
              >
                <span className="flag"><img src={`https://flagcdn.com/${item.flag}.svg`} alt="" width="20" height="15" /></span> {item.short}
              </button>
            ))}
          </div>
        </div>

        <ul className="drawer-menu">
          <li><a href="#dieu-huong" className="drawer-link" onClick={closeDrawer}>{navText.home}</a></li>
          <li><a href="#dich-vu" className="drawer-link" onClick={closeDrawer}>{navText.services}</a></li>
          <li><a href="#check-in" className="drawer-link" onClick={closeDrawer}>{navText.spots}</a></li>
          <li><a href="#thu-vien" className="drawer-link" onClick={closeDrawer}>{navText.gallery}</a></li>
          <li><a href="#nha-hang" className="drawer-link" onClick={closeDrawer}>{navText.dining}</a></li>
          <li><a href="#danh-gia" className="drawer-link" onClick={closeDrawer}>{navText.reviews}</a></li>
          <li><a href="#faq" className="drawer-link" onClick={closeDrawer}>{navText.faq}</a></li>
          <li>
            <a href="tel:0901234567" className="drawer-link contact-drawer" onClick={closeDrawer}>
              <span className="material-icons">phone</span> {navText.callUs}: 0901 234 567
            </a>
          </li>
        </ul>
      </div>
      <div className={`drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
    </>
  );
}
