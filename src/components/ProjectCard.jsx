import React from "react";
import "./ProjectCard.css";
import expenseCalc from "../assets/expenseCalc.png";
import foodApp from "../assets/foodApp.png";
import conversicats from "../assets/Conversicats.png";
import myShell from "../assets/myShell.png";
const ProjectCard = (props) => (
  <div className="project-card">
    {props.source_link !== "N/A" ? (
      <a href={props.source_link} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-arrow-right arrow" />
      </a>
    ) : (
      <span />
    )}
    <i className="fa-regular fa-arrow-up-right" />
    <img
      src={
        props.title == "ExpenseCalc"
          ? expenseCalc
          : props.title == "Foodify"
          ? foodApp
          : props.title == "Conversicats"
          ? conversicats
          : props.title == "Rajdip's Shell"
          ? myShell
          : "https://imgur.com/gpope2A"
      }
      alt=""
    />
    <div className="card-description">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="stacks">
        {props.stacks.map((stack, id) => (
          <button className="tech-stack" key={id}>
            {stack}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
