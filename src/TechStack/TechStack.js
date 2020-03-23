import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import cSharpIcon from "../Images/csharp.png";
import bootstrapIcon from "../Images/bootstrap.png";
import djangoIcon from "../Images/django.png";
import javaScriptIcon from "../Images/javascript.png";
import dotNetIcon from "../Images/microsoft-net.png";
import pythonIcon from "../Images/python.png";
import reactIcon from "../Images/react-logo.svg";
import javaIcon from "../Images/java-logo.png";

const TechStack = props => {
  const style = {
    icon: {
      maxHeight: "135px"
    }
  };
  return (
    <>
      <Row className="justify-content-center">
        <h2 className="subject-header">My current tech stack</h2>
      </Row>

      <Row className="justify-content-center">
        <Col xs={4}>
          <img src={cSharpIcon} alt="c#" className="rounded mx-auto d-block" />
        </Col>
        <Col xs={4}>
          <img
            title="Bootstrap CSS"
            src={bootstrapIcon}
            style={style.icon}
            alt="bootstrap css framework"
            className="rounded mx-auto d-block"
          />
        </Col>
        <Col xs={4}>
          <img
            title="React Framework"
            src={reactIcon}
            style={style.icon}
            alt="django"
            className="rounded mx-auto d-block"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <img
            title="JavaScript"
            src={javaScriptIcon}
            style={style.icon}
            alt="javascript"
            className="rounded mx-auto d-block"
          />
        </Col>
        <Col xs={4}>
          <img
            title="Java"
            src={javaIcon}
            style={style.icon}
            alt="Java"
            className="rounded mx-auto d-block"
          />
        </Col>
        <Col xs={4}>
          <img
            title="python"
            src={pythonIcon}
            style={style.icon}
            alt="python"
            className="rounded mx-auto d-block"
          />
        </Col>
      </Row>

      <hr className="featurette-divider" />
    </>
  );
};

export default TechStack;
