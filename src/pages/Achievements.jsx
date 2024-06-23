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
      tech_stack: ["ReactJS", "Netlify", "Github"],
      source_link: "",
    },
    {
      image_url: "https://imgur.com/LUvmbFl",
      project_name: "The website you are currently viewing",
      description:
        "This website was built during my 2nd year of university. It is a personal portfolio website built using ReactJS and hosted on Netlify. The source code is available on Github.",
      tech_stack: ["ReactJS", "Netlify", "Github"],
      source_link: "",
    },

    {
      image_url: "https://imgur.com/gpope2A",
      project_name:
        "Praani - A pet project to help animal shelters and pet owners",
      description:
        "Praani is a pet project of mine where I learned about the challenges faced by animal shelters and pet owners. I built a platform to help animal shelters and pet owners connect and help each other.",
      tech_stack: ["ReactJS", "Firebase", "Github"],
      source_link: "https://github.com/rajdips834/praani",
    },

    {
      image_url: "https://imgur.com/hkTayMd",
      project_name:
        "Healify - A platform to help people streamline medical resources city wide ",
      description:
        "Healify is a pet project of mine where I learned about the challenges faced by people in finding medical resources. I built a platform to help people streamline medical resources city wide.",
      tech_stack: ["Hackathon", "firebase", "leaflet", "Github"],
      source_link: "https://github.com/rajdips834/Healify",
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
