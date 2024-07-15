import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const workExperiences = [
  {
    title: "Computer Programmer at Connor Lab, Boston University",
    description:
      "Adapted HoTResDB from native javascript and turned it into a React+Flask App, as well as added new capabilities to the application. This is an ongoing project.",
  },
  {
    title:
      "Student Research Assistant at the Machine Learning Research Group of Boston University",
    description:
      "Using Tensorflow, and later Pytorch, I created a pipeline that intakes whole slide images, segments and patches them, and runs them through a neural network to guess what genotypes the cancer has based on the slide images. This is an ongoing project.",
  },
  {
    title: "Lab Technician at the Mandel Lab, University of Wisconsin-Madison",
    description:
      "Here I worked with Klebsiella pneumoniae, a bacteria that is a common cause of hospital acquired infections. I was responsible for creating plasmids to knockout genes in the bacteria, as well as creating mutants of the bacteria to test the effects of the gene knockouts.",
  },
  {
    title: "Masters in Bioinformatics at Boston University",
    description: "",
  },
  {
    title:
      "Bachelors in Math and Biochemistry at University of Wisconsin-Madison",
    description: "",
  },
  // Add more work experiences here
];

const WorkExperience: React.FC = () => {
  return (
    <Row>
      {workExperiences.map((experience, index) => (
        <Col md={12} key={index} className="mb-4">
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
