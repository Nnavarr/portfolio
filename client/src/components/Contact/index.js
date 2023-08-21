import React, { useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { validateEmail } from '../../utils/helpers';
import instagramLogo from '../../assets/images/IG_New_Color_.jpg';
import githubLogo from '../../assets/images/githubLogo.jpg';
import linkedInLogo from '../../assets/images/linkedInLogo.jpg';

const dotenv = require('dotenv');
dotenv.config()

// Utility function for uppercase
const upperCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

function Contact({ backgroundImage }) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [buttonState, setButtonstate] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  // unpack each state individually
  const { name, email, subject, message } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();


    // if there is no error and state is set to false (not disabled)
    if (!buttonState) {
      try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/sendEmail', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            subject: subject,
            text: `${email} sent the following message ${message}`,
            from: name
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        // console.log('The email was successfully sent', data);
      } catch (error) {
        // console.error('Error', error);
      }
    }
  };

  const handleChange = (e) => {
    let valid = true;
    let error = '';
  
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        error = 'Your email is invalid.';
        valid = false;
      } 
    } else {
      if (!e.target.value.length) {
        error = `${upperCase(e.target.name)} is required. Please enter a value`;
        valid = false;
      } 
    } 
  
    setErrorMessage(error);
  
    if (valid) {
      const updatedFormState = { ...formState, [e.target.name]: e.target.value };
      setFormState(updatedFormState);
  
      if (updatedFormState.name && updatedFormState.email && updatedFormState.subject && updatedFormState.message) {
        setButtonstate(false);
      } else {
        setButtonstate(true);
      }
    } else {
      setButtonstate(true);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center -45px',
        backgroundAttachment: 'fixed'
      }}
    >
      <section className='container'>
        {/* title */}
        <div id='portfolio-container-contact'>
          <h1 style={{'color': 'white'}}>Let's collaborate, </h1>
          <h1 id='project-title-projects'>get in touch</h1>
        </div>

        {/* image container */}
        <div className='logo-container'>
          <a href='https://github.com/Nnavarr'>
            <img id='github-logo' className='social-logo' src={githubLogo}></img>
          </a>
          <a href='https://www.instagram.com/eon.py/'>
            <img id='ig-logo' className='social-logo' src={instagramLogo}></img>
          </a>
          <a href='https://www.linkedin.com/in/nnavarr/'>
            <img id='linkedIn-logo' className='social-logo' src={linkedInLogo}></img>
          </a>
        </div>

        {/* beginning of contact form */}
        <form onSubmit={handleSubmit} className='contact-form-container'>

          {/* name & email entry */}
          <div className='email-name-form-container'>
            {/* Name */}
            <input type='text' defaultValue={name} onBlur={handleChange} className='small-contact-info-left' placeholder='Name' name='name'/>
            {/* Email Address */}
            <input type="email" defaultValue={email} onBlur={handleChange} className='small-contact-info-right' placeholder='E-mail' name='email'/>
          </div>

          {/* Subject */}
          <input type='text' defaultValue={subject} onBlur={handleChange} placeholder='Subject' className='regular-contact-info' name='subject'/>

          {/* email message */}
          <textarea defaultValue={message} onBlur={handleChange} placeholder='Message' id='message-box' name='message'/>

          {errorMessage && (
            <div className='error-msg'>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className='button-container'>
            <button id='message-button' data-testid="button" type="submit" onClick={handleSubmit} disabled={buttonState}>Send a Message</button>
          </div>
        </form>
      </section>
    </motion.main>
  );
}

export default Contact;