import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function ProjectModal({project, isDark, onClose}) {
  if (!project) {
    return null;
  }
  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className={isDark ? "dark-mode project-modal" : "project-modal"}
        onClick={e => e.stopPropagation()}
      >
        <button
          className={isDark ? "dark-mode modal-close" : "modal-close"}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className={isDark ? "dark-mode modal-title" : "modal-title"}>
          {project.projectName}
        </h3>
        <p className={isDark ? "dark-mode modal-tagline" : "modal-tagline"}>
          {project.tagline}
        </p>
        <div className="modal-stack">
          {project.techStack.map((tech, i) => (
            <span key={i} className={isDark ? "dark-mode stack-chip" : "stack-chip"}>
              {tech}
            </span>
          ))}
        </div>
        <ul className={isDark ? "dark-mode modal-highlights" : "modal-highlights"}>
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <a
          className="modal-github-link"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
}

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!bigProjects.display) {
    return null;
  }
  return (
    <>
      <div className="main" id="projects">
        <div>
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {bigProjects.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
              >
                <div className="project-detail">
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-tagline" : "card-tagline"
                    }
                  >
                    {project.tagline}
                  </p>
                  <span
                    className={
                      isDark ? "dark-mode card-hint" : "card-hint"
                    }
                  >
                    View details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
