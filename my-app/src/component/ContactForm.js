import React, { useState } from 'react';
import'./ContactForm.css';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  
  const validatePhoneNumber = (phoneNumber) => {
    const frenchPhoneNumberRegex = /^(0|\+33)[1-9]( ?-?\.?[0-9]{2}){4}$/;
    return frenchPhoneNumberRegex.test(phoneNumber);

    
  };

  const validateEmail = (emailAddress) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress);
  };

  const sendEmail = (templateParams) => {
    const serviceId = 'service_u40cf0b';
    const templateId = 'template_mwhwp98';
    const userId = '72tp7DA3YfLKOAHhl';

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Le formulaire a été envoyé avec succès !', response);
        // Réinitialisez les champs du formulaire après soumission
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de l\'envoi du formulaire :', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phone)) {
      setError('Numéro de téléphone invalide !');
      return;
    }

    if (!validateEmail(email)) {
      setError('Adresse e-mail invalide !');
      return;
    }

   
    setError('');

    const templateParams = {
      name,
      phone,
      email,
      message,
    };

    sendEmail(templateParams);
  };

  return (
    <form>
      <div>
        <label>Nom </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Téléphone </label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="^0[1-9]( ?-?\.?[0-9]{2}){4}$" required />
      </div>
      <div>
        <label>E-mail </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Demande </label>
        <textarea className='TextareaInput' value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
       
      <button type="submit" onClick={handleSubmit}>Envoyer</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default ContactForm;
