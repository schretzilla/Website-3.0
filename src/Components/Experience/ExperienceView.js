import React from "react";

import Row from "react-bootstrap/Row";

import Details from "./Components/Details";

import { experienceData } from "../Data/Experience";
import "../../Style/custom.css";

import Fade from "react-reveal/Fade";

const ExperienceView = props => {
  const detailSections = experienceData.map((experienceObj, i) => {
    return (
      <Fade bottom key={experienceObj.company + i}>
        <Details experienceData={experienceObj} />
      </Fade>
    );
  });
  return (
    <>
      <Fade bottom>
        <Row className="justify-content-center">
          <h2 className="subject-header">Experience</h2>
        </Row>
      </Fade>

      {detailSections}
    </>
  );
};

export default ExperienceView;
