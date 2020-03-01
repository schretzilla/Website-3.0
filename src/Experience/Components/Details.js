import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Details = props => {
  return (
    <>
      <Row>
        <Col sm={8}>
          <h2>Company Name/ logo</h2>
          <h2>Job title</h2>
        </Col>
        <Col sm={4}>
          <h2>from date / to date</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <p>Job highlight or description gos on this line</p>
          <p>Team Name Goes on this line</p>
        </Col>

        <ul>
          <li>This is a list element saying what you did</li>
          <li>This is a list element saying more of what you did</li>
        </ul>
      </Row>
    </>
  );
};

export default Details;
