import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = () => toast("Wow so easy !");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nnumsqs",
        "template_nlqzrsa",
        form.current,
        "L1nXwHkN6KpTJN_Uv"
      )
      .then(
        (result) => {
          <ToastContainer />;
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="footer-left">
        <h1>Wanna Build something cool? </h1>
        <button className="hire-me" style={{ marginLeft: "20%" }}>
          <a href="mailto:rajdips834@gmail.com">Hit me up</a>
        </button>
      </div>
      <div className="footer-right">
        <h3>I'M ALWAYS INTERESTED ABOUT</h3>
        <div className="interests">
          <p>Marvel</p>
          <p>Hackathons</p>
          <p>Live Streaming</p>

          <p>Music</p>
          <p>React</p>
          <p>Express</p>

          <p>Angular</p>
          <p>Unity</p>
        </div>

        <hr />

        <div className="social-icons">
          <a
            href="https://github.com/rajdips834"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajdipsinha"
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

        <hr />
      </div>
    </div>
  );
};

export default Contact;
