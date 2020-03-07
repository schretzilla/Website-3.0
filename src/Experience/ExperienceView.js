import React from 'react';

import Row from 'react-bootstrap/Row';

import Details from './Components/Details';

import '../style/custom.css';

const ExperienceView = props => {
  return (
    <>
      <Row className="justify-content-center">
        <h2 className="subject-header">Experience</h2>
      </Row>
      <Details />
    </>
  );
};

export default ExperienceView;
