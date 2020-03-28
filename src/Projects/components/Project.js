import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../style/custom.css";

const Project = props => {
  const { projectData, indexNumber } = props;

  const extraDetailsList = projectData.extraDetails.map((detail, i) => {
    return <li key={`${projectData.name}-detail-${i}`}>{detail}</li>;
  });

  const toolsList = projectData.tools.map((tool, i) => {
    return (
      <li className="list-inline-item" key={`${projectData.name}-tool-${i}`}>
        {tool}
      </li>
    );
  });

  const teamMemberList = projectData.team.map((member, i) => {
    return (
      <li className="list-inline-item" key={`${projectData.name}-member-${i}`}>
        {member}
      </li>
    );
  });

  const imageColumn =
    projectData.media.type !== "video" ? (
      <Col xs={{ order: 1, span: 12 }} md={{ order: 0, span: 5 }}>
        <img
          className="img-fluid"
          src={projectData.media.src}
          alt={projectData.media.name}
        />
      </Col>
    ) : (
      <Col
        className="youtube-container"
        xs={{ order: 1, span: 12 }}
        md={{ order: 0, span: 5 }}
      >
        <iframe
          title={`${projectData.name}-media`}
          width="475"
          height="641"
          src={projectData.media.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Col>
    );
  const descriptionColumn = (
    <Col sm={12} md={7}>
      <h2 className="featurette-heading">
        {projectData.name}&nbsp;
        <small className="text-muted">{projectData.catchPhrase}</small>
      </h2>
      <p className="lead">{projectData.blurb}</p>

      <ol>{extraDetailsList}</ol>

      <ul className="list-inline">
        <li className="list-inline-item">
          <strong>Tools:</strong>
        </li>
        {toolsList}
      </ul>

      {teamMemberList.length > 0 && (
        <ul className="list-inline">
          <li className="list-inline-item">
            <strong>Team:</strong>
          </li>
          {teamMemberList}
        </ul>
      )}

      <h5 className="text-left">
        <small className="text-muted">{projectData.date}</small>
      </h5>
    </Col>
  );

  let projectContent;
  if (indexNumber % 2 === 0) {
    projectContent = (
      <>
        {imageColumn} {descriptionColumn}
      </>
    );
  } else {
    projectContent = (
      <>
        {descriptionColumn} {imageColumn}
      </>
    );
  }
  return (
    <>
      <Row>{projectContent}</Row>

      <hr className="featurette-divider" />
    </>
  );
};

export default Project;
