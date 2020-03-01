import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

import Intro from './Introduction/Intro';
import ExperienceView from './Experience/ExperienceView';

function App() {
  return (
    <Container>
      <Intro />
      <ExperienceView />
    </Container>
  );
}

export default App;
