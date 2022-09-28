import React from 'react'
import "./Home.css";
import  ProfileSide from "../components/profile/ProfileSide";
import  PostSide from "../components/posts/PostSide";
import RightSide from "../components/rightside/RightSide"
const home = () => {
  return (
   <div className="Home">
    <ProfileSide />
    <PostSide />
    <RightSide />

   </div>
  )
}

export default home;