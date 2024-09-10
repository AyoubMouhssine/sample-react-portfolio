import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />
      <div className="info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="card-footer">
          <div className="card-footer__links">
            {project.website && (
              <a href={project.github} target="_blank">
                <button>
                  <FontAwesomeIcon icon={faGithub} /> Github
                </button>
              </a>
            )}
            <a href={project.website} target="_blank">
              <button>Live Demo</button>
            </a>
          </div>
          <span className="image-date">{project.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
