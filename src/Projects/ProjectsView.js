import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Project from './components/Project';

//TODO: Consolidate
const subjectHeader = {
  fontWeight: 'normal',
  color: '#000000',
  wordSpacing: '2pt',
  fontSize: '70px',
  fontFamily: 'georgia',
  textAlign: 'center'
};

const ProjectView = props => {
  return (
    <>
      <Row>
        <h2 style={subjectHeader}>Projects</h2>
      </Row>
      <Project />
    </>
  );
};

export default ProjectView;
