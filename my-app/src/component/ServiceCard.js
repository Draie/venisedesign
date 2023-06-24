import  './ServiceCard.css';
import React from 'react';
function ServiceCard({TitleCard,DescriptionCard}){
    return (
        <div className='ServiceCard '>

            <p className='TitleCard'>{TitleCard}</p>
        <p>{DescriptionCard} !</p>
        </div>
    );
}


export default ServiceCard;
