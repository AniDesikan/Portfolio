import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const workExperiences = [
  { title: "Job 1", description: "Description of job 1" },
  { title: "Job 2", description: "Description of job 2" },
  // Add more work experiences here
];

const WorkExperience: React.FC = () => {
  return (
    <Row>
      {workExperiences.map((experience, index) => (
        <Col md={4} key={index} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{experience.title}</Card.Title>
              <Card.Text>{experience.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default WorkExperience;
