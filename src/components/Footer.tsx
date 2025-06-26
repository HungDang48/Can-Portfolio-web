import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lê Văn Can</h3>
            <p>
              {t('footer.artist_desc', 'Họa sĩ 2D chuyên nghiệp, tạo ra những tác phẩm nghệ thuật độc đáo và đầy cảm xúc.')}
            </p>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.quick_links')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('header.home')}</Link></li>
              <li><Link to="/about">{t('header.about')}</Link></li>
              <li><Link to="/gallery">{t('header.gallery')}</Link></li>
              <li><Link to="/contact">{t('header.contact')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t('footer.connect')}</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                📘
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                📷
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                💼
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" title="Behance">
                🎨
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 