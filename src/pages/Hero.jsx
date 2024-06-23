import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Imu from "../assets/Rajdip.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO! i aM Rajdip</h2>

        <h3 className="tagline">
          I do Fullstack Dev, Ui/Ux, Music and stream on Twitch for fun! And
          Yes, you can call me Raj.
        </h3>

        <p className="paragraph">
          I'm passionate about crafting exceptional digital experiences. I bring
          ideas to life in the virtual realm with a keyboard as my paintbrush
          and lines of code as my canvas. Let's join forces and bring your
          digital dreams to fruition. Get in touch, and let's embark on this
          exciting journey together!
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="" target="_blank" rel="noreferrer">
              Get My CV
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
