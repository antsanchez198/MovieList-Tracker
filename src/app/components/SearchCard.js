import React, { useState } from 'react'

const SearchCard = (props) => {

  let [isAdded, setIsAdded] = useState(false);

  return (
    <div className="auto-cols-max backdrop-blur-sm bg-white/30 p-6 w-auto text-center shadow-md font-sans flex flex-col justify-between">
      <div className="">
        <h3 className="text-xl font-bold text-gray-800">{props.title}</h3>
        <img src={`https://image.tmdb.org/t/p/original${props.image}`} className="h-25 w-15 mt-5 rounded-2xl drop-shadow-xl" />
        {/* <h2 className="text-lg font-semibold m-3">{props.date}</h2> */}
      </div>
      <div className="mt-4">
        {!isAdded ?
          <button className="
          border-slate-500	border-solid border-2 rounded-2xl px-5 py-3 w-fit self-center mt-7 font-semibold text-gray-800
          hover:text-slate-100 hover:bg-slate-600 hover:transition duration-300 ease-in-out" 
          onClick={() => { props.addToList(); setIsAdded(!isAdded) }}>Add to List</button>
          :
          <button className="border-slate-500	border-solid border-2 rounded-2xl px-5 py-3 w-fit self-center mt-7 font-semibold text-slate-100 bg-slate-600">Added</button>
        }
      </div>
    </div>
  )
}

export default SearchCard