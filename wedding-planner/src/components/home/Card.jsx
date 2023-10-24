import React from 'react'
import styles from './home.module.css'

const Card = ({image, description}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="image" />
      <p className={styles.cardTitle}>WEDDING PLANNER</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  )
}

export default Card
