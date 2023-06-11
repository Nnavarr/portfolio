import React from "react";
import reactLogo from '../../assets/images/react.jpg';


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
        {projectArray.map((proj, projIdx) => (
            <section key={projIdx} className='project'>
                <div className='project-title'>
                  <h3>{proj.name}</h3>
                  <img 
                    src={proj.icon}
                    className='icon-img'
                  />
                </div>
                <p className='description-text'>
                  {proj.description}
                </p>
                <div className='img-container'>
                  <div className='techlogo-container'>
                    {proj.logos.map((logo, logoIdx) => {
                      return <img key={logoIdx} src={logo} className='tech-logo' style={{ height: '50px', widght: '50px' }}/>
                      } 
                    )}
                  </div>
                  <div className='github-container'>
                    <a href={proj.repo}>
                      <img src={require('../../assets/images/githubLogo.jpg')} className='github-img'/>
                    </a>
                  </div>
                </div>
            </section>
          ))
        }
      </div>
    </div>
  )
}

export default Project;