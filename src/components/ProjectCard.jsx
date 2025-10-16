import React from "react";
import "./ProjectCard.css";
import expenseCalc from "../assets/expenseCalc.png";
import foodApp from "../assets/foodApp.png";
import conversicats from "../assets/Conversicats.png";
import myShell from "../assets/myShell.png";
import vidhi from "../assets/vidhi.png";
import layeredBackend from "../assets/layeredBackend.png";
import Rag from "../assets/RAG.png";
import ssh from "../assets/ssh.png"
import hardway from "../assets/hardway.png"
const imageMap = {
  ExpenseCalc: expenseCalc,
  Foodify: foodApp,
  Conversicats: conversicats,
  "Rajdip's Shell": myShell,
  "Vidhi.Ai": vidhi,
  "🛠️ How to Build a Simple Backend (The Layered Way)": layeredBackend,
  "RAG optimization: Why and How i built Vidhi.Ai": Rag,
  "SSH + Git: What, Why, How, and Where?":ssh,
  "New Company Assignment and the Lessons I Learnt the Hard Way":hardway
};

const ProjectCard = ({ title, description, stacks, source_link }) => {
  const image = imageMap[title] || "https://imgur.com/gpope2A";

  return (
    <div className="project-card">
      {source_link !== "N/A" && (
        <a href={source_link} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-arrow-right arrow" />
        </a>
      )}
      <img src={image} alt={`${title} preview`} className="project-img" />
      <div className="card-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="stacks">
          {stacks.map((stack, id) => (
            <span className="tech-stack" key={id}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
