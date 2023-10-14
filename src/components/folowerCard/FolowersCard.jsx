import React from 'react'
import './FolowersCard.scss'
import { Followers } from '../../pages/data/FolowersData'

function FolowersCard() {
  return (
    <div className='folowersCard'>
        <h3>Who is following you </h3>
        {Followers.map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
      
    </div>
  )
}

export default FolowersCard
