import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Details = props => {
  const { experienceData } = props;
  const { company, title, dates, description, teams, keyPoints, link, logo } = experienceData;

  const style = {
    logo: {
      width: "327px",
    },
    container: {
      paddingBottom: "50px",
    },
  };
  const keyPointElement = keyPoints.map(keyPoint => (
    <li key={`key-point-${company}-${title}`} className="job-key-points">
      {keyPoint}
    </li>
  ));

  const linkToExtraData = (
    <a target="_blank" href={link.address} rel="noopener noreferrer">
      {link.name}
    </a>
  );

  return (
    <div style={style.container}>
      <Row>
        <Col md={6}>
          <img src={logo} style={style.logo} alt={`${company}-logo`} />
          <h2 className="job-title">{title}</h2>
        </Col>
        <Col className="subject-sub-date" md={6}>
          <p className="float-md-right">{dates}</p>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <p className="job-description">
            {description} {linkToExtraData}{" "}
          </p>
          <p className="job-team-name">{teams}</p>
        </Col>

        <ul>{keyPointElement} </ul>
      </Row>
    </div>
  );
};

export default Details;
