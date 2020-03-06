import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../style/custom.css';

import pittLogo from '../Images/pitt-logo.png';
import greenCheck from '../Images/green-check.png';
import graduationPhoto from '../Images/graduation.jpg';

const Education = props => {
  return (
    <>
      <Row className="featurette">
        <h2 className="subject-header">Education</h2>
      </Row>

      <Row>
        <Col md={6} sm={12}>
          <img src={graduationPhoto} />
        </Col>
        <Col md={6} sm={12}>
          <img src={pittLogo} className="rounded" />
          <ul className="list-unstyled">
            <li>Graduated May 2014</li>
            <li>GPA: 3.07</li>
          </ul>

          <ul className="list-unstyled">
            <li>
              <img src={greenCheck} />
              <em>Bachelor of Science in Applied Mathematics</em>
            </li>
            <li>
              <img src={greenCheck} />
              <em>Bachelor of Arts in Anthropology</em>
            </li>
            <li>
              <img src={greenCheck} />
              <em>Minor in Computer Science</em>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Education;
