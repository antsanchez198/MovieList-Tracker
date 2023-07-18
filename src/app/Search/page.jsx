"use client"
import { useEffect, useState } from "react";
import SearchCard from '../components/SearchCard';
import styles from './page.module.css'
import { db } from '../firebase';
import { getDocs, collection, addDoc, updateDoc, doc, setDoc } from "firebase/firestore";

const Search = () => {

  const myMovieList = collection(db, "my-movie-list");
  let services;
  const [searchResults, setSearchResults] = useState([]);

  const getMovieServices = async (movieID, posterLink, movieTitle, movieDate) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTg0OWVkOTI4ODFkZmRiYTM2OWY3NjZkZGVlOGMzYiIsInN1YiI6IjY0NzkyODQwOTM4MjhlMDEzMzc2OWQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L6VSsodCiLs5M_5XdRgyQ9fqtBiYqnKUZBe-2HygVS8'
      }
    };

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/watch/providers`, options)
    const data = await res.json();
    try {
      if (data.results.US.flatrate !== undefined) {
        services = data.results.US.flatrate
      }
      else {
        services = []
      }
    }
    catch (err) {
      console.log(err)
    };

    await addNewMovie(movieID, posterLink, movieTitle, movieDate);
  }

  const addNewMovie = async (movieID, posterLink, movieTitle, movieDate) => {
    try {
      const docData = {
        movieID: movieID,
        poster: posterLink,
        title: movieTitle,
        date: movieDate,
        services: services,
      };

      await setDoc(doc(db, "my-movie-list", movieID.toString()), docData);

    } catch (error) {
      console.log(error)
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

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchWord}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setSearchResults(response))
      .catch(err => console.error(err));

    console.log(searchResults, "results")
  }

  return (
    <div className="p-10 flex flex-col">
      <input type='text' className="self-center p-3 w-2/4 rounded-lg bg-slate-500" placeholder='Search for a movie' onChange={(e) => searchMovie(e.target.value)}></input>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 gap-2 lg:grid-cols-4">
        {searchResults && searchResults.results && searchResults.results.length > 0 ? searchResults.results.map((index) => (
          <SearchCard
            title={index.original_title}
            image={index.poster_path}
            date={index.release_date}
            id={index.id}
            addToList={() => getMovieServices(index.id, index.poster_path, index.original_title, index.release_date)}
          />
        )) : <p></p>}
      </div>
    </div>
  )
}

export default Search