import React from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

// Slick Carousel styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

import HeaderView from "./Components/Header/HeaderView";
import Intro from "./Components/Introduction/Intro";
import ExperienceView from "./Components/Experience/ExperienceView";
import ProjectView from "./Components/Projects/ProjectsView";
import TechStack from "./Components/TechStack/TechStack";
import EducationView from "./Components/Education/EducationView";
import ExtraActivities from "./Components/ExtraActivities/ExtraActivities";

import "./style/custom.css";

const App = () => {
  return (
    <>
      <HeaderView />
      <Container className="marketing">
        <Intro />
        <TechStack />
        <ExperienceView />
        <ProjectView />
        <EducationView />
        <ExtraActivities />
      </Container>
      <Container>
        <Row className="footer">Updated: 1/2022</Row>
      </Container>
    </>
  );
};

export default App;
