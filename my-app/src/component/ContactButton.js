import'./ContactButton.css';

function ContactButton({ButtonName}){
    return(
       <p className='ContactButtonStyle'><a>{ButtonName}</a></p>
    );
}

export default ContactButton;