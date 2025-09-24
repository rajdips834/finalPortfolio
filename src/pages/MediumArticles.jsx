import React from "react";
import "./MediumArticles.css";
import ProjectCard from "../components/ProjectCard";
const MediumArticles = () => {
  const articleData = [
    {
      project_name: "RAG optimization: Why and How i built Vidhi.Ai",
      description: "An LLM model trained on the constitution of india",
      tech_stack: ["Python", "FastAPI", "Ollama"],
      source_link:
        "https://medium.com/@rajdips834/rag-optimization-why-and-how-i-built-vidhi-ai-af2d25b4a6c8",
    },
    {
      project_name: "🛠️ How to Build a Simple Backend (The Layered Way)",
      description:
        "An example of layered architecture in backend for future references.",
      tech_stack: ["Javascript", "Node", "MongoDB", "Express"],
      source_link:
        "https://medium.com/@rajdips834/%EF%B8%8F-how-to-build-a-simple-backend-the-layered-way-bd4272e4726f",
    },
  ];
  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Articles</h1>

      <div className="achievements-container">
        {articleData.map((project, id) => (
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

export default MediumArticles;
