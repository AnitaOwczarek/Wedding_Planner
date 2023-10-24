import React from 'react'
import styles from './home.module.css' 


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';

const Home = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
  return (
    <div className={styles.home} id="home">
      <Carousel responsive={responsive} >
            <div>
                <Card 
                image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                description="Zaprojektujemy twoje wesele"
                />
            </div>
            <div>
                <Card 
                image="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                description="Łączymy nowoczesne trendy z tradycją"
                />
            </div>
            <div>
                <Card 
                image="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" 
                description="Zaprojektój z nami swój ślub"
                />
            </div>
            <div>
                <Card 
                image="https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" 
                description="Dbamy o każdy szczegół"
                />
            </div>               
            </Carousel>
            <div className={styles.aboutUs}>
              <div className={styles.sectionI}>
                <h1>W KILKU SŁOWACH O NAS...</h1>
                <div className={styles.sectionIDescription}>
                  <p>Moja firma specjalizuje się w kompleksowej organizacji wesel i ceremonii ślubnych, oferując szeroki zakres usług. Pomagamy przyszłym małżonkom w zaplanowaniu każdego aspektu ich wymarzonego ślubu, począwszy od wybierania lokalizacji, dostawców, po dekoracje i oprawę muzyczną. Jesteśmy ekspertami w tworzeniu spersonalizowanych koncepcji weselnych, które odzwierciedlają osobowość i marzenia pary. </p>
                </div>
              </div>
              <div className={styles.sectionII}>
                <div className={styles.person}>
                  <img src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="owner"/>
                </div>
                <div className={styles.sectionIIDescribe}>
                  <h2 className={styles.sectionIItitle}>Właścicielka Wedding planner</h2>
                  <h2 className={styles.sectionIIName}>Ewa Wiśniowska</h2>
                  <div className={styles.sectionIIQuality}>
                    <p>Jestem doświadczoną planistką wesel, specjalizującą się w tworzeniu niezapomnianych i spersonalizowanych ceremonii ślubnych. Ukończyłam prestiżową szkołę eventów i wedding planningu, co wyposażyło mnie w wiedzę i umiejętności potrzebne do organizacji wyjątkowych wydarzeń. </p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Home
