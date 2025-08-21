import React, { useState,useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='home'>
      <Navbar onSearch={setSearchTerm}/>
      <div className="hero">
        <img src={hero_banner} alt=""  className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='title-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
            <Titlecards searchTerm={searchTerm}/>
        </div>
      </div>
        <div className="more-cards">
          <Titlecards title={"Blockbuster Movies"} Category={"top_rated"}/>
          <Titlecards title={"Only on Netflix"}  Category={"popular"}/>
          <Titlecards title={"Upcoming"} Category={"upcoming"}/>
          <Titlecards title={"Top pics for You"} Category={"now_playing"}/>
        </div>
      <Footer/>
    </div>
  )
}

export default Home
