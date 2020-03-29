import React from "react";
import renderer from "react-test-renderer";

import Header from "./Components/Header/HeaderView";
import Intro from "./Components/Introduction/Intro";
import ExperienceView from "./Components/Experience/ExperienceView";
import Details from "./Components/Experience/Components/Details";
import Project from "./Components/Projects/components/Project";
import TechStack from "./Components/TechStack/TechStack";
import Education from "./Components/Education/EducationView";
import ExtraActivities from "./Components/ExtraActivities/ExtraActivities";

import trailCamera from "./Images/Projects/trail-camera-placement.jpeg";
import HikingLogo from "./Images/Experience/gone-hiking-logo.png";

describe("the Header component", () => {
  it("snapshot test", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("the Intro component", () => {
  it("snapshot test", () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("the Experience component", () => {
  describe("snapshot test", () => {
    it("Full Experience View", () => {
      const tree = renderer.create(<ExperienceView />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("experience details with link and image logo", () => {
      const testExpData = {
        company: "Cross Country Traveler",
        logo: HikingLogo,
        title: "Solo Adventurer",
        dates: "August/2016-January/2017",
        teams: "",
        description:
          "A solo 6 month adventure across America summarized using D3",
        keyPoints: [
          "Volunteered with Samaritain's Purse helping Louisiana flood victims",
          "Summited 24 of Colorado’s 14,000+ foot mountains",
          "Confirmed strategy and required actions for my five-year plan"
        ],
        link: {
          address: "https://schretzilla.github.io/adventure-america/index",
          name: "here"
        }
      };
      const tree = renderer
        .create(<Details experienceData={testExpData} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("the Projects component", () => {
  const projectData = {
    name: "Smart Bird Feeder!",
    catchPhrase: "Building species saving technology",
    blurb:
      "I had the opportunity to lead a team of engineers as we worked with the San Diego Zoo to develop a Smart Bird Feeder that monitors the health of the Hawaiian Crows. At the conclusion of a month the device we created included the following:",
    extraDetails: [
      "A bird feeder that includes a variety of sensors to track the diet of each bird",
      "A repurposed android cell phone that records video of the crows as they feed",
      "Remote login capabilities to watch from the bird feeder at any time",
      "A user interface for tracking each bird’s status"
    ],
    tools: ["Android SDK", "Java", "A 3D Enclosure", "Teensy 3.2"],
    team: ["Avery Bodenstein", "Andrew Miyaguchi", "John Madden"],
    date: "July/2019",
    media: {
      type: "image",
      name: "trail camera 3-D model",
      src: trailCamera
    }
  };
  describe("snapshot tests", () => {
    it("image on right", () => {
      const tree = renderer
        .create(<Project projectData={projectData} indexNumber="1" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("image on left", () => {
      const tree = renderer
        .create(<Project projectData={projectData} indexNumber="2" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("the Tech Stack component", () => {
  it("snapshot test", () => {
    const tree = renderer.create(<TechStack />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("the Education component", () => {
  it("snapshot test", () => {
    const tree = renderer.create(<Education />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("the Extra Activities component", () => {
  it("snapshot test", () => {
    const tree = renderer.create(<ExtraActivities />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
