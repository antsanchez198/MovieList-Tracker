import React from 'react'
import styles from './listCard.module.css'

const MyListCard = (props) => {
    return (
        <div className="auto-cols-max text-black backdrop-blur-sm bg-white/30 p-6 w-fit text-center rounded-lg font-sans flex flex-col">
            <h3 className="text-2xl font-bold">{props.title}</h3>
            <img src={`https://image.tmdb.org/t/p/original${props.image}`} className="h-25 w-15 mt-5 rounded-2xl drop-shadow-xl"/>
            <h2 className="text-lg font-bold m-3">{props.date}</h2>
            <div className="flex flex-row w-fit gap-2">
                {props.services && props.services.map(index => {
                    return (
                        // <div className= justify-start">
                            <img src={`https://image.tmdb.org/t/p/original${index.logo_path}`} className="w-12 h-12 rounded-3xl object-contain" />
                        // </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default MyListCard