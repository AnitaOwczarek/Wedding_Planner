import React from 'react'
import styles from './Offert.module.css'
import Card from './Card'

const Offert = () => {
  return (
    <div className={styles.mainContainer} id="offert">
      <div className={styles.title}><p>Nasza oferta</p></div>
      <div className={styles.allOferts}>
        <Card
         img="https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title="Kompleksowa organizacja ślubu i wesela"
        />
         <Card
         img="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        title="Częściowa organizacja ślubu i wesela"
        />
         <Card
         img="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VlZGluZyUyMHBsYW5uZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title="Koordynacja ślubu i wesela"
        />
        <Card
         img="https://images.unsplash.com/photo-1562616293-1a11a7816903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZGVzbWFpZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title="Ślub dla par mieszkających za granicą"
        />
        <Card
         img="https://images.unsplash.com/photo-1607861883183-4c0dc975f550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0ZG9vciUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title="ślub w plenerze"
        />
         <Card
         img="https://plus.unsplash.com/premium_photo-1673467102467-3b6e4542799a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        title="Wypożyczenie dekoracji"
        />
      </div>
    </div>
  )
}

export default Offert
