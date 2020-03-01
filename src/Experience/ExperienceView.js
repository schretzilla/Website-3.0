import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Details from './Components/Details';

const subjectHeader = {
  fontWeight: 'normal',
  color: '#000000',
  wordSpacing: '2pt',
  fontSize: '70px',
  textAlign: 'left',
  fontFamily: 'georgia',
  textAlign: 'center'
};

const ExperienceView = props => {
  return (
    <>
      <Row>
        <h2 style={subjectHeader}>Experience</h2>
      </Row>
      <Details />
    </>
  );
};

export default ExperienceView;
