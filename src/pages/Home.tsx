import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import WelcomePopup from '../components/WelcomePopup';
const Home: React.FC = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Chỉ hiện popup nếu chưa hiện trong session này
    if (!sessionStorage.getItem('welcomePopupShown')) {
      setShowPopup(true);
      sessionStorage.setItem('welcomePopupShown', 'true');
    }
  }, []);
  return (
    <div className="home page-transition">
       {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {t('home.greeting')}
                <span className="highlight"> {t('home.name')}</span>
              </h1>
              <p className="hero-subtitle">
                {t('home.subtitle')}
              </p>
              <div className="hero-buttons">
  <Link to="/gallery" className="btn btn-primary">
    {t('home.see_works')}
  </Link>
  <Link to="/about" className="btn btn-secondary">
    {t('home.about_me')}
  </Link>
  <a
    href="https://drive.google.com/uc?export=download&id=1L-GH6K6V4M6BE7T-2_qbZBt-v5jzcG77"
    className="btn btn-tertiary"
    target="_blank"
    rel="noopener noreferrer"
  >
    portfolio
  </a>
</div>

            </div>
            
            <div className="hero-image">
  <div className="hero-avatar">
    <img src="/img/CANAva2.png" alt="Avatar" />
  </div>
</div>


          </div>
        </div>
      </section>
      
      <section className="featured-works">
        <div className="container">
          <h2 className="section-title">{t('home.featured')}</h2>
          <div className="works-grid">
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🎨</div>
              </div>
              <h3>Illustration</h3>
              <p>Nghệ thuật minh họa sáng tạo với phong cách độc đáo và kỹ thuật vẽ tay chuyên nghiệp</p>
            </div>
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🎬</div>
              </div>
              <h3>2D Animation</h3>
              <p>Hoạt hình 2D mượt mà với storytelling sâu sắc và character design ấn tượng</p>
            </div>
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">✨</div>
              </div>
              <h3>Motion Graphics</h3>
              <p>Thiết kế chuyển động hiện đại kết hợp typography và visual effects chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="artist-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100+</h3>
              <p>{t('home.stats.works')}</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>{t('home.stats.years')}</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>{t('home.stats.clients')}</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>{t('home.stats.exhibitions')}</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home; 