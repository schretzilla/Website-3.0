import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Jump from "react-reveal/Jump";
import profilePhoto from "../../Images/Introduction/Profile-Photo.png";
import githubIcon from "../../Images/Introduction/github-icon.svg";
import linkedInIcon from "../../Images/Introduction/linkedin-logo.png";
import resumeIcon from "../../Images/Introduction/resume-icon.png";

const Intro = () => {
  const style = {
    introContainer: {
      marginTop: "40px",
      marginBottom: "50px",
    },
    icon: {
      height: "70px",
      margin: "10px",
    },
  };
  return (
    <Row style={style.introContainer}>
      <Col sm={12} md={6}>
        <img className="img-fluid" src={profilePhoto} alt="scott-schretzenmaier-profile" />
      </Col>
      <Col sm={12} md={6}>
        <Jump delay={1000}>
          <h1 className="hello-header">Hi, I&apos;m Scott</h1>
        </Jump>
        <p className="about-me">
          I build software that supports real-world operations — currently focused on manufacturing
          environments where complexity is high and clarity matters. My background is in backend and
          systems architecture, and I work across the stack when it accelerates execution.
        </p>
        <p className="about-me">
          Outside of engineering, I&apos;m usually training for long endurance events or chasing
          waves near the Pacific. I&apos;m drawn to hard things that reward discipline and compound
          effort.
        </p>

        <ul className="list-inline">
          <li>
            <strong>Email:</strong> <a href="mailto:schretzy929@gmail.com">schretzy929@gmail.com</a>
          </li>
          <li>
            <strong>Location:</strong> Los Angeles, CA
          </li>
        </ul>

        <Row className="justify-content-center">
          <Col sm={12} md={12}>
            <a href="https://github.com/schretzilla" target="_blank" rel="noopener noreferrer">
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
      </Col>
    </Row>
  );
};

export default Intro;
