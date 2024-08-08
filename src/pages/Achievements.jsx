import React from "react";
import "./Achievement.css";
import ProjectCard from "../components/ProjectCard";

const Achievements = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url: "https://imgur.com/gpope2A",
      project_name: "Morsify - A Morse Code generator and translator",
      description:
        "A pet project of mine where i learned morse code and implemented a morse code generator and translator using ReactJS. The project is hosted on Netlify and the source code is available on Github.",
      tech_stack: ["ReactJS", "Github"],
      source_link: "",
    },
    {
      image_url: "https://imgur.com/LUvmbFl",
      project_name: "The website you are currently viewing",
      description:
        "This website was built during my 2nd year of university. It is a personal portfolio website built using ReactJS and hosted on Netlify. The source code is available on Github.",
      tech_stack: ["ReactJS", "Github"],
      source_link: "",
    },

    {
      image_url: "https://imgur.com/hkTayMd",
      project_name:
        "Watchlist - A pet project to help me keep track of movies i wanna watch",
      description:
        "Watchlist is something that i decided to make after i found myself forgetting the names of movies i wanted to watch.",
      tech_stack: ["ReactJS", "Firebase", "Github"],
      source_link: "https://watchlist-sand.vercel.app/",
    },
    {
      image_url: "",
      project_name:
        "Expense Calculator - A simple expense calculator built using ReactJS",
      description: "Couldn't stop overspending",
      tech_stack: ["ReactJS", "Firebase", "Github"],
      source_link: "https://expense-calc-iota.vercel.app/",
    },
  ];

  return (
    <div className="achievements" id="achievements">
      <h1 className="title achievement-title">Projects</h1>
      <p className="projects-para">
        During my time at College, I've actively pursued involvement in various
        aspects of campus life. Academically, I've maintained a strong
        commitment to my studies, consistently striving to excel in my
        coursework and achieve second class upper honours. Simultaneously, I've
        also been highly engaged outside the classroom joining student clubs,
        organizations and extracurricular activities. My university years have
        been characterized by a balanced commitment to both academic excellence
        and active participation in extracurricular activities, fostering
        personal growth, and a well-rounded education.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
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

export default Achievements;
