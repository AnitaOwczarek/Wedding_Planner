import React from 'react'
import styles from './Offert.module.css'

const Card = ({img, title}) => {
  return (
    <div className={styles.offert}>
      <img src={img} alt="/" />
      <p className={styles.offertTitle}>{title}</p>
      <div className={styles.offertButtonContainer}>
        <button className={styles.offertButton}>Zobacz szczegóły</button>
     </div>
      
    </div>
  )
}

export default Card
