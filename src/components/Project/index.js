import React from "react";

const Project = (props) => {
  const { projectArray } = props;

  return (
    <div className='container'>
      <div id='portfolio-container'>
        <h1 
          style={{ color: 'white' }}
        >
          Checkout my
        </h1>
        <h1
          id='project-title-projects'
        >
          Projects
        </h1>
      </div>
      <div className='project-container'>
        {projectArray.map((proj) => (
            <section className='project'>
                <div className='project-title'>
                  {proj.name}
                </div>
                <p className='description-text'>
                  {proj.description}
                </p>
                <div className='github-container'>
                  <a href={proj.repo}>
                    <img src={require('../../assets/images/githubLogo.jpg')} className='github-img'/>
                  </a>
                </div>
            </section>
          ))
        }
      </div>
    </div>
  )
}

export default Project;