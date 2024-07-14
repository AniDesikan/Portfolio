import React from "react";
import { Card } from "react-bootstrap";

const ProfileInfoCard: React.FC = () => {
  return (
    <Card className="profile-info-card">
      <Card.Body>
        <Card.Title>Contact Information</Card.Title>
        <Card.Text>Email: your.email@example.com</Card.Text>
        <Card.Text>Phone: (123) 456-7890</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileInfoCard;
