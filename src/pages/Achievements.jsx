import React from "react";
import "./Achievement.css";
import ProjectCard from "../components/ProjectCard";

const Achievements = () => {
  // Manually define the project data
  const projectData = [
    {
      project_name: "Conversicats",
      description:
        "A chat application built using ReactJS,NodeJS,ExpressJS and Socket.io. It allows users to create rooms and chat with each other in real-time. The source code is available on Github.",
      tech_stack: ["ReactJS", "Github", "NodeJS", "ExpressJS", "Socket.io"],
      source_link:
        "https://convers-git-main-rajdips834s-projects.vercel.app/login",
    },
    {
      project_name: "Rajdip's Shell",
      description:
        "A Javascript-based shell that allows users to execute commands and navigate the file system. It is a simple implementation of a shell that can be used to run commands and scripts.",
      tech_stack: ["Javascript", "Computer Science", "Operating System"],
      source_link: "https://github.com/rajdips834/rajdip-shell",
    },
    {
      image_url: "",
      project_name: "Foodify",
      description:
        "This website was built during my 3rd year of university. This is a food ordering system made using ReactJS and hosted on Netlify. The source code is available on Github.",
      tech_stack: ["ReactJS", "Firebase", "Github"],
      source_link: "https://foodify-rajdip.vercel.app/",
    },

    {
      image_url: "",
      project_name: "ExpenseCalc",
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
