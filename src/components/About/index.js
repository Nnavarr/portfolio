import React from "react";

const About = () => {
  return(
    <section className='aboutme'>
      <section className='home' id='aboutme'>
        <img src={require('../../assets/images/profile_pic.jpg')} id='profile-pic' alt="Noe Navarro smiling and leaning against a wall"/>
        <h2 id='title' className='nameTitle'>Noé Navarro | Software Developer</h2>
      </section>
      <h2 id='aboutme-title'>About Me</h2>
      <p id='aboutme-paragraph'>
          Hello, I'm Noe! I graduated with a Bachelor's in Finance 2014 from the W.P. Carey School of Business. Since then, I've spent the majority of my career as a Financial Analyst at U-Haul. Through my time there, I discovered I enjoyed working with data and developing automated reports/processes much more than the finance. As a result, I decided to pursue a different career path where I'd get to do just that.  
          <br></br>
          Currently, I work for Duncan Family Farms as a Financial Systems Developer. There, I help build custom tools/processes using Python, SQL, and Power BI; aimed at improving a variety of processes from general financial month end close to reconciling various operational systems in an effort to assist both finance and ops teams. To further improve my software development skillset, during the last quarter of 2021, I enrolled into a full-stack developer bootcamp through the University of Arizona. It is through this bootcamp and self-taught resources that I hope to continue providing value to organizations by leveraging the hybrid analyst + developer skillset.
          <br></br>
          Happy browsing! 
      </p>
    </section>
  )
}

export default About;