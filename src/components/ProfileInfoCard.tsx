import React from "react";
import { Card } from "react-bootstrap";

const ProfileInfoCard: React.FC = () => {
  return (
    <Card className="profile-info-card">
      <Card.Body>
        <Card.Title>Contact Information</Card.Title>
        <Card.Text>Email: adesikan@bu.edu</Card.Text>
        <Card.Text>Phone: (608) 239-9226</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileInfoCard;
