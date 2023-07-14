import React from 'react'
import styles from './listCard.module.css'

const MyListCard = (props) => {
    return (
        <div className="auto-cols-max backdrop-blur-sm bg-white/30 p-6 w-fit text-center shadow-md font-sans flex flex-col justify-between">
            <div className="">
                <h3 className="text-xl font-bold text-gray-800">{props.title}</h3>
                <img src={`https://image.tmdb.org/t/p/original${props.image}`} className="h-25 w-15 mt-5 rounded-2xl drop-shadow-xl" />
                {/* <h2 className="text-lg font-semibold m-3">{props.date}</h2> */}
            </div>
            <div className="mt-4">
                <div className="flex flex-row w-fit gap-2">
                    {props.services && props.services.map(index => {
                        return (
                            <img src={`https://image.tmdb.org/t/p/original${index.logo_path}`} className="w-12 h-12 rounded-3xl object-contain" />
                        )
                    }
                    )}
                </div>
                <button className="border-slate-500	border-solid border-2 rounded-2xl px-5 py-3 w-fit self-center mt-7 text-gray-800 font-semibold">Watch</button>
            </div>
        </div>
    )
}

export default MyListCard