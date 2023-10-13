import './LogoSeach.scss'
import React from 'react'
import { UilSearch } from '@iconscout/react-unicons';
import Logo from '../../images/twiter.png'

function LogoSearch() {
  return (
    <div className='logoSearch'>
      <div className="image">
          <img src= { Logo } alt='logo' />
      </div>
      <div className="search">
          <input type='text' placeholder='#Explore' />
      </div>
      <div className="searchBar">
        <UilSearch />
      </div>

      
    </div>
  )
}

export default LogoSearch
