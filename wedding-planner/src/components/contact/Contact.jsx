import React from 'react'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const locationIcons = <FontAwesomeIcon icon={faLocationDot} />
const telephoneIcons = <FontAwesomeIcon icon={faPhone} />
const emailIcons = <FontAwesomeIcon icon={faEnvelope} />

const contact = () => {
  return (
    <div id="contact">
      <div className={styles.contactTitle}>
        <img src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="/" />
        <p>Kontakt</p>
      </div>
      <div className={styles.contactContainer}>
          <div className={styles.contactOptions}>
            <div className={styles.containerIcons}>
              <div className={styles.borderLeft}></div>
              <div className={styles.borderTop}></div>
              <div className={styles.borderRight}></div>
              <div className={styles.Icons}>
                {locationIcons}
              </div>
            </div>
            <div className={styles.Info}>
              <p>Kontakt</p>
              <p>Wedding Angel</p>
              <p>Ewa Wiśniewska</p>
            </div>
          </div>
          <div className={styles.contactOptions}>
            <div className={styles.containerIcons}>
            <div className={styles.borderLeft}></div>
              <div className={styles.borderTop}></div>
              <div className={styles.borderRight}></div>
              <div className={styles.Icons}>
                {telephoneIcons}
              </div>
            </div>
            <div className={styles.Info}>
              <p>Telefon</p>
              <p>+48 481 552 923</p>
              <p>skype Ewa Wiśniewska</p>
            </div>
          </div>
          <div className={styles.contactOptions}>
            <div className={styles.containerIcons}>
            <div className={styles.borderLeft}></div>
              <div className={styles.borderTop}></div>
              <div className={styles.borderRight}></div>
              <div className={styles.Icons}>
                {emailIcons}
              </div>
            </div>
            <div className={styles.Info}>
                <p>E-mail</p>
                <p>Napisz do nas</p>
                <p>info@weddingplanner.pl</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.xxxx}>

        </div> */}
      </div>
  )
}

export default contact

