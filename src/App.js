import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

// Slick Carousel styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeaderView from "./Header/HeaderView";
import Intro from "./Introduction/Intro";
import ExperienceView from "./Experience/ExperienceView";
import ProjectView from "./Projects/ProjectsView";
import TechStack from "./TechStack/TechStack";
import EducationView from "./Education/EducationView";
import ExtraActivities from "./ExtraActivites/ExtraActivites";

import "./style/custom.css";

function App() {
  return (
    <>
      <HeaderView />
      <Container className="marketing">
        <Intro />
        <ExperienceView />
        <ProjectView />
        <TechStack />
        <EducationView />
        <ExtraActivities />
      </Container>
      <Container>
        <Row className="footer">Updated: 3/2020</Row>
      </Container>
    </>
  );
}

export default App;
