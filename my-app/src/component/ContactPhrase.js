import'./ContactPhrase.css'
import React from 'react';
function ContactPhrase({Phrase}){
    return(
        <div className='ContactPhraseStyle'>
          <p>  {Phrase}</p>
        </div> 
    );
}

export default ContactPhrase;