import React, { Component } from 'react';
import Slider from 'react-slick';

import Col from 'react-bootstrap/Col';

import ironmanPhoto from '../../Images/ironman.jpg';
import wrestlingClub from '../../Images/wrestling-club.jpg';
import samaritansPurse from '../../Images/samaritans-purse-group.jpg';
import mountains from '../../Images/mountaineering.jpg';
import highSchoolWrestling from '../../Images/high-school-wrestling.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const style = {
      image: {
        width: '100%'
      }
    };

    return (
      <Col>
        <Slider {...settings}>
          <div>
            <img style={style.image} src={ironmanPhoto} alt="ironman" />
            <p>
              I'm an ultra athlete, I've complete 7 marathons, won the Chi Town
              Half Marathon and completed 2 Ironman competitions.
            </p>
          </div>
          <div>
            <img style={style.image} src={wrestlingClub} alt="wrestling club" />
            <p>
              In college I had the opportunity to be president and coach of the
              University of Pittsburgh Wrestling Club. Here I had the chance to
              lead a great team and wrestlers and win quite a few championships.
            </p>
          </div>
          <div>
            <img
              style={style.image}
              src={samaritansPurse}
              alt="samaritans purse"
            />
            <p>
              Over my trip across the country I signed up to become part of
              Samaritan Purse's disaster relief team. We volunteered in Baton
              Rouge to help the recent flood victims.
            </p>
          </div>
          <div>
            <img style={style.image} src={mountains} alt="mountains" />
            <p>I love exploring the outdoors, climbing and mountaineering.</p>
          </div>
          <div>
            <img
              style={style.image}
              src={highSchoolWrestling}
              alt="high school wrestling"
            />
            <p>I was an All American high school wrestler</p>
          </div>
        </Slider>
      </Col>
    );
  }
}
