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
                  <div className='badge-container'>
                  {proj.badges.map((badge, badgeIdx) => {
                    return (
                      <div key={badgeIdx} className={badge + '-badge'}>
                        <h5 className='tech-badge-text'>{badge}</h5>
                      </div>
                    );
                  })}
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