import React from 'react'
import "./Profile.css";
import ProfileLeft from "../../components/MyProfile/ProfileLeft/ProfileLeft";
import ProfileCard from '../../components/profile/profileparts/profilecard/ProfileCard';
import PostSide from "../../components/posts/PostSide";
import "../../components/posts/PostSide.css"
import RightSide from '../../components/rightside/RightSide';

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="ProfileCenter">
        <ProfileCard />
        <PostSide />


      </div>

      <RightSide />
    </div>
  )
}

export default Profile