import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    
    <>
    <nav className='nav-menu'>
    <ul className='ul-menu'>
        <li className='resort-name'>Ravi Resorts</li>
        <li><Link className="nav-link" to = '/'>Home</Link></li>
        <li><Link className="nav-link" to = '/gallery' >Gallery</Link></li>
        <li><Link className="nav-link" to ="/contact">Contact Us</Link> </li>
        <li><Link className = "nav-link" to ="/faqs" >FAQS</Link> </li>
    </ul>
    </nav>
    <Outlet />
  
  </>

  )
}

export default Header