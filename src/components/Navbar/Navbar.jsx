import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'



const Navbar = ({ onSearch }) => {
  const navRef = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(()=> {
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className='navbar'>
      <div ref={navRef} className="navbar-left">
        <img src={logo} alt="" className="navbar-logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img
          src={search_icon}
          alt=""
          className='icons'
          style={{ cursor: 'pointer' }}
          onClick={() => setShowSearch(!showSearch)}
        />
        {showSearch && (
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
            value={searchText}
            onChange={handleInputChange}
            autoFocus
          />
        )}
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile'/>
          <img src={caret_icon} alt="" />
          <div className='dropdown'>
            <p onClick={ ()=>{logout()}}>Sign Out</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
