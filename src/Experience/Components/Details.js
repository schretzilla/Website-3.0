import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../style/custom.css';

const Details = props => {
  const { experienceData } = props;
  const {
    company,
    title,
    dates,
    description,
    teams,
    keyPoints,
    link
  } = experienceData;

  const keyPointElement = keyPoints.map((keyPoint, i) => {
    return (
      <li key={`key-point-${company}-${i}`} className="job-key-points">
        {keyPoint}
      </li>
    );
  });

  const linkToExtraData = (
    <a target="_blank" href={link.address} rel="noopener noreferrer">
      {link.name}
    </a>
  );

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
          <p className="job-description">
            {description} {linkToExtraData}{' '}
          </p>
          <p className="job-team-name">{teams}</p>
        </Col>

        <ul>{keyPointElement} </ul>
      </Row>
      <hr className="featurette-divider" />
    </>
  );
};

export default Details;
