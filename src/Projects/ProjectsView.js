import React from "react";

import Row from "react-bootstrap/Row";

import Project from "./components/Project";

import { projectData } from "../Data/Projects";

const ProjectView = props => {
  const projectSections = projectData.map((projectObj, i) => {
    return (
      <Project
        key={projectObj.name + i}
        projectData={projectObj}
        indexNumber={i}
      />
    );
  });

  return (
    <>
      <Row className="justify-content-center">
        <h2 className="subject-header">Projects</h2>
      </Row>
      {projectSections}
    </>
  );
};

export default ProjectView;
