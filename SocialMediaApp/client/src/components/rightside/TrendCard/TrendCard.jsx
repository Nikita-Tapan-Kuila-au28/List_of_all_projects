import React,{useState} from 'react'
import "./TrendCard.css";
import ShareModal from '../../ShareModal/ShareModal';
import{ TrendData }from "../../../Data/TrendData";
const TrendCard = () => {
    const [modalOpened,setModalOpened]=useState(false)
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
             <button class="button rightSide-button" onClick={()=>{setModalOpened(true)}}><b>Share</b></button>
             <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
             </div>
    )

            }
export default TrendCard;