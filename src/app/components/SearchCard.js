import React from 'react'

const SearchCard = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <image src={`https://image.tmdb.org/t/p/original${props.image}`}></image>
        <p>{props.overview}</p>
    </div>
  )
}

export default SearchCard