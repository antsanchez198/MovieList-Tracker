"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import MyListCard from '../components/MyListCard';
import { db } from '../firebase';
import { getDocs, collection } from "firebase/firestore";

const MyList = () => {

  const [myMovies, setMyMovies] = useState([]);
  const savedMoviesDatabase = collection(db, "my-movie-list");

  const getMyMovies = async () => {
    try {
      const data = await getDocs(savedMoviesDatabase);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }))
      setMyMovies(filteredData);
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getMyMovies();
  }, []);

  console.log(myMovies, "check movies")

  const handleOnSelect = (event) => {
    console.log(event.target.value, "value")
  }

  return (
    <div >
      <form>
        <label for="cars">Service:</label>
        <select name="cars" id="cars" onChange={(e) => handleOnSelect(e)}>
          <option value="Netflix">Netflix</option>
          <option value="Max">Max</option>
          <option value="Hulu">Hulu</option>
          <option value="Prime">Prime</option>
          <option value="Starz">Starz</option>
          <option value="Showtime">Showtime</option>
          <option value="FuboTv">FuboTv</option>
          <option value="Directv Stream">Directv Stream</option>
          <option value="Sling">Sling</option>
        </select>
      </form>
      <div className={styles.searchResultGrid}>
        {myMovies && myMovies.map(index => {
          return (
            <MyListCard
              title={index.title}
              image={index.poster}
              date={index.date}
              services={index.services}
            />
          )
        }
        )}
      </div>
    </div>
  )
}

export default MyList