import React from 'react';

import Row from 'react-bootstrap/Row';

import Details from './Components/Details';

import { experienceData } from '../Data/Experience';
import '../style/custom.css';

const ExperienceView = props => {
  return (
    <>
      <Row className="justify-content-center">
        <h2 className="subject-header">Experience</h2>
      </Row>
      <Details experienceData={experienceData} />
    </>
  );
};

export default ExperienceView;
