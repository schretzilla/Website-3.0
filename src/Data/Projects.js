import trailCamera from "../Images/Projects/trail-camera-placement.jpeg";
import gameBoy from "../Images/Projects/game-boy.png";
import selfHelp from "../Images/Projects/self-help.png";
import smartEgg from "../Images/Projects/smart-egg.png";
import algorithmAnimation from "../Images/Projects/algorithm-animation.png";
import xCountryAdventure from "../Images/Projects/x-country-adventure.png";
import exquizit from "../Images/Projects/exquizit.png";

export const projectData = [
  {
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
  },
  {
    name: "Super Pi Boy",
    catchPhrase: "",
    blurb:
      "For my brothers birthday I decided to follow some tutorials online and build him an emulation station. Using my 3-D printer and some soldering skills I was able to encase a retro pi arcade into a small handheld device for him to play on the go.",
    extraDetails: [],
    tools: [
      "Raspberry Pi",
      "RetroPie Image",
      "A 3D printed enclosure",
      "Solder & Soldering Iron"
    ],
    team: [],
    date: "March/2019",
    media: {
      type: "image",
      name: "Pi Boy - Game Boy",
      src: gameBoy
    }
  },
  {
    name: "Von Karman Challenge",
    catchPhrase: "",
    blurb:
      "I led a team of four awesome engineers during Northrop Grumman's Von Karman challenge. Our objective was to create a rover that could navigate through the field, discover hidden QR codes and complete the various tasks encoded in them. Using ROS to handle the communication between the different components and OpenCV to interpret different QR codes, my team was able to successfully build a rover that we named MARV.",
    extraDetails: [],
    tools: ["ROS Kinetic", "Raspberry Pi", "OpenCV", "C++"],
    team: [
      "Avery Bodenstein",
      "Andrew Miyaguchi",
      "Doug Toperzer",
      "Michael Uy"
    ],
    date: "October/2018",
    media: {
      type: "video",
      name: "Von Karman Rover",
      src: "https://www.youtube.com/embed/j-f__uynkvQ"
    }
  },
  {
    name: "Project Smart Egg!",
    catchPhrase: "Taking the egg drop competition to new levels",
    blurb:
      "In preparation for the egg drop competition the Fablab held a, 'Hatchathon' with the objective of creating the smartest egg on the planet.",
    extraDetails: [],
    tools: [
      "ESP32",
      "Highcharts JS",
      "A 3D printed egg",
      "Bluma's CSS Framework"
    ],
    team: ["Andrew Miyaguchi"],
    date: "February/2018",
    media: {
      type: "image",
      name: "Smart Electronic Egg Pieces",
      src: smartEgg
    }
  },
  {
    name: "Algorithm Animation",
    catchPhrase: "",
    blurb:
      "My flight back to LA from Philly took forever, so I used it as an opportunity to build animations for some common sorting algorithms using D3. Here I randomly generate weighted lists of circles then, with the click of a button, I animate each step of the algorithm.",
    extraDetails: [],
    tools: ["D3 v4", "Twitter Bootstrap v3", "Hosted using Github Pages"],
    team: [],
    date: "January/2018",
    media: {
      type: "image",
      name: "Algorithm Website",
      src: algorithmAnimation
    }
  },
  {
    name: "Adventure America",
    catchPhrase: "",
    blurb:
      "A lot of people have asked, 'when you left your job to travel the country, what did you do?' I used D3 to animate my cross country adventure.",
    extraDetails: [],
    tools: [
      "D3 v4",
      "Twitter Bootstrap v3",
      "AngularJS",
      "Hosted using Github Pages"
    ],
    team: [],
    date: "January/2017",
    media: {
      type: "image",
      name: "Cross Country Adventure Homepage",
      src: xCountryAdventure
    }
  },
  {
    name: "ExQuizit",
    catchPhrase: "",
    blurb:
      "ExQuizit is a Python/Django + Angular web app that allows users to login, create, take and share quizzes with other users.",
    extraDetails: [],
    tools: [
      "Django 1.9",
      "Python 2.7",
      "AngularJS 1",
      "Twitter Bootstrap v3",
      "Django Rest Framework v3",
      "PostgreSQL 9.2",
      "Hosted using Heroku"
    ],
    team: [],
    date: "June/2016",
    media: {
      type: "image",
      name: "ExQuizit Homepage",
      src: exquizit
    }
  },
  {
    name: "Service Base V",
    catchPhrase: "",
    blurb:
      "SBV is a .Net web app for departmental knowledge management and problem tracking. The backend of ServiceBaseV was then used as the backbone to UPMC's corporate wide Self-Help system.",
    extraDetails: [],
    tools: [
      "C#",
      ".Net Web Application",
      "Microsoft SQL Database",
      "JavaScript/jQuery",
      "Twitter Bootstrap v2",
      "ADO .Net Entity Framework"
    ],
    team: [],
    date: "January/2015",
    media: {
      type: "image",
      name: "Self Help Homepage",
      src: selfHelp
    }
  }
];
