import React from 'react';

import Row from 'react-bootstrap/Row';

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
      <Row className="featurette">
        <h2 style={subjectHeader}>Projects</h2>
      </Row>
      <Project />
    </>
  );
};

export default ProjectView;
