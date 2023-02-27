import React from 'react'
import more from "../images/next@2x.jpg"
import "./header.css"
function Header() {
  return (
    <>
    <div className='header'>
        <h5>LOGO</h5>
        <div className='profile'>
        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt="Profile" className='profimg'/>
        <img src={more} alt="More" className='more'/>
        </div>
    </div>
    </>
  )
}

export default Header