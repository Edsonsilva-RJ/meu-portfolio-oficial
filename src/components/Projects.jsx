import React from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "Gestão de Plantas",
    description: "Dashboard Full Stack para monitoramento de rega e saúde de plantas domésticas.",
    tech: ["React", "JavaScript", "CSS"],
    linkGithub: "https://github.com/Edsonsilva-RJ/Gerenciador-de-plantas.git",
    linkDemo: ""
  },
  {
    title: "Blog de Fotografia",
    description: "Web app focado em performance e UI/UX para exibição de portfólios fotográficos.",
    tech: ["Vite", "React", "Responsive Design"],
    linkGithub: "https://github.com/Edsonsilva-RJ/TrabalhoFront-blog.git",
    linkDemo: ""
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="portfolio">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-techs">
              {project.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links">
                <a href={project.linkGithub} target="_blank" rel="noreferrer">GitHub</a>
                
                {/* Só mostra o link de Demo se houver uma URL preenchida */}
                {project.linkDemo && (
                    <a href={project.linkDemo} target="_blank" rel="noreferrer">Demo</a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;