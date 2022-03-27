import React from "react";

const Footer = () => {

  return(
    <footer>
      <div className='social-images'>
        {/* github logo and link */}
        <a href='https://github.com/Nnavarr' target='_blank' rel='noreferrer'><img src={require('../../assets/images/GitHub-Mark.png')} id='GitHub' alt='GutHub logo of octopus cat'/></a>
        {/* linked in logo and link */}
        <a href='https://www.linkedin.com/in/noe-navarro-27778452/' target='_blank' rel='noreferrer'><img src={require('../../assets/images/linkedin_logo.png')} id='LinkedIn' alt='LinkedIn logo of blue circle with the letters i-n'/></a>
      </div>  
    </footer>
  )
}

export default Footer;