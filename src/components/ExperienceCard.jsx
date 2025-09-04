import React from "react";
import "./ExperienceCard.css";

// Logo image imports
import bluebricks from "../assets/BlueBricks.png";
import renderbit from "../assets/Renderbit.png";
import techRavens from "../assets/TechRavens.png";
import gdsc from "../assets/GDSC.png";
import dyyota from "../assets/dyyota_logo.jpeg"

// Map each company to its logo
const imageMap = {
  GDSC: gdsc,
  BlueBricks: bluebricks,
  Renderbit: renderbit,
  "The Tech Ravens": techRavens,
  Dyyota:dyyota
};

const ExperienceCard = ({ company, title }) => {
  const image = imageMap[company] || "https://imgur.com/gpope2A";

  return (
    <div className="project-card">
      <img src={image} alt={`${company} logo`} />
      <div className="card-description">
        <h3>{company}</h3>
        <p className="designation">{title}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
