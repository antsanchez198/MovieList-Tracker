"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import MyListCard from '../components/MyListCard';
import { db } from '../firebase';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';

const MyList = () => {
  const [myMovies, setMyMovies] = useState([]);
  const [backupMyMovies, setBackup] = useState([]);
  const savedMoviesDatabase = collection(db, 'my-movie-list');
  const [randomMovie, setRandomMovie] = useState(null); // Changed to null

  const getMyMovies = async () => {
    try {
      const data = await getDocs(savedMoviesDatabase);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }));
      setMyMovies(filteredData);
      setBackup(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyMovies();
  }, []);

  const handleOnSelect = (event) => {
    let tempArray = [];
    if (event.target.value === 'All') {
      setMyMovies(backupMyMovies);
    } else {
      backupMyMovies.map((index) => {
        index.services.map((innerIndex) => {
          if (innerIndex.provider_name === event.target.value) {
            tempArray.push(index);
          }
        });
      });
      setMyMovies(tempArray);
    }
    setRandomMovie(null); // Changed to null
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, 'my-movie-list', id.toString());
    await deleteDoc(movieDoc);
    getMyMovies();
  };

  const randomMoviePicker = () => {
    if (myMovies.length > 1) {
      const randomIndex = Math.floor(Math.random() * myMovies.length);
      setRandomMovie(myMovies[randomIndex]);
    }
  };

  // Define a function to close the modal
  const closeModal = () => {
    setRandomMovie(null);
    const bodyElement = document.getElementById("body");
    if (bodyElement) {
      bodyElement.style.overflow = "hidden";
    }
    const modalContainer = document.getElementById("modal-container");
    if (modalContainer) {
      modalContainer.classList.remove('scale-100', 'opacity-100');
      modalContainer.classList.add('scale-50', 'opacity-0');
    };
    requestAnimationFrame(() => {
      modalContainer.classList.add('transform-gone', 'transition-transform');
    });
  }

    return (
      <div className=" text-black flex flex-col my-10 mx-auto max-w-screen-xl xl:my-0 p-10" id="body">
        <button
          id="showMovie"
          className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-1/4 self-center p-4 text-slate-100 rounded-xlg font-semibold text-xl rounded-2xl shadow-lg
          hover:bg-gradient-to-tr	from-fuchsia-500 to-cyan-500 hover:transition duration-300 ease-in-out hover:shadow-2xl"
          onClick={randomMoviePicker}
        >
          Pick Random Movie
        </button>
        <form>
          <select
            name="cars"
            id="cars"
            onChange={(e) => handleOnSelect(e)}
            className="bg-slate-500 w-45 px-1 py-2 text-slate-50 text-lg mt-20 cursor-pointer"
          >
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
        {/* <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4"> */}
        <div className="w-full h-fit text-center flex flex-wrap">
          {randomMovie === null ? (
            myMovies.map((index) => (
              // <div className="w-fit" key={index.movieID}>
              <MyListCard
                key={index.movieID}
                title={index.title}
                image={index.poster}
                date={index.date}
                services={index.services}
                deleteFunction={() => deleteMovie(index.movieID)}
              />
              // </div>
            ))
          ) : (
            <div
              className="fixed z-[1] w-full h-full bg-transparent pt-[100px] left-0 -top-10"
              onClick={closeModal}
            >
              <div
                className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-1/2 mx-auto my-0 p-5 rounded-lg duration-500"
                id="modal-container">
                <div className="w-1/2 h-fit mx-auto my-0 p-5">
                  <h2 className="text-slate-100 rounded-xlg font-semibold text-3xl mb-10">Movie Selected</h2>
                  <MyListCard
                    title={randomMovie.title}
                    image={randomMovie.poster}
                    date={randomMovie.date}
                    services={randomMovie.services}
                    deleteFunction={() => deleteMovie(randomMovie.movieID)}
                  />
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    );
  };

  export default MyList;
