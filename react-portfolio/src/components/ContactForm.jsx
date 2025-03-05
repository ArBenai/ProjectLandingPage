import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="BigContainer"> 
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ marginRight: '10px' }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            style={{ padding: '5px', marginRight: '10px' }}
          />
        </div>

        <div className="container" style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ marginRight: '10px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{ padding: '5px', marginRight: '10px' }}
          />
        </div>

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
