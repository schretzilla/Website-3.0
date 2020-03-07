import React from 'react';

import Row from 'react-bootstrap/Row';

import Project from './components/Project';

const ProjectView = props => {
  return (
    <>
      <Row className="justify-content-center">
        <h2 className="subject-header">Projects</h2>
      </Row>
      <Project />
    </>
  );
};

export default ProjectView;
