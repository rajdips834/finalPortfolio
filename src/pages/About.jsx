import React from "react";
import "./About.css";
import ReduxIcon from "../assets/redux.png";
import HTML from "../assets/html.png";
import jQuery from "../assets/jquery.png";
import Ruby from "../assets/ruby.png";
import Flutter from "../assets/flutter.png";
import VSCode from "../assets/vscode.png";
import Figma from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import RSpecLogo from "../assets/rspec.png";
import NPMlogo from "../assets/npm.png";
import GitLogo from "../assets/git.png";
import GitHublogo from "../assets/github.png";
import GMeet from "../assets/meet.png";
import Zoomlogo from "../assets/zoom.webp";
import SkypeLogo from "../assets/skype.png";
import Canva from "../assets/canva.png";
import CDT from "../assets/cdt.png";
import CSS from "../assets/css.png";
import BootStrap from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import Sass from "../assets/sass.png";
import PostMan from "../assets/postman.png";
import MySql from "../assets/mysqll.png";
import Django from "../assets/djangoo.png";
import Firebase from "../assets/firebase.png";
import Unity from "../assets/unity.png";
import xD from "../assets/xdd.png";
import SpringBoot from "../assets/springboot.png";
import Teams from "../assets/TEAMS.png";
import Petronas from "../assets/petronas-logo.png";
import UOB from "../assets/uoblogo.jpg";
import UPM from "../assets/upmm.png";
import Pharmaniaga from "../assets/1200px-Pharmaniaga_logo.png";
import Perkeso from "../assets/perkeso.png";
import Litera from "../assets/litera.png";
import Pixyz from "../assets/pixyz.ico";
import XMind from "../assets/XMins.ico";
import SQLyog from "../assets/SQLyog.ico";
import PostgreSQL from "../assets/postgres.png";
import Android from "../assets/androidstudio.png";
import Blender from "../assets/blender.png";
import DsMax from "../assets/3dsmax.png";
import Vuforia from "../assets/vuforiaa.png";
import Gitlab from "../assets/gitlab.svg";
import Bitbucket from "../assets/bitbucket.png";
import Innoveam from "../assets/innoveam.png";
import Drawio from "../assets/drawio.png";
import RTM from "../assets/rtmm.png";
import MetaSpark from "../assets/metaspark.webp";
import MDEC from "../assets/mdec.webp";
import matlab from "../assets/matlab.png";
import MCMC from "../assets/MCMC_Logo.png";
import Mui from "../assets/mui.png";
import Discord from "../assets/discord.png";
import Netlify from "../assets/netlify.svg";
import Heroku from "../assets/heroku_icon_130912.png";
import Intellij from "../assets/IntelliJ_IDEA_Icon.svg.png";
import Kotlin from "../assets/Kotlin_Icon.svg.png";
import Angular from "../assets/Angular.png";
import framer from "../assets/framer.png";
import illustrator from "../assets/illustrator.png";
import photoshop from "../assets/photoshop.png";
import storybook from "../assets/storybook.png";
const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
        Developer by day, Musican by night. I'm passionate about crafting
        exceptional digital experiences. I bring ideas to life in the virtual
        realm with a keyboard as my paintbrush and lines of code as my canvas.
        Let's join forces and bring your digital dreams to fruition. Get in
        touch, and let's embark on this exciting journey together!
      </p>
      <button className="hire-me">
        <a
          href="https://drive.google.com/file/d/1fGXAjKkaYFEywm8UP8xKyDB-AQ-mYIJf/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          GET MY CV
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
