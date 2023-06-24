import'./ContactButton.css';
import React from 'react';

function ContactButton({ButtonName}){
    return(
       <p className='ContactButtonStyle'><a>{ButtonName}</a></p>
    );
}

export default ContactButton;