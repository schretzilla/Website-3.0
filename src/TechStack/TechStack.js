import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import cSharpIcon from "../Images/tech-stack/csharp.png";
import bootstrapIcon from "../Images/tech-stack/bootstrap.png";
import javaScriptIcon from "../Images/tech-stack/javascript.png";
import pythonIcon from "../Images/tech-stack/python.png";
import reactIcon from "../Images/tech-stack/react.png";
import javaIcon from "../Images/tech-stack/java.png";

import Fade from "react-reveal/Fade";

import Flippy, { FrontSide, BackSide } from "react-flippy";

const style = {
  flipCol: {
    marginBottom: "30px"
  },
  techDescription: {
    marginTop: "10%"
  }
};

const flipCard = (img, description) => {
  return (
    <Col xs={6} md={4} xl={2} style={style.flipCol}>
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
          <p className="lead text-center" style={style.techDescription}>
            {description}
          </p>
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
