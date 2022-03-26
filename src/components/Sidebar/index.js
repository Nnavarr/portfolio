import React from "react";

const Sidebar = () => {
  return (
    <section class='home' id='aboutme'>
      <section class='socials'>
        <img src={require('../../assets/images/profile_pic.jpg')} alt="Noe Navarro smiling and leaning against a wall"/>
        <h2>Software Developer</h2>
        <div class='social-images'>
            {/* github logo and link */}
            <a href='https://github.com/Nnavarr' target='_blank'><img src={require('../../assets/images/GitHub-Mark.png')} id='GitHub' alt='GutHub logo of octopus cat'/></a>
            {/* linked in logo and link */}
            <a href='https://www.linkedin.com/in/no%C3%A9-navarro-27778452/' target='_blank'><img src={require('../../assets/images/linkedin_logo.png')} id='LinkedIn' alt='LinkedIn logo of blue circle with the letters i-n'/></a>
        </div>
      </section>
    </section>
  );
};

export default Sidebar;