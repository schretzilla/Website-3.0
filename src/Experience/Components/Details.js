import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const style = {
  companyName: {
    fontWeight: 'normal',
    color: '#000000',
    letterSpacing: '2pt',
    wordSpacing: '2pt',
    fontSize: '50px',
    textAlign: 'left',
    fontFamily: 'georgia',
    lineHeight: '1'
  },
  jobTitle: {
    fontWeight: 'normal',
    color: '#000000',
    wordSpacing: '2pt',
    fontSize: '40px',
    textAlign: 'left',
    fontFamily: 'georgia'
  },
  dateStyle: {
    fontWeight: 'normal',
    color: '#000000',
    marginTop: '10px',
    fontSize: '30px',
    fontFamily: 'georgia',
    lineHeight: '1'
  },
  jobDescription: {
    fontSize: '25px',
    color: '#515151'
  },
  teamName: {
    fontWeight: 'normal',
    color: '#000000',
    fontSize: '30px',
    textAlign: 'left',
    fontFamily: 'georgia'
  },
  jobKeyPoints: {
    fontWeight: 'normal',
    color: '#000000',
    fontSize: '20px',
    textAlign: 'left',
    fontFamily: 'georgia'
  }
};

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
      <li key={`key-point-${company}-${i}`} style={style.jobKeyPoints}>
        {keyPoint}
      </li>
    );
  });
  return (
    <>
      <Row>
        <Col sm={8}>
          <h2 style={style.companyName}>{company}</h2>
          <h2 style={style.jobTitle}>{title}</h2>
        </Col>
        <Col sm={4}>
          <h2 style={style.dateStyle}>{dates}</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <p style={style.jobDescription}>{description}</p>
          <p style={style.teamName}>{teams}</p>
        </Col>

        <ul>{keyPointElement} </ul>
      </Row>
    </>
  );
};

export default Details;
