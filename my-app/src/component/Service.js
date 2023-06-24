
/*import './src/index.css';*/
import ServiceCard from './ServiceCard';
import'./Service.css';
import React from 'react';

function Service() {
  return (
     <div className='ServiceArticleContainer'>

        <ServiceCard
            TitleCard="Show my muse"
            DescriptionCard="Confié nous vos réseaux sociaux !"
        />
    
        <ServiceCard
            TitleCard="Besoin d’un site vitrine ?"
            DescriptionCard="On s’en occupe!"
        />

        <ServiceCard
            TitleCard="Support de com’"
            DescriptionCard="On crée vos flyers, carte de visite, miniature etc.."
        />

     </div>
    
  );
}



export default Service;
