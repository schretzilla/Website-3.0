import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fade from "react-reveal/Fade";
import pittLogo from "../../Images/Education/pitt-logo.png";
import greenCheck from "../../Images/Education/green-check.png";
import graduationPhoto from "../../Images/Education/graduation.jpg";

const Education = () => (
  <Fade bottom>
    <Row className="justify-content-center">
      <h2 className="subject-header">Education</h2>
    </Row>

    <Row>
      <Col md={6} sm={12}>
        <img src={graduationPhoto} alt="standing with my step dad at graduation" />
      </Col>
      <Col md={6} sm={12}>
        <img src={pittLogo} className="rounded" alt="University of Pittsburgh logo" />
        <ul className="list-unstyled">
          <li>Graduated May 2014</li>
          <li>GPA: 3.07</li>
        </ul>

        <ul className="list-unstyled">
          <li>
            <img src={greenCheck} alt="green check mark" />
            <em>Bachelor of Science in Applied Mathematics</em>
          </li>
          <li>
            <img src={greenCheck} alt="green check mark" />
            <em>Bachelor of Arts in Anthropology</em>
          </li>
          <li>
            <img src={greenCheck} alt="green check mark" />
            <em>Minor in Computer Science</em>
          </li>
        </ul>
      </Col>
    </Row>

    <hr className="featurette-divider" />
  </Fade>
);

export default Education;
