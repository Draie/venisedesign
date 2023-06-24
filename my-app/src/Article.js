
import Service from "./component/Service.js";
import ContactPhrase from "./component/ContactPhrase.js";
import './Article.css';
import ContactForm from './component/ContactForm.js';
import React from 'react';
function Article() {
    return (
       <article>
          <h4>
          Tous nos services.
        </h4>
          <Service/>
            <ContactPhrase
                Phrase='Vous ne s’avez pas quoi nous confier ? 
                Passé nous un coup de fil c’est gratuit !'
            />
            <ContactForm/>
       </article>

       
   
      
    );
  }
  
  export default Article;
  

