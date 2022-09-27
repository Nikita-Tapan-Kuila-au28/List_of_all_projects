import React from 'react'
import "./RightSide.css";

import TrendCard from "./TrendCard/TrendCard"
const RightSide = () => {
  return (
    <div className="RIghtSide">

  
    <div className="settingIcons">
    <div className="home"><i class="fa-solid fa-house-user"></i></div>
    <div className="setting"><i class="fa-solid fa-gear"></i></div>
    <div className="notification"><i class="fa-solid fa-bell"></i></div>
    <div className="chat"><i class="fa-solid fa-message"></i></div>
    </div>

   <TrendCard  />



    </div>

  )
}

export default RightSide;