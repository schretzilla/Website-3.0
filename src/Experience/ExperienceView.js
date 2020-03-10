import React from 'react';

import Row from 'react-bootstrap/Row';

import Details from './Components/Details';

import { experienceData } from '../Data/Experience';
import '../style/custom.css';

const ExperienceView = props => {
  const detailSections = experienceData.map((experienceObj, i) => {
    return (
      <Details key={experienceObj.company + i} experienceData={experienceObj} />
    );
  });
  return (
    <>
      <Row className="justify-content-center">
        <h2 className="subject-header">Experience</h2>
      </Row>
      {detailSections}
    </>
  );
};

export default ExperienceView;
