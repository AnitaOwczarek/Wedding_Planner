import React, {useState} from 'react'
import styles from './Blog.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slide_image_1 from './BlogImg/zdj1.avif'; 
import slide_image_2 from './BlogImg/zdj2.avif'; 
import slide_image_3 from './BlogImg/zdj3.avif'; 
import slide_image_4 from './BlogImg/zdj4.avif'; 
import slide_image_5 from './BlogImg/zdj5.avif';
import slide_image_6 from './BlogImg/zdj6.avif'; 
import slide_image_7 from './BlogImg/zdj7.avif'; 
import slide_image_8 from './BlogImg/zdj8.avif'; 
import slide_image_9 from './BlogImg/zdj9.avif'; 
import slide_image_10 from './BlogImg/zdj10.avif'; 
import slide_image_11 from './BlogImg/zdj11.avif';  

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Blog = () => {

  return (
     <div className={styles.blogPicturesContainer} id="blog">
      <div className={styles.blogTitle}>
        <p>Zajrzyjcie na nasz blog</p>
      </div>

      <Carousel 
      responsive={responsive} 
      className={styles.carousel} 
      autoPlay 
      infiniteLoop={true} 
      swipeable={false} 
      interval={4000}
      >
    <div className={styles.blogPictures} >
        <img src={slide_image_1} alt="/" />
        <p className={styles.blogPicturesDescribe}>5 pomysłów na organizację własnego wesela</p>
     </div>
      <div className={styles.blogPictures} >
        <img src={slide_image_2} alt="/" /><p className={styles.blogPicturesDescribe}>Saa weselna - jak ją wybrać?</p>
     </div>
      <div className={styles.blogPictures} >
        <img src={slide_image_3} alt="/" /><p className={styles.blogPicturesDescribe}>Bukiet Panny Młodej</p>
     </div>
      <div className={styles.blogPictures} >
        <img src={slide_image_4} alt="/" /><p className={styles.blogPicturesDescribe}>Targi ślubne</p>
     </div>
      <div className={styles.blogPictures} >
        <img src={slide_image_5} alt="/" /><p className={styles.blogPicturesDescribe}>Sweet, sweet czyli stół ze słodkościamy</p>
     </div>
      <div className={styles.blogPictures} >
        <img src={slide_image_6} alt="/" /><p className={styles.blogPicturesDescribe}>Rodzsaje ślubów</p>
     </div>
      <div className={styles.blogPictures} >
        <img src={slide_image_7} alt="/" /><p className={styles.blogPicturesDescribe}>Suknia ślubna - jak ją wybrać? </p>
     </div>
     <div className={styles.blogPictures} >
        <img src={slide_image_8} alt="/" /><p className={styles.blogPicturesDescribe}>Ślub w plenerze</p>
     </div>
     <div className={styles.blogPictures} >
        <img src={slide_image_9} alt="/" /><p className={styles.blogPicturesDescribe}>5 pomysłów na organizację wesela</p>
     </div>
     <div className={styles.blogPictures} >
        <img src={slide_image_10} alt="/" /><p className={styles.blogPicturesDescribe}>ślub w kolorze granatowym</p>
     </div>
     <div className={styles.blogPictures} >
        <img src={slide_image_11} alt="/" /><p className={styles.blogPicturesDescribe}>Weselne menu</p>
     </div>
      </Carousel>
    </div>
  )
}

export default Blog
