import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import "./Header.css"

function Header() {
  return (
    <>
    <div className="header">
 <p className="logo">LOGO</p><div className="user"><Person2Icon/><i className="fa fa-angle-down"></i>
</div>

 </div>
    </>
  )
}

export default Header