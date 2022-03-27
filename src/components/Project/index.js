import React from "react";

const Project = (props) => {
  const { projectArray } = props;

  return (
    <div className='container'>
      {projectArray.map((proj) => (
        <section className='project item'>
          <div className='banner-secondary'>
            <a href={proj.link}><img src={require(`../../assets/images/${proj.image}`)} alt={proj.alt}></img></a>
            <div class='banner-text'>
              {proj.name}
              <a href={proj.repo}><img src={require(`../../assets/images/GitHub-Mark.png`)} id='gh-image' alt={proj.alt}></img></a>  
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Project;