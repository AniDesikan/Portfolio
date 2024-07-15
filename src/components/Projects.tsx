import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { InView } from "react-intersection-observer";

const projects = [
  {
    title: "Rshiny Application",
    image: "./Rshiny.png",
    explanation:
      "This is an Rshiny app that I built for my Masters Project. It gives the user the ability to select a bulk rna sequencing file and metadata, and returns graphs on the data itself, as well as on differential expression between the samples. ",
  },
  {
    title: "HoTResDB",
    image: "./hotresdb.png",
    explanation:
      "This is a database that I built for my Masters Project. It contains information on the hotspots of resistance in the SARS-CoV-2 genome. The database is searchable by gene, protein, and mutation, and returns information on the mutation, the protein, and the gene. ",
  },
  {
    title: "SnakeMake Scripts",
    image: "./snakemake.png",
    explanation:
      "These are the snakemake scripts that I built for my Masters Project. They take in a bulk rna sequencing file and metadata, and return a differential expression analysis. ",
  },
  {
    title: "This Portfolio!",
    image: "./portfolio.png",
    explanation:
      "The portfolio that you are looking at. It was made on React, and is hosted on Github Pages. ",
  },

  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <Row>
      {projects.map((project, index) => (
        <Col md={12} key={index} className="mb-4">
          <InView
            as="div"
            onChange={(inView, entry) =>
              entry.target.classList.toggle("in-view", inView)
            }
            className="fade-in-out"
          >
            <ProjectCard
              title={project.title}
              imagesrc={project.image}
              explanation={project.explanation}
            />
          </InView>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
