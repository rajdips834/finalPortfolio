import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Imu from "../assets/Rajdip.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [""],
                autoStart: true,
                loop: false,
              }}
            />
            <Typewriter
              options={{
                strings: [
                  "developer",
                  "musician",
                  "designer",
                  "streamer",
                  "React",
                  "Javascript",
                  "Angular",
                ],
                autoStart: true,

                loop: true,
              }}
            />
          </div>
        </h2>

        <h3 className="tagline">I do Fullstack Dev, Ui/Ux and Music.</h3>

        <p className="paragraph">
          I'm a Fullstack developer with a passion for writing code and creating
          music. When I'm not crafting web applications, you'll find me
          strumming a guitar or tickling the ivories. My love for harmonizing
          different elements extends from my development projects to my musical
          pursuits.
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://drive.google.com/file/d/1gQqUueLCvaMLRFX4mLw_LzbMILDoJffb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Dont Click this
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              Say Hello
            </Link>
          </button>
        </div>
      </div>
      <img
        src={Imu}
        style={{ height: "700px", width: "auto" }}
        alt="Fiz"
        className="hero-image"
      />
    </div>

    <div className="social-icons">
      <a href="https://github.com/rajdips834" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/rajdipsinha/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>

      <a
        href="https://www.twitter.com/rajdips834"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>

      <a
        href="https://www.instagram.com/rukjaaraj/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram" />
      </a>
    </div>
  </div>
);

export default Hero;
