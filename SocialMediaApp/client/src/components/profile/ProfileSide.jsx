import React from 'react';
import Logo from "./profileparts/logo/Logo";
import ProfileCard from "./profileparts/profilecard/ProfileCard";
import FollowingCard from './Followingcard/FollowingCard';
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="profile">
      <Logo />
      <ProfileCard />
      <FollowingCard />
    </div>
  )
}

export default ProfileSide