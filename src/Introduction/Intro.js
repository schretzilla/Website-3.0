import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import profilePhoto from "../Images/Profile-Photo.png";
import githubIcon from "../Images/github-icon.png";
import linkedInIcon from "../Images/linkedin-logo.png";
import resumeIcon from "../Images/resume-icon.png";

import "../style/custom.css";

const Intro = props => {
  const style = {
    introContainer: {
      marginTop: "40px"
    },
    icon: {
      height: "37px",
      margin: "5px"
    }
  };
  return (
    <>
      <Row style={style.introContainer}>
        <Col sm={12} md={6}>
          <img
            className="img-fluid"
            src={profilePhoto}
            alt="scott-schretzenmaier-profile"
          />
        </Col>
        <Col sm={12} md={6}>
          <h1 className="hello-header">Hi, I'm Scott</h1>
          <p className="about-me">
            I'm a motivated guy who loves building awesome defense software. I
            prefer backend development but I dabble with a bit of everything.
            I'm also a big fan of agile processes, both in development and in
            life.
          </p>

          <ul className="list-inline">
            <li>
              <strong>Email:</strong> schretzy929@gmail.com
            </li>
            <li>
              <strong>Location:</strong> Los Angeles, CA
            </li>
          </ul>

          <a
            href="https://github.com/schretzilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={style.icon} src={githubIcon} alt="github logo" />
          </a>

          <a
            href="http://www.linkedin.com/in/scott-schretzenmaier-26ab1178"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={style.icon} src={linkedInIcon} alt="Linked In logo" />
          </a>
          <a
            href="https://drive.google.com/open?id=1UzKlP_4Am8XAe6fSScxsFzNZIMKlkeUE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={style.icon} src={resumeIcon} alt="Resume" />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Intro;
