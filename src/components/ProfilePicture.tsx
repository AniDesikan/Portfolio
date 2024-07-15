import React from "react";
import { Image } from "react-bootstrap";

const ProfilePicture: React.FC = () => {
  return (
    <div className="profile-picture">
      <Image src="./profile_picture.png" roundedCircle />
    </div>
  );
};

export default ProfilePicture;
