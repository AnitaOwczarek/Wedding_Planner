import React from 'react'
import styles from './Opinion.module.css'

const Comment = ({img, opinion, signature}) => {
  return (
    <div className={styles.comment}>
        <div className={styles.commentImg}>
        <img src={img} alt="/" />
        </div>
        <div className={styles.opinion}>
        <p>{opinion}</p>
        <div className={styles.signature}>{signature}</div>
        </div>
        
    </div>
  )
}

export default Comment
