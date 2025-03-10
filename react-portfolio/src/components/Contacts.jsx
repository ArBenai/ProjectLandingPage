import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contacts.css';


const Contacts = () => {
  return (
    <div className="container" >
      <h1 >Kontaktieren Sie uns</h1>
      <p>"Tipp uns an" und wir melden uns bald bei dir.</p>
      <ContactForm />
      <br />
      <button className='goBack' onClick={() => window.location = '/'}>Zur Homepage zurück</button>
    </div>
  );
};

export default Contacts;
