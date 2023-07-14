"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import MyListCard from '../components/MyListCard';
import { db } from '../firebase';
import { getDocs, collection } from "firebase/firestore";

const MyList = () => {

  const [myMovies, setMyMovies] = useState([]);
  const [backupMyMovies, setBackup] = useState([]);
  const savedMoviesDatabase = collection(db, "my-movie-list");

  const getMyMovies = async () => {
    try {
      const data = await getDocs(savedMoviesDatabase);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }))
      setMyMovies(filteredData);
      setBackup(filteredData);
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getMyMovies();
  }, []);

  console.log(myMovies, "check movies")

  const handleOnSelect = (event) => {
    let tempArray = []
    if (event.target.value === "All") {
      setMyMovies(backupMyMovies)
    }
    else {
      backupMyMovies.map((index) => {
        index.services.map((innerIndex) => {
          if (innerIndex.provider_name === event.target.value) {
            tempArray.push(index)
          }
        })
      })
      setMyMovies(tempArray);
    }
  }

  return (
    <div className="px-20 py-10 text-black" >
      <form>
        <select name="cars" id="cars" onChange={(e) => handleOnSelect(e)} className="bg-slate-500 w-30 px-5 py-2 text-slate-50 text-lg rounded-lg">
          <option value="All">All</option>
          <option value="Netflix">Netflix</option>
          <option value="Disney Plus">Disney Plus</option>
          <option value="Max">Max</option>
          <option value="Hulu">Hulu</option>
          <option value="Prime">Prime</option>
          <option value="Starz">Starz</option>
          <option value="Showtime">Showtime</option>
          <option value="Paramount Plus">Paramount +</option>
          <option value="fuboTV">FuboTv</option>
          <option value="DIRECTV">Directv Stream</option>
          <option value="Sling">Sling</option>
        </select>
      </form>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 gap-2 lg:grid-cols-4">
        {myMovies && myMovies.map(index => {
          return (
            <MyListCard
              title={index.title}
              image={index.poster}
              date={index.date}
              services={index.services}
              key={index.movieID}/>
          )
        }
        )}
      </div>
    </div>
  )
}

export default MyList