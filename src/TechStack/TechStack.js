import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import cSharpIcon from "../Images/csharp.png";
import bootstrapIcon from "../Images/bootstrap.png";
import javaScriptIcon from "../Images/javascript.png";
import pythonIcon from "../Images/python.png";
import reactIcon from "../Images/react-logo.svg";
import javaIcon from "../Images/java-logo.png";

import Fade from "react-reveal/Fade";

import Flippy, { FrontSide, BackSide } from "react-flippy";

const FlippyStyle = {
  width: "200px",
  height: "300px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center"
};

const flipCard = (img, description) => {
  return (
    <Flippy flipOnHover={true} flipDirection="vertical">
      <FrontSide>
        <img
          src={img}
          title={description}
          alt={description}
          className="rounded mx-auto d-block"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </FrontSide>
      <BackSide>
        <p>{description}</p>
      </BackSide>
    </Flippy>
  );
};

const TechStack = props => {
  return (
    <Fade bottom>
      <Row className="justify-content-center">
        <h2 className="subject-header">Tech Stack</h2>
      </Row>

      <Row className="justify-content-center">
        <Col xs={4}>{flipCard(cSharpIcon, "C#")}</Col>
        <Col xs={4}>{flipCard(bootstrapIcon, "Bootstrap CSS Framework")}</Col>
        <Col xs={4}>{flipCard(reactIcon, "React Framework")}</Col>
      </Row>
      <Row>
        <Col xs={4}>{flipCard(javaScriptIcon, "JavaScript")}</Col>
        <Col xs={4}>{flipCard(javaIcon, "Java")}</Col>
        <Col xs={4}>{flipCard(pythonIcon, "Python")}</Col>
      </Row>

      <hr className="featurette-divider" />
    </Fade>
  );
};

export default TechStack;
