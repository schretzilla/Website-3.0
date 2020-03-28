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

const style = {
  flipCol: {
    marginBottom: "30px"
  }
};

const flipCard = (img, description) => {
  return (
    <Col xs={6} md={4} lg={2} style={style.flipCol}>
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
    </Col>
  );
};

const TechStack = props => {
  return (
    <Fade bottom>
      <Row className="justify-content-center">
        <h2 className="subject-header">Tech Stack</h2>
      </Row>

      <Row className="justify-content-center">
        {flipCard(cSharpIcon, "C#")}
        {flipCard(bootstrapIcon, "Bootstrap CSS Framework")}
        {flipCard(reactIcon, "React Framework")}
        {flipCard(javaScriptIcon, "JavaScript")}
        {flipCard(javaIcon, "Java")}
        {flipCard(pythonIcon, "Python")}
      </Row>

      <hr className="featurette-divider" />
    </Fade>
  );
};

export default TechStack;
