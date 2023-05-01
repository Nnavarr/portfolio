import React from "react";
import { saveAs } from 'file-saver';
import myResume from '../../assets/docs/noe_navarro_resume.pdf';

const Resume = () => {
  // download function
  const downloadPDF = () => {
    saveAs(myResume, 'noe_navarro_resume.pdf');
  }

  // education container 
  const educationContainer = [
    {
      title: 'Full-Stack Web Development',
      subtitle: 'University of Arizona (2021-2022)',
      description: 'Intensive 6 month program covering the MERN stack and the following technologies: Bootstrap, CSS, Express.js, Git, Github, Heroku,  HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.'
    },
    {
      title: 'B.S. in Finance',
      subtitle: 'W.P. Carey School of Business at ASU (2014)',
      description: 'Developed skills in financial analysis, investment management, financial modeling, accounting, economics, communication, and ethical decision-making.'
    }
  ];

  // work experience
  const workContainer = [
    {
      title: 'Data Engineer',
      subtitle: 'U-Haul International (3/2022 - Current)',
      description: 'Intensive 6 month program covering the following: Bootstrap, CSS, Express.js, Git, Github, Heroku,  HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.'
    },

    {
      title: 'Financial Systems Developer',
      subtitle: 'Duncan Family Farms, LLC (8/2021 - 2/2022)',
      description: 'Intensive 6 month program covering the following: Bootstrap, CSS, Express.js, Git, Github, Heroku,  HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.'
    },

    {
      title: 'Sr. Financial / Data Analyst',
      subtitle: 'Duncan Family Farms, LLC (1/2021 - 7/2021)',
      description: 'Intensive 6 month program covering the following: Bootstrap, CSS, Express.js, Git, Github, Heroku,  HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.'
    },

    {
      title: 'Financial Analysis Supervisor',
      subtitle: 'U-Haul International (5/2019 - 1/2021)',
      description: 'Intensive 6 month program covering the following: Bootstrap, CSS, Express.js, Git, Github, Heroku,  HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.'
    },

    {
      title: 'Financial Analyst',
      subtitle: 'U-Haul International (5/2016 - 2/2019)',
      description: `Worked in a corporate finance role to assist our department in various Ad-Hoc analyses. This included, but was not limited to:

      * Quarterly / Annual reporting of various business lines
      * Financial Analysis of new / existing real estate acquisitions
      * Statistical Analysis for various investment decisions
      `
    },

    {
      title: 'Lock Desk Analyst',
      substitle: 'Movement Mortgage, LLC (6/2014 - 2/2016)',
      description: 'Worked to price and assign interest rates to mortgage applications based on buyer qualifications. This also included working directly with our Loan Officers to ensure their client met specific requirements for various state and federal loan programs.'
    }
  ]

  return(
    <div className='container'>
      {/*  title */}
      <div id='portfolio-container-resume'>
        <h1 style={{'color': 'white'}}>My</h1>
        <h1 id='project-title-projects'>Resume</h1>
      </div>

      {/* download resume button */}
      <section className='resume'>
        <button
          id='resume-button'
          onClick={downloadPDF}
        >
          Download
        </button>
      </section>

      {/* column container */}
      <div className='vertical-container'>
        <div className='resume-container'>
          <div>
            <h1 className='resume-side-title'>Education</h1>
            {/* education */}
            {educationContainer.map(item => (
              <section className='project'>
                <div className='project-title'>
                  <h3>{item.title}</h3>
                </div>
                <p className='description-text'>{item.description}</p>
              </section>
              ))
            }
          </div>

          <div>
            <h1 className='resume-side-title'>Work Experience</h1>
            {/* work experience */}
            {workContainer.map(item => (
              <section className='project'>
                <div className='project-title'>
                  <h3>{item.title}</h3>
                </div>
                <p className='description-text'>{item.description}</p>
              </section>
              ))
            }
          </div>
        </div>
        <div className='vertical-bar-right'></div>
      </div>
    </div>
  )
}

export default Resume;