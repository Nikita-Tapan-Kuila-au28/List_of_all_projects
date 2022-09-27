import React from 'react'
import "./FollowingCard.css";
import {Followers} from "../../../Data/FollowersData"

const FollowingCard = () => {
  return (
 <div className="followersCard">
      
    <div className="heading">
    <h3>Who is following You?</h3>
    <div className="Search">
          <input type="text" placeholder="#Explore" />
          <i class="fa-solid fa-magnifying-glass s-icon"></i>

        </div>
    </div>
    
    {Followers.map((follower,id)=>{
         
        return(
        <div className="Follower">
            <div>
                <img src={follower.img} alt="" className='FollowerImg'></img>
                <div className="name">
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                </div>
              
           
            </div>
            <button className='button fc-button'>Follow</button>

        </div>
        )
        
    })}
 </div>
  )
}

export default FollowingCard