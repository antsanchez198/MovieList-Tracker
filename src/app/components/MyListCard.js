import React from 'react'
import styles from './listCard.module.css'

const MyListCard = (props) => {
    return (
        <div class={styles.card}>
            <h3 className="text-3xl font-bold">{props.title}</h3>
            <img src={`https://image.tmdb.org/t/p/original${props.image}`} className={styles.poster} />
            <h2>{props.date}</h2>
            <div className="flex flex-row w-fit">
                {props.services && props.services.map(index => {
                    return (
                        <div className="w-10 h-10 rounded-s-lg">
                            <img src={`https://image.tmdb.org/t/p/original${index.logo_path}`} className="object-fill" />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default MyListCard