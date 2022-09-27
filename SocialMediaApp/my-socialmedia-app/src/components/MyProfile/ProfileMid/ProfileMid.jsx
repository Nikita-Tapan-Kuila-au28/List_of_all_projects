import React from 'react'
import "./ProfileMid";
import ProfileCard from '../../profile/profileparts/profilecard/ProfileCard';
import Posts from '../../posts/postparts/Posts';
import "../../posts/postparts/posts.css"
import "../../posts/postparts/PostShare.css";
import 
import PostShare from "../../posts/postparts/PostShare";
const ProfileMid = () => {
   
    return (
        <div className="ProfileMid">
            <ProfileCard />
            <div className='ProfileCenter'>
            <PostShare />
                <Posts />
            </div>

        </div>
       
    )
}

export default ProfileMid