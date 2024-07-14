import React from "react";
import { Image } from "react-bootstrap";

const ProfilePicture: React.FC = () => {
  return (
    <div className="profile-picture">
      <Image src="path/to/your/profile.jpg" roundedCircle />
    </div>
  );
};

export default ProfilePicture;
