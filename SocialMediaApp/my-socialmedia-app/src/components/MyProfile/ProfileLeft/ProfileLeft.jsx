import React from 'react'
import FollowingCard from '../../profile/Followingcard/FollowingCard'
import Logo from '../../profile/profileparts/logo/Logo'
import InfoCard from '../Infocard/InfoCard'
const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
        <Logo />
        <InfoCard />
        <FollowingCard />
    </div>
  )
}

export default ProfileLeft