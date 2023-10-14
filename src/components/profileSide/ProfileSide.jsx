import React from 'react'
import './ProfileSide.scss'
import LogoSearch from '../logoSearch/LogoSearch'
import InfoCard from '../infoCard/InfoCard'
import FolowersCard from '../folowerCard/FolowersCard'

function ProfileSide() {
  return (
    <div>
      <LogoSearch />
      <InfoCard />
      <FolowersCard />
    </div>
  )
}

export default ProfileSide
