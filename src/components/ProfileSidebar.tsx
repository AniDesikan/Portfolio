import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileBulletPoints from "./ProfileBulletPoints";

const ProfileSidebar: React.FC = () => {
  return (
    <div className="profile-sidebar">
      <h1 className="name">Ani Desikan</h1>
      <h4 className="role">
        Bioinformatics, Web development, Machine Learning
      </h4>
      <ProfilePicture />
      <ProfileInfoCard />
    </div>
  );
};

export default ProfileSidebar;
