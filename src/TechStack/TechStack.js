import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import cSharpIcon from '../Images/csharp.png';
import bootstrapIcon from '../Images/bootstrap.png';
import djangoIcon from '../Images/django.png';
import javaScriptIcon from '../Images/javascript.png';
import dotNetIcon from '../Images/microsoft-net.png';
import pythonIcon from '../Images/python.png';

const TechStack = props => {
  return (
    <>
      <Row>
        <h2 className="subject-header">My current tech stack</h2>
      </Row>

      <Row className="justify-content-center">
        <Col xs={4}>
          <img src={cSharpIcon} alt="c#" />
        </Col>
        <Col xs={4}>
          <img src={bootstrapIcon} alt="bootstrap css framework" />
        </Col>
        <Col xs={4}>
          <img src={djangoIcon} alt="django" />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <img src={javaScriptIcon} alt="javascript" />
        </Col>
        <Col xs={4}>
          <img src={dotNetIcon} alt=".Net Framework" />
        </Col>
        <Col xs={4}>
          <img src={pythonIcon} alt="python" />
        </Col>
      </Row>

      <hr className="featurette-divider" />
    </>
  );
};

export default TechStack;
