import React from 'react';
import ContactForm from './ContactForm';
import '../styles/Contacts.css';


const Contacts = () => {
  return (
    <div className="container" >
      <h1 >Contact Site</h1>
      <p>Let me your Name and Email and i will contact you soon.</p>
      <ContactForm />
      <br />
      <button className='goBack' onClick={() => window.location = '/'}>Go back to the Homepage</button>
    </div>
  );
};

export default Contacts;
