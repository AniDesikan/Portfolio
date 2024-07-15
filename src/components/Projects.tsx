import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { InView } from "react-intersection-observer";

const projects = [
  {
    title: "Rshiny Application",
    image: "./Rshiny.png",
    explanation:
      "This is an Rshiny app that I built for my Masters Project. It gives the user the ability to select a bulk rna sequencing file and metadata, and returns graphs on the data itself, as well as on differential expression between the samples. Currently under construction!",
    link: "https://anirudh-desikan.shinyapps.io/Differential_Expression_Pipeline/",
  },
  {
    title: "HoTResDB",
    image: "./hotresdb.png",
    explanation:
      "This is a database that I am currently building for Dr. Connor's lab at Boston University. It contains information on viral hemorrhagic fevers, and allows users to interactively search through the lab's data. ",
    link: "",
  },
  {
    title: "SnakeMake Scripts",
    image: "./snakemake.png",
    explanation:
      "These are the snakemake scripts that I built during my Masters program. They are pipelines used to process CHIP seq and ATAC seq data, as well as output graphs on the quality and results of the sequencing.",
    link: "https://github.com/AniDesikan/Example_work/tree/main/SnakeMake_Pipelines",
  },
  {
    title: "This Portfolio!",
    image: "./portfolio.png",
    explanation:
      "The portfolio that you are looking at. It was made on React, and is hosted on Github Pages. ",
    link: "https://github.com/AniDesikan/Portfolio",
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
              link={project.link}
            />
          </InView>
        </Col>
      ))}
    </Row>
  );
};

export default Projects;
