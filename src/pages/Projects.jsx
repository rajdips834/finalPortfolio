import React from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
        Deployed 20+ prototypes, websites, mobile applications and 3D models.
        Collaborated in projects with 10+ clients. Feel free to contact me for
        any inquiries.
      </p>
      <div className="achievements-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
