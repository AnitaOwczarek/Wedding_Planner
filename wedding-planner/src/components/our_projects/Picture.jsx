import React from 'react'
import styles from './OurProjects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faMagnifyingGlass} />

const Picture = ({img}) => {
  return (
    <div className={styles.ourProjectsOnePicture}>
    <img src={img} alt="/" />
    <p>{element}</p>
    </div>
  )
}

export default Picture
