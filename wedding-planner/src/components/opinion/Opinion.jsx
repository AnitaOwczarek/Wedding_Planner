import React from 'react'
import styles from './Opinion.module.css'
import Comment from './Comment'

const Opinion = () => {
  return (
    <div id="opinion">
      <div className={styles.opinionHeadline}>
        <p>Poznajcie opinie Par, które nam zaufały</p>
      </div>
      <div className={styles.allOpinions}>
        <Comment
            img= "https://images.unsplash.com/photo-1543932927-a9def13a0e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            opinion = "Nasze wesele było absolutnie niesamowite, dzięki profesjonalizmowi tej firmy. Każdy detal został dopracowany, a dekoracje były urzekające. Od pierwszego spotkania z planistką do momentu, gdy opuściliśmy salę weselną, czuliśmy się kompletnie zrelaksowani i pewni, że jesteśmy w najlepszych rękach. Zadbasz o wszystko, co jest potrzebne, a nawet o te rzeczy, o których nie pomyśleliśmy."
            signature="Ania i Marek"
        />
        <Comment
            img= "https://images.unsplash.com/photo-1543260987-d0169ccf36f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
            opinion = "Dzięki pomocy tej firmy miałam najpiękniejszy dzień w moim życiu. Organizacja była perfekcyjna, a personel był niesamowicie pomocny. Zawsze można było na Was liczyć, aby rozwiązać wszelkie problemy i zmartwienia."
            signature="Basia i Grzegorz"
        />
         <Comment
            img= "https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
            opinion = "Nie mogłam sobie wyobrazić lepszego wesela. Wszystko było tak, jak sobie wymarzyliśmy, i to dzięki doskonałej pracy tej firmy. Od pierwszego spotkania poczuliśmy, że jesteśmy w dobrych rękach. To była podróż pełna współpracy, pomysłów i profesjonalizmu. Nasza ceremonia była intymna i wzruszająca, a przyjęcie weselne rozświetlone pięknymi dekoracjami. "
            signature="Kasia i Robert"
        />
      </div>
      <div className={styles.loadMoreButton}>
        <button>Pokaż więcej</button>
      </div>
    </div>
  )
}

export default Opinion
