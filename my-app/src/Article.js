
import Service from "./component/Service.js";
import ContactPhrase from "./component/ContactPhrase.js";
import ContactButton from "./component/ContactButton.js";
import './Article.css';

function Article() {
    return (
       <article>
          <h4>
          Tous nos services.
        </h4>
          <Service/>
            <ContactPhrase
                Phrase='Vous ne<br> s’avez pas quoi nous confier ? 
                passer nous un coup de fil c’est gratuit !'
            />
            <ContactButton
                ButtonName='Prendre un rendez-vous'
            />
       </article>
   
      
    );
  }
  
  export default Article;
  

