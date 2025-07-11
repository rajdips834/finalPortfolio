import React from "react";
import "./Experience.css";
import ExperienceCard from "../components/ExperienceCard";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const Experience = () => {
  useScrollFadeIn();

  const ExperienceData = [
    {
      Company: "Renderbit",
      title: "SDE Intern",
      description:
        "• Reviewed existing software code to identify potential issues or areas of improvement.\n• Worked closely with development team members to identify and remove software bugs.\n• Debugged and resolved software bugs, improving system performance and reliability.\n• Built visually rich front-end components.\n• Shadowed team engineers to learn new skills.",
    },

    {
      Company: "BlueBricks",
      title: "FullStack Intern",
      description:
        "• Worked on multiple projects across various platforms.\n• Performed unit testing for multiple products to ensure reliability.\n• Reviewed software code to identify potential areas of improvement.\n• Collaborated with team members to troubleshoot and resolve software bugs.",
    },
    {
      Company: "The Tech Ravens",
      title: "Angular Intern",
      description:
        "• Debugged and resolved software issues, enhancing system performance.\n• Reviewed and optimized existing code for better efficiency.\n• Collaborated with the team to identify, troubleshoot, and eliminate bugs.",
    },
    {
      Company: "GDSC",
      title: "Front-End Lead",
      description:
        "• Built an extensive organisation in my college, with over 1000+ members.\n• Organised multiple events and workshops to help students learn new skills.\n• Collaborated with other organisations to host hackathons and coding competitions.",
    },
  ];

  return (
    <div className="experience-timeline" id="achievements">
      <h1 className="title achievement-title">Experiences</h1>
      <p className="projects-para">
        Over the years, I’ve had the opportunity to work on diverse projects
        across the tech industry, each contributing to my growth as a developer.
        These experiences have helped me build a strong technical foundation
        while also sharpening my problem-solving, collaboration, and
        communication skills. Working alongside talented teams, I’ve been
        fortunate to learn from others, take ownership of challenging tasks, and
        deliver impactful solutions.
      </p>
      <div className="timeline">
        {ExperienceData.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            } fade-in`}
          >
            <ExperienceCard company={exp.Company} title={exp.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
