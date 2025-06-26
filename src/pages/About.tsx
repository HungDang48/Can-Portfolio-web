import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About: React.FC = () => {
  const { t } = useTranslation();
  const skills = [
    { name: 'Digital Painting', level: 95 },
    { name: 'Character Design', level: 90 },
    { name: 'Landscape Art', level: 88 },
    { name: 'Portrait Drawing', level: 92 },
    { name: 'Concept Art', level: 85 },
    { name: 'Color Theory', level: 90 },
    { name: 'Composition', level: 87 },
    { name: 'Traditional Media', level: 80 }
  ];

  const experiences = [
    {
      year: '6/2024-4/2025',
      title: 'FPTSoftwareInnovation',
      description: '2D Animation, Graphic Design, Motion Graphic, Comtor tiếng Nhật'
    },
    {
      year: '5/2023-4/2024',
      title: 'WemoMedia',
      description: 'Vẽ Storyboard'
    },
    {
      year: '10/2022-12/2022',
      title: 'VuogleClass',
      description: 'Khóa học Vẽ minh họa'
    },
    {
      year: '1/2021-3/2021',
      title: 'T.ARTWorkshop',
      description: 'Khóa học Digital Painting Basic'
    },
    {
      year: '2020-2021',
      title: 'TokyoDesignerGakuin',
      description: 'Illustration course'
    },
    {
      year: '2018-2020',
      title: 'TokyoIkueiJapaneseSchool',
      description: 'Illustration course'
    }
    
  ];

  return (
    <div className="about-page page-transition">
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="about-title">{t('about.title')}</h1>
              <p className="about-intro">{t('about.intro')}</p>
              <p>
                {t('about.intro2')}
              </p>
            </div>
            
            <div className="about-image">
  <div className="artist-portrait">
    <div className="portrait-placeholder">
      <img src="/img/CanAva.png" alt="Lê Văn Can - Artist Portrait" className="portrait-img" />
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      <section className="artist-philosophy">
      <div className="container">
  <h2 className="section-title">{t('about.philosophy')}</h2>
  <div className="philosophy-grid">
    <div className="philosophy-item">
      <div className="philosophy-icon">🎨</div>
      <h3>{t('about.philosophy')}</h3>
      <p>{t('about.philosophy_1')}</p>
    </div>
    <div className="philosophy-item">
      <div className="philosophy-icon">💫</div>
      <h3>{t('about.philosophy')}</h3>
      <p>{t('about.philosophy_2')}</p>
    </div>
    <div className="philosophy-item">
      <div className="philosophy-icon">🌟</div>
      <h3>{t('about.philosophy')}</h3>
      <p>{t('about.philosophy_3')}</p>
    </div>
  </div>
</div>

      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">{t('about.skills')}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">{t('about.experience')}</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 