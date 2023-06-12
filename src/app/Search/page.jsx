"use client"
import { useEffect, useState } from "react";
import SearchCard from '../components/SearchCard';

const Search = () => {

  const [searchResults, setSearchResults] = useState([]);
  const myList = [];

  const addMovieToList = (currentMovieID) => {
    if (!myList.includes(currentMovieID)) {
      myList.push(currentMovieID)
    }
  }

  const searchMovie = async (searchWord) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTg0OWVkOTI4ODFkZmRiYTM2OWY3NjZkZGVlOGMzYiIsInN1YiI6IjY0NzkyODQwOTM4MjhlMDEzMzc2OWQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L6VSsodCiLs5M_5XdRgyQ9fqtBiYqnKUZBe-2HygVS8'
      }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchWord}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setSearchResults(response))
      .catch(err => console.error(err));

    // console.log(searchResults, "results")
  }

  useEffect(() => {
    console.log(myList, "currentList")
  }, [searchResults])

  return (
    <div>
      <input type='text' placeholder='Search for a movie' onChange={(e) => searchMovie(e.target.value)}></input>
      <div>
        {searchResults && searchResults.results && searchResults.results.length > 0 ? searchResults.results.map((index) => (
          <SearchCard
            title={index.original_title}
            image={index.poster_path}
            date={index.release_date}
            addToList={() => addMovieToList(index.id)}
          />
        )) : <p></p>}
      </div>
    </div>
  )
}

export default Search