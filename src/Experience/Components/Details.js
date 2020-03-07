import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../style/custom.css';

const Details = props => {
  const company = 'Company Name/ logo';
  const title = 'Job title';
  const dates = 'from date / to date';
  const description = 'Job highlight or description gos on this line';
  const teams = 'Team Name Goes on this line';
  const keyPoints = [
    'This is a list element saying what you did',
    'This is a list element saying more of what you did'
  ];

  const keyPointElement = keyPoints.map((keyPoint, i) => {
    return (
      <li key={`key-point-${company}-${i}`} className="job-key-points">
        {keyPoint}
      </li>
    );
  });
  return (
    <>
      <Row>
        <Col sm={8}>
          <h2 className="company-name">{company}</h2>
          <h2 className="job-title">{title}</h2>
        </Col>
        <Col className="subject-sub-date" sm={4}>
          <h2>{dates}</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <p className="job-description">{description}</p>
          <p className="job-team-name">{teams}</p>
        </Col>

        <ul>{keyPointElement} </ul>
      </Row>
      <hr className="featurette-divider" />
    </>
  );
};

export default Details;
