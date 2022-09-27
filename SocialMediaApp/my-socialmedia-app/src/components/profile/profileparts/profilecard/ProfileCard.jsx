import React from 'react'
import Cover from "../../../../images/cover.webp";
import Profile from "../../../../images/profileImg.jpg";
import "./ProfileCard.css"
const ProfileCard = () => {
  const ProfilePage=true;
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />

      </div>

      <div className="profileData">
        <span>Nikita</span>
        <span>Software Developer</span>
      </div>

      <div className="profileFollowStatus">
        <hr />
        <div>
        <div className="followers">
          <span>3,003</span>
          <span>Followers</span>
        </div>

        <div className="verticalLine"></div>

        <div className="following">
          <span>39</span>
          <span>Following</span>
        </div>


        {ProfilePage && (
          <>
          <div className="verticalLine"></div>
          <div className="Posts">
          <span>4</span>
          <span>Posts</span>
        </div>
          </>
        )

        }
        </div>
       
       <hr />

      </div>
      
       {ProfilePage ? "": <span>My Profile</span>}

    </div>
  )
}

export default ProfileCard