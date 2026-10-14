'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FloatingContact from '../FloatingContact/FloatingContact';
import { LanguageProvider, useTranslation } from '../../i18n/LanguageContext';
import { getText, menuCategories, menuUi } from '../../data/fullMenuData';
import './MenuPage.scss';

function MenuContent() {
  const { lang } = useTranslation();
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const active = menuCategories.find((category) => category.id === activeId) || menuCategories[0];

  return (
    <div className="menu-page-shell">
      <Navbar />
      <main>
        <section className="menu-hero">
          <div className="container menu-hero-content">
            <Link href="/" className="menu-back"><span className="material-icons">arrow_back</span>{getText(menuUi.back, lang)}</Link>
            <span className="section-tag">{getText(menuUi.eyebrow, lang)}</span>
            <h1>{getText(menuUi.title, lang)}</h1>
            <p>{getText(menuUi.subtitle, lang)}</p>
          </div>
        </section>

        <section className="menu-catalog">
          <div className="container">
            <div className="menu-category-tabs" role="tablist" aria-label={getText(menuUi.title, lang)}>
              {menuCategories.map((category) => (
                <button key={category.id} type="button" role="tab" aria-selected={activeId === category.id} className={activeId === category.id ? 'active' : ''} onClick={() => setActiveId(category.id)}>
                  <img src={category.image} alt="" />
                  <span>{getText(category.title, lang)}</span>
                </button>
              ))}
            </div>

            <div className="menu-active-heading">
              <div>
                <span>{getText(menuUi.illustrative, lang)}</span>
                <h2>{getText(active.title, lang)}</h2>
              </div>
              <img src={active.image} alt={getText(active.title, lang)} />
            </div>

            <div className="menu-items-grid" role="tabpanel">
              {active.items.map((menuItem) => (
                <article className="menu-dish" key={menuItem.id}>
                  <div className="menu-dish-line">
                    <h3>{getText(menuItem.name, lang)}</h3>
                    <span aria-hidden="true" />
                    <strong>{menuItem.price}</strong>
                  </div>
                  {menuItem.note && <p>{getText(menuItem.note, lang)}</p>}
                </article>
              ))}
            </div>

            <div className="menu-page-cta">
              <p>{getText(menuUi.unitNote, lang)}</p>
              <a className="btn btn-primary" href="tel:0979391234"><span className="material-icons">call</span>{getText(menuUi.call, lang)}</a>
            </div>
          </div>
        </section>
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default function MenuPage() {
  return <LanguageProvider><MenuContent /></LanguageProvider>;
}
