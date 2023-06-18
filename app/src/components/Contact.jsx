import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import SocialMedia from "./SocialMedia";
import { ScrollTop } from 'primereact/scrolltop';
import connectImg from "../assets/images/contact.jpg";

import "../assets/css/contact.css";


function Contact() {
  const email = "igokulganesh@gmail.com";
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a mailto link
    const mailto = `mailto:${email}?subject=${subject}&body=${message}`;

    // Open the default mail app in the user's system
    window.location.href = mailto;
  };

  const clearForm = (e) => {
    e.preventDefault();
    setMessage("");
    setSubject("");
  }

  return (
    <div id="contact" style={{ minHeight: "75vh" }}>
      <div className='flex justify-content-center'>
        <h2 className='flex justify-content-center align-items-center font-bold text-light-blue mt-5'>Let's Connect</h2>
      </div>
      <div className='flex justify-content-center'>
        <p className='justify-content-center align-items-center text-light-blue'>Write me an email</p>
      </div>
      <div className='flex justify-content-center flex-wrap  align-items-center gap-3'>
        <img src={connectImg} alt='contact' height={"300px"} className='responsive-image' />
        <div className='flex justify-content-center align-content-center flex-wrap'>
          <form onSubmit={handleSubmit} className='responsive-form'>
            <InputText value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Title' style={{ width: "100%" }} />
            <div className="card flex justify-content-center mt-2 mb-3">
              <InputTextarea autoResize value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder='Message' />
            </div>
            <div className="flex justify-content-center mt-3 gap-2">
              <Button label="Submit" size='small' className='border-noround' severity="info" />
              <Button label="Clear" size='small' severity="danger" className='border-noround' onClick={clearForm} />
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-content-center mt-5'>
        <SocialMedia />
      </div>
      <div className='flex justify-content-center'>
        <p className='justify-content-center align-items-center text-sm mt-1 font-medium'>
          Check out my profiles on these platforms
        </p>
      </div>
      <ScrollTop />
    </div>
  );
}

export default Contact;