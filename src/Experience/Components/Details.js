import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const companyName = {
  fontWeight: 'normal',
  color: '#000000',
  letterSpacing: '2pt',
  wordSpacing: '2pt',
  fontSize: '50px',
  textAlign: 'left',
  fontFamily: 'georgia',
  lineHeight: '1'
};

const jobTitle = {
  fontWeight: 'normal',
  color: '#000000',
  wordSpacing: '2pt',
  fontSize: '40px',
  textAlign: 'left',
  fontFamily: 'georgia'
};

const dateStyle = {
  fontWeight: 'normal',
  color: '#000000',
  marginTop: '10px',
  fontSize: '30px',
  fontFamily: 'georgia',
  lineHeight: '1'
};

const jobDescription = {
  fontSize: '25px',
  color: '#515151'
};

const teamName = {
  fontWeight: 'normal',
  color: '#000000',
  fontSize: '30px',
  textAlign: 'left',
  fontFamily: 'georgia'
};

const jobKeyPoints = {
  fontWeight: 'normal',
  color: '#000000',
  fontSize: '20px',
  textAlign: 'left',
  fontFamily: 'georgia'
};

const Details = props => {
  return (
    <>
      <Row>
        <Col sm={8}>
          <h2 style={companyName}>Company Name/ logo</h2>
          <h2 stly={jobTitle}>Job title</h2>
        </Col>
        <Col sm={4}>
          <h2 style={dateStyle}>from date / to date</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <p style={jobDescription}>
            Job highlight or description gos on this line
          </p>
          <p style={teamName}>Team Name Goes on this line</p>
        </Col>

        <ul>
          <li style={jobKeyPoints}>
            This is a list element saying what you did
          </li>
          <li style={jobKeyPoints}>
            This is a list element saying more of what you did
          </li>
        </ul>
      </Row>
    </>
  );
};

export default Details;
