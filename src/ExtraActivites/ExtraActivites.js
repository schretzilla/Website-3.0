import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ActivitySlider from './components/ActivitySlider';

import '../style/custom.css';

const ExtraActivites = () => {
  return (
    <>
      <Row className="justify-content-center">
        <h2 className="subject-header">Away from the Screen</h2>
      </Row>

      <Row className="align-items-center">
        <Col md={1} />
        <Col md={10}>
          <ActivitySlider />
        </Col>
        <Col md={1} />
      </Row>
    </>
  );
};

export default ExtraActivites;
