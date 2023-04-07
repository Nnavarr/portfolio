import React from "react";

const Project = (props) => {
  const { projectArray } = props;

  return (
    <div className='container'>
      {/* title */}
      <div>
        <h2>Checkout my Projects</h2>
      </div>
      {projectArray.map((proj) => (
        <section>
          <div>
            <div class='project-title'>
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