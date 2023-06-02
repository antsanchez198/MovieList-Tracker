"use client"
import { useEffect, useState } from "react";
import SearchCard from '../components/SearchCard';

const Search = () => {

  const [searchResults, setSearchResults] = useState([]);

  const searchMovie = async (searchWord) => {
    // const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${searchWord}&country=us&show_type=movie&output_language=en`;
    // const url = 'https://streaming-availability.p.rapidapi.com/v2/search/title?title=batman&country=us&show_type=movie&output_language=en';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '4c42d608fdmsh09b7b22dbe9aa2fp11eb41jsn34b29c2a4b1e',
    //     'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    //   }
    // };

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

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   // console.log(result, "result from the API");
    //   setSearchResults(result)
    // } catch (error) {
    //   console.error(error);
    // }

    console.log(searchResults, "results")
  }

  useEffect(() => {
    // searchMovie();
    // console.log(searchResults, "results saved")
  }, [])


  useEffect(() => {
    // console.log(searchResults, "results saved")
    // searchMovie();
  }, [searchResults])

  return (
    <div>
      <input type='text' placeholder='Search for a movie' onChange={(e) => searchMovie(e.target.value)}></input>
      <div>
        {searchResults &&  searchResults.results && searchResults.results.length > 0 ? searchResults.results.map((index) => (
          <SearchCard
            title={index.original_title}
            image={index.poster_path}
            overview={index.overview}
          />
        )): <p></p>}
      </div>
    </div>
  )
}

export default Search