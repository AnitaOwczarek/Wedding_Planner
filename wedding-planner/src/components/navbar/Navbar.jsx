import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const hamburgerIcon = <FontAwesomeIcon icon={faBars}/>
    const XIcon = <FontAwesomeIcon icon={faX} className={styles.XIcon}/>
  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        <h1 className={styles.navbar_titile}>Wedding Planner</h1>
        <div className={styles.navbar_line}></div>
        <nav className={styles.nav}>
            <ul className={nav ? [styles.ul, styles.active].join(' ') : [styles.ul]}>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setNav(!nav)}>Home</Link>
                </li>
                <li>
                    <Link to="offert" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNav(!nav)}>Offert</Link>
                </li>
                <li>
                    <Link to="ourProjects" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNav(!nav)}>Our projects</Link>
                </li>
                <li>
                    <Link to="opinion" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNav(!nav)}>Review</Link>
                </li>
                <li>
                    <Link to="blog" spy={true} smooth={true} offset={-10} duration={500} onClick={() => setNav(!nav)}>Blog</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={+50} duration={500} onClick={() => setNav(!nav)}>Contact</Link>
                </li>
            </ul>
        </nav>
      </header>
      <div className={styles.icons} onClick={() => setNav(!nav)}>{nav ? XIcon : hamburgerIcon}</div>
    </div>
  )
}

export default Navbar
