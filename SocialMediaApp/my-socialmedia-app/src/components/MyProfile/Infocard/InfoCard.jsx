import React from 'react'
import "./InfoCard.css"
const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="heading">
                <h4> Your Info </h4><i class="fa-solid fa-user-pen"></i>

            </div>
            <div className='userDetails'>
                <div className="info">
                    <i class="fa-solid fa-heart"></i>
                    <span>Status</span>
                    <span><b>in Relationship</b></span>

                </div>
                <div className="info">
                    <i class="fa-solid fa-house-chimney"></i><span>Lives in</span>
                    <span><b>Mumbai</b></span>

                </div>
                <div className="info">
                    <i class="fa-solid fa-location-dot"></i><span>From</span>
                    <span><b>Kolkata</b></span>

                </div>

                <div className="info">
                    <i class="fa-solid fa-clock"></i><span>Joined</span>
                    <span><b>August 2020</b></span>

                </div>

                <div className="info">
                    <i class="fa-solid fa-briefcase"></i><span>Works at</span>
                    <span><b>Microsoft</b></span>

                </div>
            </div>
            <button className='button logout'>Logout</button>


        </div>
    )
}

export default InfoCard