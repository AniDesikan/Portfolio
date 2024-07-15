import { Card } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  imagesrc: string;
  explanation: string;
}

function ProjectCard({ title, imagesrc, explanation }: ProjectCardProps) {
  return (
    <div className="project-card">
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
    </div>
  );
}

export default ProjectCard;
