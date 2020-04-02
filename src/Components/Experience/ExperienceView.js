import React from "react";

import Row from "react-bootstrap/Row";

import Fade from "react-reveal/Fade";
import Details from "./Components/Details";

import experienceData from "../../Data/Experience";

const ExperienceView = () => {
  const detailSections = experienceData.map((experienceObj) => (
    <Fade bottom key={experienceObj.company + experienceObj.title}>
      <Details experienceData={experienceObj} />
    </Fade>
  ));
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
