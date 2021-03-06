import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fade from "react-reveal/Fade";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import cSharpIcon from "../../Images/TechStack/csharp.png";
import bootstrapIcon from "../../Images/TechStack/bootstrap.png";
import javaScriptIcon from "../../Images/TechStack/javascript.png";
import pythonIcon from "../../Images/TechStack/python.png";
import reactIcon from "../../Images/TechStack/react.png";
import javaIcon from "../../Images/TechStack/java.png";

const style = {
  flipCol: {
    marginBottom: "30px",
  },
  techDescription: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  techIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
};

const flipCard = (img, description, link) => (
  <Col xs={6} md={4} xl={2} style={style.flipCol}>
    <Flippy flipOnHover flipDirection="vertical">
      <FrontSide>
        <img
          src={img}
          title={description}
          alt={description}
          className="rounded mx-auto d-block"
          style={style.techIcon}
        />
      </FrontSide>
      <BackSide>
        <div style={style.techDescription}>
          <p className="lead text-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {description}
            </a>
          </p>
        </div>
      </BackSide>
    </Flippy>
  </Col>
);

const TechStack = () => (
  <Fade bottom>
    <Row className="justify-content-center">
      <h2 className="subject-header">Tech Stack</h2>
    </Row>

    <Row className="justify-content-center">
      {flipCard(cSharpIcon, "C#", "https://docs.microsoft.com/en-us/dotnet/csharp/")}
      {flipCard(bootstrapIcon, "Bootstrap CSS Framework", "https://getbootstrap.com/")}
      {flipCard(reactIcon, "React Framework", "https://reactjs.org/")}
      {flipCard(
        javaScriptIcon,
        "JavaScript",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      )}
      {flipCard(
        javaIcon,
        "Java",
        "https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html",
      )}
      {flipCard(pythonIcon, "Python", "https://www.python.org/")}
    </Row>

    <hr className="featurette-divider" />
  </Fade>
);

export default TechStack;
