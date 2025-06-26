import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Một nền tảng thương mại điện tử hiện đại với React và Node.js. Bao gồm quản lý sản phẩm, giỏ hàng, thanh toán và dashboard admin.",
      image: "🛒",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với giao diện drag & drop, real-time updates và collaboration features.",
      image: "📋",
      technologies: ["React", "TypeScript", "Firebase", "DnD Kit"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard thời tiết với dự báo 7 ngày, biểu đồ tương tác và thông báo thời tiết.",
      image: "🌤️",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Website portfolio responsive với dark mode, animations và contact form.",
      image: "💼",
      technologies: ["React", "TypeScript", "CSS3", "EmailJS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web"
    },
    {
      id: 5,
      title: "Social Media Clone",
      description: "Clone mạng xã hội với features như posts, comments, likes và real-time chat.",
      image: "📱",
      technologies: ["React", "TypeScript", "Socket.io", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      category: "mobile"
    },
    {
      id: 6,
      title: "Game Development",
      description: "Game 2D với physics engine, sound effects và multiplayer support.",
      image: "🎮",
      technologies: ["JavaScript", "Canvas API", "Web Audio API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "game"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'web', label: 'Web App' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'game', label: 'Game' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Dự Án Của Tôi</h2>
        
        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">
                  {project.image}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Xem Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>Không có dự án nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 