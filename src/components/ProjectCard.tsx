import { Card } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  imagesrc: string;
}

function ProjectCard({ title, imagesrc }: ProjectCardProps) {
  return (
    <div className="project-card">
      <Card>
        <Card.Body>
          <Card.Text>
            <b>{title}</b>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={imagesrc} className="rectangle-image" />
      </Card>
    </div>
  );
}

export default ProjectCard;
