import React from 'react'
import "./TrendCard.css";
import{ TrendData }from "../../../Data/TrendData";
const TrendCard = () => {
    return (
        <div className="TrendCard">
            <h3>Trends for you</h3>
            {
               TrendData.map((trend,id)=>{
                return(
                    <div className="trends">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}K shares</span>
                    </div>
                )
               })
             }
             <button class="button rightSide-button"><b>Share</b></button>
             </div>
    )

            }
export default TrendCard;