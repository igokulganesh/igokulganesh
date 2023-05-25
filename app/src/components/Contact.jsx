import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import SocialMedia from "./SocialMedia";
import { ScrollTop } from 'primereact/scrolltop';


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
    <div id="contact" className='p-5' style={{ minHeight: "96vh" }}>
      <div className='text-white'>
        <div className='flex justify-content-center'>
          <h2 className='mt-5 flex justify-content-center align-items-center font-bold' style={{ color: "#0098e5" }}>Let's Connect</h2>
        </div>
        <div className='flex justify-content-center'>
          <p className='justify-content-center align-items-center' style={{ color: "#0098e5" }}>Write me an email</p>
        </div>
        <div className='flex justify-content-center'>
          <SocialMedia />
        </div>
      </div>
      <div className='flex justify-content-center align-content-center flex-wrap'>
        <form className="justify-content-center align-items-center" style={{ minHeight: "500px", width: "900px" }} onSubmit={handleSubmit}>
          <div className=''>
            <div className="card flex justify-content-center m-3">
              <InputText value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Title' type="text" />
            </div>
            <div className="card flex justify-content-center m-3">
              <InputTextarea autoResize value={message} onChange={(e) => setMessage(e.target.value)} rows={9} cols={30} placeholder='Message' />
            </div>
            <div className="grid m-3 gap-2">
              <Button label="Submit" className='col' severity="info" />
              <Button label="Clear" className='col' severity="danger" onClick={clearForm} />
            </div>
          </div>
        </form>
      </div>
      <ScrollTop />
    </div>
  );
}

export default Contact;