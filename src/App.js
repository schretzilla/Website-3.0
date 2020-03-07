import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

// Slick Carousel styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Intro from './Introduction/Intro';
import ExperienceView from './Experience/ExperienceView';
import ProjectView from './Projects/ProjectsView';
import TechStack from './TechStack/TechStack';
import EducationView from './Education/EducationView';
import ExtraActivities from './ExtraActivites/ExtraActivites';

import './style/custom.css';

function App() {
  return (
    <Container className="marketing">
      <Intro />
      <ExperienceView />
      <ProjectView />
      <TechStack />
      <EducationView />
      <ExtraActivities />
    </Container>
  );
}

export default App;
