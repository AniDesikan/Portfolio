import React from "react";
import { ListGroup } from "react-bootstrap";

const ProfileBulletPoints: React.FC = () => {
  return (
    <ListGroup className="profile-bullet-points">
      <ListGroup.Item>Interest 1</ListGroup.Item>
      <ListGroup.Item>Interest 2</ListGroup.Item>
      <ListGroup.Item>Key Ability 1</ListGroup.Item>
      <ListGroup.Item>Key Ability 2</ListGroup.Item>
    </ListGroup>
  );
};

export default ProfileBulletPoints;
