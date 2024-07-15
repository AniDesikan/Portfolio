import { Card } from "react-bootstrap";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  imagesrc: string;
  explanation: string;
  link: string;
}

function ProjectCard({ title, imagesrc, explanation, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`project-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card>
          <Card.Body>
            <Card.Text>
              <b>{title}</b>
            </Card.Text>
          </Card.Body>
          <div className="gradient-image-container">
            <Card.Img
              variant="bottom"
              src={imagesrc}
              className="gradient-image"
            />
          </div>
          <Card.Body>
            <Card.Text>{explanation}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}
export default ProjectCard;
