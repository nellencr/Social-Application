import React from 'react'
import { UilPen } from "@iconscout/react-unicons";
import './InfoCard.scss'

function InfoCard() {
  return (
    <div className='infoCard'>
        <div className="headInfo">
            <h4> Your Info</h4>
            <div>
                 <UilPen />
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span>in Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in</b>
            </span>
            <span>Gauteng</span>
        </div>
        <div className="info">
            <span>
                <b>Works at</b>
            </span>
            <span>Johannesburg</span>
        </div>
        <button className="button logout-button">Logout</button>
      
    </div>
  )
}

export default InfoCard
