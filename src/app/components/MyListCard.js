import React from 'react'
import styles from './listCard.module.css'

const MyListCard = (props) => {
    return (
        <div class={styles.card}>
            <h3>{props.title}</h3>
            <img src={`https://image.tmdb.org/t/p/original${props.image}`} className={styles.poster} />
            <h2>{props.date}</h2>
            <div>
                {props.services && props.services.map(index => {
                    return (
                        <img src={`https://image.tmdb.org/t/p/original${index.logo_path}`} className={styles.poster} />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default MyListCard