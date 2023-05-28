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
    <div id="contact" className='p-5' style={{ minHeight: "75vh" }}>
      <div className='flex justify-content-center'>
        <h2 className='flex justify-content-center align-items-center font-bold text-light-blue'>Let's Connect</h2>
      </div>
      <div className='flex justify-content-center'>
        <p className='justify-content-center align-items-center text-light-blue'>Write me an email</p>
      </div>
      <div className='flex justify-content-center flex-wrap  align-items-center gap-3'>
        <div className=''>
          <img src={connectImg} alt='contact' height={"300px"} className='responsive-image' />
        </div>
        <div className=''>
          <div className='flex justify-content-center align-content-center flex-wrap'>
            <form className="justify-content-center align-items-center" onSubmit={handleSubmit}>
              <div className=''>
                <div className="card flex justify-content-center m-3">
                  <InputText value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Title' className="responsive-textarea" />
                </div>
                <div className="card flex justify-content-center m-3">
                  <InputTextarea autoResize value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder='Message' />
                </div>
                <div className="grid m-3 gap-2">
                  <Button label="Submit" className='col' severity="info" />
                  <Button label="Clear" className='col' severity="danger" onClick={clearForm} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-content-center mt-5'>
        <SocialMedia />
      </div>
      <p className='flex justify-content-center text-sm mt-1 font-medium'>Check out my profiles on these platforms</p>
      <ScrollTop />
    </div>
  );
}

export default Contact;