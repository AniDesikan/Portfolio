import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileBulletPoints from "./ProfileBulletPoints";

const ProfileSidebar: React.FC = () => {
  return (
    <div className="profile-sidebar">
      <ProfilePicture />
      <ProfileInfoCard />
      <ProfileBulletPoints />
    </div>
  );
};

export default ProfileSidebar;
