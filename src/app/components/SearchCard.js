import React from 'react'

const SearchCard = (props) => {
  return (
    <div className='searchCard'>
        <h2>{props.title}</h2>
        <img 
        src={`https://image.tmdb.org/t/p/original${props.image}`} 
        className='movieSearchImg'
        alt={props.title + " Poster"}
        ></img>
        <p>{props.date}</p>
        <div>
          <button onClick={props.addToList}>Add to List</button>
        </div>
    </div>
  )
}

export default SearchCard