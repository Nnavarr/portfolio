import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import instagramLogo from '../../assets/images/IG_New_Color_.jpg';
import githubLogo from '../../assets/images/githubLogo.jpg';
import linkedInLogo from '../../assets/images/linkedInLogo.jpg';
// import sendEmail from '../../utils/email';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  // unpack each state individually
  const { name, email, subject, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section className='container'>
      {/* title */}
      <div id='portfolio-container-contact'>
        <h1 style={{'color': 'white'}}>Let's collaborate, </h1>
        <h1 id='project-title-projects'>get in touch</h1>
      </div>

      {/* image container */}
      <div className='logo-container'>
        <a href='https://github.com/Nnavarr'>
          <img id='github-logo' src={githubLogo}></img>
        </a>
        <a href='https://www.instagram.com/eon.py/'>
          <img id='ig-logo' src={instagramLogo}></img>
        </a>
        <a href='https://www.linkedin.com/in/nnavarr/'>
          <img id='linkedIn-logo' src={linkedInLogo}></img>
        </a>
      </div>

      {/* beginning of contact form */}
      <form onSubmit={handleSubmit} className='contact-form-container'>

        {/* name & email entry */}
        <div className='email-name-form-container'>
          {/* Name */}
          <input type='text' defaultValue={name} onBlur={handleChange} className='small-contact-info-left' placeholder='Name'/>
          {/* Email Address */}
          <input type="email" defaultValue={email} onBlur={handleChange} className='small-contact-info-right' placeholder='E-mail'/>
        </div>

        {/* Subject */}
        <input type='text' defaultValue={subject} onBlur={handleChange} placeholder='Subject' className='regular-contact-info'/>

        {/* email message */}
        <textarea defaultValue={message} onBlur={handleChange} placeholder='Message' id='message-box'/>

        {errorMessage && (
          <div className='error-msg'>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className='button-container'>
          <button id='message-button' data-testid="button" type="submit" onClick={handleSubmit}>Send a Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;