import React from "react";
import "./About.css";
import ReduxIcon from "../assets/redux.png";
import HTML from "../assets/html.png";
import jQuery from "../assets/jquery.png";
import VSCode from "../assets/vscode.png";
import Figma from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import NPMlogo from "../assets/npm.png";
import GitLogo from "../assets/git.png";
import GitHublogo from "../assets/github.png";
import GMeet from "../assets/meet.png";
import Zoomlogo from "../assets/zoom.webp";
import SkypeLogo from "../assets/skype.png";
import Canva from "../assets/canva.png";
import CSS from "../assets/css.png";
import BootStrap from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import PostMan from "../assets/postman.png";
import MySql from "../assets/mysqll.png";
import Firebase from "../assets/firebase.png";
import xD from "../assets/xdd.png";
import Teams from "../assets/TEAMS.png";
import SQLyog from "../assets/SQLyog.ico";
import PostgreSQL from "../assets/postgres.png";
import Android from "../assets/androidstudio.png";
import Gitlab from "../assets/gitlab.svg";
import Bitbucket from "../assets/bitbucket.png";
import Mui from "../assets/mui.png";
import Discord from "../assets/discord.png";
import Netlify from "../assets/netlify.svg";
import Heroku from "../assets/heroku_icon_130912.png";
import Intellij from "../assets/IntelliJ_IDEA_Icon.svg.png";
import Angular from "../assets/Angular.png";
import framer from "../assets/framer.png";
import illustrator from "../assets/illustrator.png";
import photoshop from "../assets/photoshop.png";
import storybook from "../assets/storybook.png";
const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">About Me</h2>
      <p className="paragraph about-para">
        Developer by day, Musican by night.
      </p>
      <button className="hire-me">
        <a
          href="https://drive.google.com/file/d/1QG9JEu1ePSArKfiTUeiUl-kLgfpZ5ld8/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Absolutely Dont Click this
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={Angular} alt="" />
          <p>Angular</p>
        </div>
        <div className="skill">
          <img src={framer} alt="" />
          <p>Framer</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={ReduxIcon} alt="" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img src={jQuery} alt="" />
          <p>jQuery</p>
        </div>

        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img src={storybook} alt="" />
          <p>Storybook</p>
        </div>
        <div className="skill">
          <img src={Mui} alt="" />
          <p>MUI</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        {/* <div className="skill">
          <img src={Ruby} alt="" />
          <p>Ruby</p>
        </div> */}
        {/* <div className="skill">
          <img src={Django} alt="" />
          <p>Django</p>
        </div> */}
        {/* <div className="skill">
          <img src={SpringBoot} alt="" />
          <p>SpringBoot</p>
        </div> */}
        <div className="skill">
          <img src={MySql} alt="" />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <img src={SQLyog} alt="" />
          <p>SQLyog</p>
        </div>
        <div className="skill">
          <img src={PostgreSQL} alt="" />
          <p>PostgreSQL</p>
        </div>

        <div className="skill">
          <img src={Firebase} alt="" />
          <p>Firebase</p>
        </div>
      </div>

      <h2 className="skill-title">Mobile</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React Native</p>
        </div>
      </div>
      <h2 className="skill-title">Version Control & Deployment</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={Gitlab} alt="" />
          <p>GitLab</p>
        </div>
        <div className="skill">
          <img src={Bitbucket} alt="" />
          <p>Bitbucket</p>
        </div>
        <div className="skill">
          <img src={Netlify} alt="" />
          <p>Netlify</p>
        </div>
        <div className="skill">
          <img src={Heroku} alt="" />
          <p>Heroku</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={Intellij} alt="" />
          <p>IntelliJ</p>
        </div>

        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={Android} alt="" />
          <p>Android Studio</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
        <div className="skill">
          <img src={xD} alt="" />
          <p>Adobe XD</p>
        </div>
        <div className="skill">
          <img src={illustrator} alt="" />
          <p>Illustrator</p>
        </div>
        <div className="skill">
          <img src={photoshop} alt="" />
          <p>Photoshop</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Discord} alt="" />
          <p>Discord</p>
        </div>
        <div className="skill">
          <img src={Teams} alt="" />
          <p>Teams</p>
        </div>

        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Critical Thinking</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Teamwork</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Creativity</p>

        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Adaptability</p>
      </div>
    </div>
  </section>
);

export default About;
