import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'CSS/SCSS', level: 88 },
    { name: 'HTML', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'Responsive Design', level: 85 }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Về Tôi</h2>
        
        <div className="about-content">
           
          
          <div className="about-skills">
            <h3>Kỹ Năng Của Tôi</h3>
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
        </div>
      </div>
    </section>
  );
};

export default About; 