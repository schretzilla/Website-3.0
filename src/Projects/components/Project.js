import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../style/custom.css';

const Project = props => {
  const projectName = 'Project Name';
  const catchPhrase = 'some catch phrase';
  const blurb =
    'This is a blurb about how awesome this project is and what it does';
  const extraDetails = ['extra info 1', 'extra info 2', 'extra info 3'];

  const extraDetailsList = extraDetails.map((detail, i) => {
    return <li key={`${projectName}-detail-${i}`}>{detail}</li>;
  });

  const tools = ['tool1', 'tool2', 'tool3'];
  const toolsList = tools.map((tool, i) => {
    return (
      <li className="list-inline-item" key={`${projectName}-tool-${i}`}>
        {tool}
      </li>
    );
  });

  const teamMembers = ['joe 1', 'joe 2', 'joe 3'];
  const teamMemberList = teamMembers.map((member, i) => {
    return (
      <li className="list-inline-item" key={`${projectName}-member-${i}`}>
        {member}
      </li>
    );
  });

  const date = 'month/year';
  return (
    <>
      <Row>
        <Col sm={12} md={5}>
          Image goes here
        </Col>
        <Col sm={12} md={7}>
          <h2 className="featurette-heading">
            {projectName}&nbsp;
            <small className="text-muted">{catchPhrase}</small>
          </h2>
          <p className="lead">{blurb}</p>

          <ol>{extraDetailsList}</ol>

          <ul className="list-inline">
            <li className="list-inline-item">
              <strong>Tools:</strong>
            </li>
            {toolsList}
          </ul>

          <ul className="list-inline">
            <li className="list-inline-item">
              <strong>Team:</strong>
            </li>
            {teamMemberList}
          </ul>

          <h5 className="text-left">
            <small className="text-muted">{date}</small>
          </h5>
        </Col>
      </Row>

      <hr className="featurette-divider" />
    </>
  );
};

export default Project;
