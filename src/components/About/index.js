import React from "react";

const About = () => {
  return(
    <section className='aboutme'>
      <section className='home' id='aboutme'>
        <div>
          {/* python logo */}
          <img src={require('../../assets/images/python_logo.jpg')} id='python-logo' alt='python logo'/>

          {/* AI profile image */}
          <img src={require('../../assets/images/ai_profile_noe.jpeg')} id='profile-pic' alt="Noe Navarro as depicted by an AI art style as a profile view"/>

          {/* Javascript logo */}
          <img src={require('../../assets/images/js_logo.jpg')} id='javascript-logo' alt='Javascript logo'/>
        </div>

        <h1>Noé Navarro</h1>
        <h2 id='title' className='nameTitle'> Full Stack Software Developer</h2>
      </section>
      <h2 id='aboutme-title'>About Me</h2>
      <p id='aboutme-paragraph'>
        Hi there, I'm Noe Navarro! I'm a full stack developer with a background in corporate finance. I'm passionate about leveraging technology to solve problems and create efficient and effective solutions.

        <br></br>
        <br></br>

        After working in finance for several years, I decided to pursue my interest in coding and web development. I've since completed a full stack web development program and have gained experience working on various projects, ranging from data engineering and back-end development to full-stack applications using the MERN/GRAND stack. In addition to these JS stacks, I also have expertise in Python, SQL, and Azure Databricks. I've worked on projects involving data analysis, data modeling, and ETL (extract, transform, load) processes.

        <br></br>
        <br></br>

        As a developer, I enjoy the challenge of problem-solving and the satisfaction of seeing a project come to life. This has exposed me to a few programming languages and frameworks; each used to solve a different challenge. In my previous career in corporate finance, I honed my analytical and critical thinking skills. I'm able to apply those skills to my work in web development and data engineering to create efficient and well-designed solutions. I'm also comfortable working with stakeholders to understand their needs and deliver projects that meet their requirements.

        <br></br>
        <br></br>

        When I'm not coding, you can find me playing guitar or staying active via gym and bike rides around town. I subscribe to the growth  mindset and I enjoy the pursuit of my better self.

        <br></br>
        <br></br>

        Feel free to reach out to me if you'd like to discuss a potential collaboration or just chat about tech and finance!

        <br></br>
        <br></br>

        Happy browsing! 
      </p>
    </section>
  )
}

export default About;