import React from "react";

import Row from "react-bootstrap/Row";

import Fade from "react-reveal/Fade";
import Project from "./components/Project";

import projectData from "../../Data/Projects";

const ProjectView = () => {
  const projectSections = projectData.map((projectObj, i) => (
    <Fade bottom key={projectObj.name}>
      <Project projectData={projectObj} indexNumber={i} />
    </Fade>
  ));

  return (
    <>
      <Fade bottom>
        <Row className="justify-content-center">
          <h2 className="subject-header">Projects</h2>
        </Row>
      </Fade>
      {projectSections}
    </>
  );
};

export default ProjectView;
