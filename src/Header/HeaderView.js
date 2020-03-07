import React from 'react';

import Container from 'react-bootstrap/Container';

import '../style/custom.css';

const Header = () => {
  return (
    <>
      <div className="parallax">
        <Container>
          <div className="vertical-center jumbotron">
            <h1 className="name-header">Scott Schretzenmaier</h1>
            <p id="name-description">
              Software Engineer, Bug Squasher, Adventure Seeker
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
