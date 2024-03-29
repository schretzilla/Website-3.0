import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = (props) => {
  const { projectData, indexNumber } = props;
  const textOnRight = indexNumber % 2 === 0;

  const extraDetailsList = projectData.extraDetails.map((detail, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={`${projectData.name}-detail-${i}`}>{detail}</li>
  ));

  const toolsList = projectData.tools.map((tool, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li className="list-inline-item" key={`${projectData.name}-tool-${i}`}>
      {tool}
    </li>
  ));

  const teamMemberList = projectData.team.map((member, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li className="list-inline-item" key={`${projectData.name}-member-${i}`}>
      {member}
    </li>
  ));

  const imageColumn =
    projectData.media.type !== "video" ? (
      <Col xs={{ order: 1, span: 12 }} md={{ order: 0, span: 5 }}>
        <a href={projectData.media.url}>
          <img className="img-fluid" src={projectData.media.src} alt={projectData.media.name} />
        </a>
      </Col>
    ) : (
      <Col xs={{ order: 1, span: 12 }} md={{ order: 0, span: 5 }}>
        <iframe
          title={`${projectData.name}-media`}
          width="100%"
          height="100%"
          src={projectData.media.src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Col>
    );
  const dateClass = textOnRight ? "text-right" : "text-left";
  const descriptionColumn = (
    <Col sm={12} md={7}>
      <h2 className="featurette-heading">
        {projectData.name}
        &nbsp;
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

      <h5 className={dateClass}>
        <small className="text-muted">{projectData.date}</small>
      </h5>
    </Col>
  );

  let projectContent;
  if (textOnRight) {
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
