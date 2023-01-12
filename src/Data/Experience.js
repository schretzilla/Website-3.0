import NorthropLogo from "../Images/Experience/northrop-logo.png";
import UpmcLogo from "../Images/Experience/upmc_logo.jpg";
import HikingLogo from "../Images/Experience/gone-hiking-logo.png";
import AmazonLogo from "../Images/Experience/amazon-logo.png";

const experienceData = [
  {
    company: "Amazon",
    logo: AmazonLogo,
    title: "Software Engineer",
    teams: "Prime Video, AMP",
    dates: "June/2020-Current",
    description:
      "Led the team of engineers who own playback functionality across all iOS devices for Amazon’s live radio app",
    keyPoints: [
      "Worked with product and project managers to roll out all playback features on time without causing regressions or defects",
      "Designed the state machine that manages the player’s state and emits telemetry for tracking the user’s experience",
      "Designed the automated integration testing suite for all playback components utilizing AWS Device Farm",
      "Implemented live HLS streaming functionality on Amazon’s C++ cross-platform player to unblock AMP’s Android and iOS cross-platform playback capabilities",
    ],
    link: {
      address: "https://www.onamp.com/",
      name: "AMP",
    },
  },
  {
    company: "Northrop Grumman",
    logo: NorthropLogo,
    title: "Software Engineer",
    teams: "B-1 Lancer, B-2 Spirit, RAGE & GBSD",
    dates: "March/2017-June/2020",
    description:
      "Led multiple agile engineering teams in designing and developing mission critical software for the Air Force",
    keyPoints: [
      "Created algorithms for tracking GBSD design changes using their modeling software’s restful API",
      "Developed and implemented the release scheduling and weapon allocation algorithms for the B-1 Lancer’s MPE",
      "Implemented the foundation for automating integration and unit tests for safer continuous development",
      "Utilized agile methodologies to plan and prioritize the team’s tasks based on the user’s needs",
      "Mentored multiple junior engineers by providing both technical and career guidance",
    ],
    link: {
      address: "",
      name: "",
    },
  },
  {
    company: "Cross Country Traveler",
    logo: HikingLogo,
    title: "Solo Adventurer",
    dates: "August/2016-January/2017",
    teams: "",
    description: "A solo 6 month adventure across America summarized using D3",
    keyPoints: [
      "Volunteered with Samaritain's Purse helping Louisiana flood victims",
      "Summited 24 of Colorado’s 14,000+ foot mountains",
      "Confirmed strategy and required actions for my five-year plan",
    ],
    link: {
      address: "https://schretzilla.github.io/adventure-america/index",
      name: "here",
    },
  },
  {
    company: "University of Pitsburgh Medical Center",
    logo: UpmcLogo,
    title: "ISD Rotational Engineer",
    dates: "July/2014-July/2016",
    teams: "App Development, UNIX Services, Enterprise Architecture",
    description:
      "A two-year leadership development rotational program designed for selected candidates to develop both technical and operational insight",
    keyPoints: [
      "Reduced the help desk’s call queue by developing the company’s Self-Help knowledge management tool",
      "Enhanced infrastructure analytics by acting as the technical lead for the creation of the IT data warehouse",
      "Increased my team’s visibility by leading demos for the data warehouse’s dashboards and visualizations",
      "Streamlined system engineer daily operations by creating Bash scripts for our Linux servers",
    ],
    link: {
      address: "",
      name: "",
    },
  },
  {
    company: "University of Pitsburgh Medical Center",
    logo: UpmcLogo,
    title: "Software Engineer Intern",
    dates: "June/2013-August/2013",
    teams: "E Record Custom App Development",
    description: "A summer internship between my college junior and senior year",
    keyPoints: [
      "Designed and developed web based tool for administering support for a hierarchy of questions",
      "Actively participated in the team’s new agile scrum software development process",
      "Participated in numerous interviews for open Software Engineer position with team",
    ],
    link: {
      address: "",
      name: "",
    },
  },
];

export default experienceData;
