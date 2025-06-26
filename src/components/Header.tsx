import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Center - Logo */}
          <div className="logo">
            <Link to="/">
              <h2>{i18n.language === 'vi' ? 'Lê Văn Can' : 'Le Van Can'}</h2>
            </Link>
          </div>

          {/* Desktop: Hiển thị controls ngoài header */}
          {!isMobile && (
            <>
              {/* Left side - Navigation */}
              <nav className="nav">
                <ul className="nav-list">
                  <li>
                    <Link 
                      to="/" 
                      className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                      {t('header.home')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                      {t('header.about')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/gallery" 
                      className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                    >
                      {t('header.gallery')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    >
                      {t('header.contact')}
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Right side - Controls and Social */}
              <div className="header-controls">
                <div className="lang-switcher">
                  <button
                    className={`lang-btn${i18n.language === 'vi' ? ' active' : ''}`}
                    onClick={() => handleChangeLanguage('vi')}
                    aria-label="Chuyển sang tiếng Việt"
                  >
                    VI
                  </button>
                  <span className="lang-divider">|</span>
                  <button
                    className={`lang-btn${i18n.language === 'en' ? ' active' : ''}`}
                    onClick={() => handleChangeLanguage('en')}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                </div>
                <div className="social-icons">
                  <button 
                    className="social-icon"
                    onClick={() => openSocialLink("https://www.facebook.com/levyanycan")}
                    aria-label="Facebook"
                  >
                    <img src="/icons/fb2.png" alt="Facebook" />
                  </button>
                  <button 
                    className="social-icon"
                    onClick={() => openSocialLink("https://www.instagram.com/ver2.go/")}
                    aria-label="Instagram"
                  >
                    <img src="/icons/ig2.png" alt="Instagram" />
                  </button>
                  {/* <button 
                    className="social-icon"
                    onClick={() => openSocialLink("https://linkedin.com")}
                    aria-label="LinkedIn"
                  >
                    <img src="/icons/linkedin2.png" alt="LinkedIn" />
                  </button> */}
                  <button 
                    className="social-icon"
                    onClick={() => openSocialLink("https://www.behance.net/levancan")}
                    aria-label="Benhance"
                  >
                    <img src="/icons/behance2.png" alt="LinkedIn" />
                  </button>
                </div>
                {/* <button 
                  className="theme-toggle"
                  onClick={toggleDarkMode}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button> */}
              </div>
            </>
          )}

          {/* Mobile: chỉ hiện menu-toggle, controls vào popup */}
          {isMobile && (
            <>
              <button 
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={toggleMenu} />
              )}
              <nav className={`mobile-menu${isMenuOpen ? ' open' : ''}`}> 
                <button className="close-menu" onClick={toggleMenu} aria-label="Đóng menu">×</button>
                <ul className="nav-list">
                  <li>
                    <Link 
                      to="/" 
                      className={`nav-link ${isActive('/') ? 'active' : ''}`}
                      onClick={toggleMenu}
                    >
                      {t('header.home')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                      onClick={toggleMenu}
                    >
                      {t('header.about')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/gallery" 
                      className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                      onClick={toggleMenu}
                    >
                      {t('header.gallery')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                      onClick={toggleMenu}
                    >
                      {t('header.contact')}
                    </Link>
                  </li>
                </ul>
                <div className="mobile-menu-controls">
                  <div className="lang-switcher">
                    <button
                      className={`lang-btn${i18n.language === 'vi' ? ' active' : ''}`}
                      onClick={() => handleChangeLanguage('vi')}
                      aria-label="Chuyển sang tiếng Việt"
                    >
                      VI
                    </button>
                    <span className="lang-divider">|</span>
                    <button
                      className={`lang-btn${i18n.language === 'en' ? ' active' : ''}`}
                      onClick={() => handleChangeLanguage('en')}
                      aria-label="Switch to English"
                    >
                      EN
                    </button>
                  </div>
                  <div className="social-icons">
                    <button 
                      className="social-icon"
                      onClick={() => openSocialLink("https://facebook.com")}
                      aria-label="Facebook"
                    >
                      <img src="/icons/Facebook.png" alt="Facebook" />
                    </button>
                    <button 
                      className="social-icon"
                      onClick={() => openSocialLink("https://instagram.com")}
                      aria-label="Instagram"
                    >
                      <img src="/icons/Instagram.png" alt="Instagram" />
                    </button>
                    <button 
                      className="social-icon"
                      onClick={() => openSocialLink("https://linkedin.com")}
                      aria-label="LinkedIn"
                    >
                      <img src="/icons/Linkedin.png" alt="LinkedIn" />
                    </button>
                  </div>
                  {/* <button 
                    className="theme-toggle"
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? '☀️' : '🌙'}
                  </button> */}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 