import React from 'react'
import './Home.scss'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'
import LeftSide from '../../components/leftSide/LeftSide'

function Home() {
  return (
    <div className='home'> 
    <ProfileSide />
    <PostSide />
    <LeftSide/>      
    </div>
  )
}

export default Home
