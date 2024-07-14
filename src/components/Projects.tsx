import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const projects = [
  { title: "Project 1", image: "path/to/project1.jpg" },
  { title: "Project 2", image: "path/to/project2.jpg" },
  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
