import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import './SectionDots.scss';

// section id -> label key in dictionary.nav
const SECTIONS = [
  ['dieu-huong', 'home'],
  ['dich-vu', 'services'],
  ['check-in', 'spots'],
  ['thu-vien', 'gallery'],
  ['nha-hang', 'dining'],
  ['danh-gia', 'reviews'],
  ['faq', 'faq'],
];

export default function SectionDots() {
  const { dictionary } = useTranslation();
  const [active, setActive] = useState(SECTIONS[0][0]);

  useEffect(() => {
    // a section counts as active when it crosses the middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-50% 0px -50% 0px' }
    );
    SECTIONS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="section-dots" aria-label="Section navigation">
      {SECTIONS.map(([id, key]) => (
        <a
          key={id}
          href={`#${id}`}
          className={`section-dot ${active === id ? 'active' : ''}`}
          aria-label={dictionary.nav[key]}
          aria-current={active === id ? 'true' : undefined}
        >
          <span className="section-dot-label">{dictionary.nav[key]}</span>
        </a>
      ))}
    </nav>
  );
}
