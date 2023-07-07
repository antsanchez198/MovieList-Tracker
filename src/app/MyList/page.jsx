"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { movieList } from '../list';
import MyListCard from '../components/MyListCard';

const MyList = () => {

  // var myList = [];

  // const searchMovie = async (searchWord) => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTg0OWVkOTI4ODFkZmRiYTM2OWY3NjZkZGVlOGMzYiIsInN1YiI6IjY0NzkyODQwOTM4MjhlMDEzMzc2OWQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L6VSsodCiLs5M_5XdRgyQ9fqtBiYqnKUZBe-2HygVS8'
  //     }
  //   };

  //   movieList.map(index => {

  //     fetch(`https://api.themoviedb.org/3/movie/${index}?language=en-US'`, options)
  //       .then(response => response.json())
  //       .then(response => myList.push(response))
  //       .catch(err => console.error(err));

  //     console.log(myList, "results")
  //   })

  // }

  useEffect(() => {

    // const searchMovie = async () => {
    //   var tempList = [];

    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTg0OWVkOTI4ODFkZmRiYTM2OWY3NjZkZGVlOGMzYiIsInN1YiI6IjY0NzkyODQwOTM4MjhlMDEzMzc2OWQ4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L6VSsodCiLs5M_5XdRgyQ9fqtBiYqnKUZBe-2HygVS8'
    //     }
    //   };

    //   movieList.map(async index => {

    //     const response = await fetch(`https://api.themoviedb.org/3/movie/${index}?language=en-US'`, options)
    //       .then(response => response.json())
    //       .then(response => tempList.push(response))
    //       .catch(err => console.error(err));

    //   })

    //   setMyList(tempList);

    // }

    // searchMovie();
  }, []);

  return (
    <div >
      <div className={styles.searchResultGrid}>
        {movieList && movieList.map(index => {
          return (
            <MyListCard
              title={index.original_title}
              image={index.poster_path}
            />
          )
        }
        )}
      </div>
    </div>
  )
}

export default MyList