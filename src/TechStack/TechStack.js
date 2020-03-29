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
  },
  techIcon: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
};

const flipCard = (img, description, link) => {
  return (
    <Col xs={6} md={4} xl={2} style={style.flipCol}>
      <Flippy flipOnHover={true} flipDirection="vertical">
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
          <p className="lead text-center" style={style.techDescription}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {description}
            </a>
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
        {flipCard(
          cSharpIcon,
          "C#",
          "https://docs.microsoft.com/en-us/dotnet/csharp/"
        )}
        {flipCard(
          bootstrapIcon,
          "Bootstrap CSS Framework",
          "https://getbootstrap.com/"
        )}
        {flipCard(reactIcon, "React Framework", "https://reactjs.org/")}
        {flipCard(
          javaScriptIcon,
          "JavaScript",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        )}
        {flipCard(
          javaIcon,
          "Java",
          "https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html"
        )}
        {flipCard(pythonIcon, "Python", "https://www.python.org/")}
      </Row>

      <hr className="featurette-divider" />
    </Fade>
  );
};

export default TechStack;
