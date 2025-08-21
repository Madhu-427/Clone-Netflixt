import React, { useEffect, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const Titlecards = ({title,Category,searchTerm}) => {

  const [apiData, setApiData] = useState([])

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA4NWExZTNmMjc1ZDNiNmFkYjE3NGE3YTUwOTIyOSIsIm5iZiI6MTc1NTQ5MjgzNy43OTYsInN1YiI6IjY4YTJiMWU1Yzk4OWYyYzFlMzAyZDQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iH3ykuTAMK_BVcNgr8vpOl9RRv9HcVFjJWpA4Seknzw'
  }
};
// useEffect(()=>{
//   fetch(`https://api.themoviedb.org/3/movie/${Category ? Category : 'now_playing'}?language=en-US&page=1`, options)
//     .then(res => res.json())
//     .then(res => setApiData(res.results))
//     .catch(err => console.error(err));
// },[])

useEffect(() => {
    let url = "";
    if (searchTerm) {
      url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&language=en-US&page=1`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${Category ? Category : 'now_playing'}?language=en-US&page=1`;
    }
    fetch(url, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, [Category, searchTerm]);


  // Determine the heading based on searchTerm
  let heading = title ? title : "Popular on Netflix";
  if (searchTerm && searchTerm.trim() !== "") {
    heading = "Searched Movies";
  }
  

  return (
    <div className='title-cards'>
      <h2>{heading}</h2>
      <div className="cards-list">
        {apiData && apiData.length > 0 ? (
          apiData.filter(card => card.backdrop_path).map((card, index) => (
            <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
              <p>{card.original_title}</p>
            </Link>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  )
}
export default Titlecards

