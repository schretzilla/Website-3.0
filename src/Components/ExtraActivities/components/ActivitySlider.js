/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Slider from "react-slick";

import Col from "react-bootstrap/Col";

import ironmanPhoto from "../../../Images/ExtraActivities/ironman.jpg";
import wrestlingClub from "../../../Images/ExtraActivities/wrestling-club.jpg";
import samaritansPurse from "../../../Images/ExtraActivities/samaritans-purse-group.jpg";
import mountains from "../../../Images/ExtraActivities/mountaineering.jpg";
import highSchoolWrestling from "../../../Images/ExtraActivities/high-school-wrestling.jpg";
import surfPhoto from "../../../Images/ExtraActivities/surf-left.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const style = {
      image: {
        width: "100%",
      },
    };

    const sliderComponent = (photo, altTag, description) => (
      <div>
        <img style={style.image} src={photo} alt={altTag} />
        <p className="text-center">{description}</p>
      </div>
    );

    return (
      <Col>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          {sliderComponent(
            surfPhoto,
            "Surfing in L.A.",
            "The beach is my favorite place to be and I surf every chance I get.",
          )}
          {sliderComponent(
            ironmanPhoto,
            "ironman finish line",
            "I'm an ultra athlete, I've complete 7 marathons, won the Chi Town Half Marathon and completed 2 Ironman competitions.",
          )}
          {sliderComponent(
            wrestlingClub,
            "Wrestling Club",
            "In college I had the opportunity to be president and coach of the University of Pittsburgh Wrestling Club. Here I had the chance to lead a great team of wrestlers and win a few championships.",
          )}
          {sliderComponent(
            samaritansPurse,
            "Samaritans Purse volunteer group",
            "Over my trip across the country I signed up to become part of Samaritan Purse's disaster relief team. We volunteered in Baton Rouge to help the recent flood victims.",
          )}
          {sliderComponent(
            mountains,
            "Scott in the mountains",
            "I love exploring the outdoors, climbing and mountaineering.",
          )}
          {sliderComponent(
            highSchoolWrestling,
            "Medaling in the PA state wrestling competition",
            "I was an All American high school wrestler.",
          )}
        </Slider>
      </Col>
    );
  }
}
