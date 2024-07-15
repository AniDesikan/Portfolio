import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Rshiny Application", image: "./Rshiny.png" },
  { title: "HoTResDB", image: "./hotresdb.png" },
  { title: "Project 2", image: "path/to/project2.jpg" },
  { title: "Project 2", image: "path/to/project2.jpg" },
  { title: "Project 2", image: "path/to/project2.jpg" },
  { title: "Project 2", image: "path/to/project2.jpg" },

  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <Row>
      {projects.map((project, index) => (
        <Col md={12} key={index} className="mb-4">
          <ProjectCard title={project.title} imagesrc={project.image} />
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
