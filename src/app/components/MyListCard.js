import React from 'react'
import styles from './listCard.module.css'

const MyListCard = (props) => {
    return (
        <div class={styles.card}>
            <img src={`https://image.tmdb.org/t/p/original${props.image}`} className={styles.poster} />
            <h3>{props.title}</h3>
        </div>
    )
}

export default MyListCard