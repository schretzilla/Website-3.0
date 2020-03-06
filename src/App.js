import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

import Intro from './Introduction/Intro';
import ExperienceView from './Experience/ExperienceView';
import ProjectView from './Projects/ProjectsView';
import TechStack from './TechStack/TechStack';

function App() {
  return (
    <Container>
      <Intro />
      <ExperienceView />
      <ProjectView />
      <TechStack />
    </Container>
  );
}

export default App;
