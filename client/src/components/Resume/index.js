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
      description: 'As a Data Engineer, I work to design, create, implement, and monitor data pipelines related to payment processing and any Ad-Hoc pipeline requests for non-payment data. Here, I use Microsoft Azure and the Databricks environment to write Python/SQL/Spark code. One of my standout projects was to develop a Data Quality Assurance (DQA) framework to ensure data quality. Lastly, I also led the development of a React App (JavaScript) in order to visualize an existing Neo4j graph database'
    },

    {
      title: 'Financial Systems Developer',
      subtitle: 'Duncan Family Farms, LLC (8/2021 - 2/2022)',
      description: 'Assisted in the development of data aggregation processes with the goal of improving cost reporting quality across many operational and accounting systems. Here I used Python and Azure VMs to ensure our processes ran on a scheduled basis. Additionally, I developed Power BI reports, monthly financial reports, and ad-hoc financial analysis.'
    },

    {
      title: 'Sr. Financial / Data Analyst',
      subtitle: 'Duncan Family Farms, LLC (1/2021 - 7/2021)',
      description: 'Worked in a small team to conduct financial/data analysis for various operational segments of our farms. This included traditional financial analysis and spreadsheet development to analyze potential investments in farm infrastructure and overall tracking of farm performance.'
    },

    {
      title: 'Financial Analysis Supervisor',
      subtitle: 'U-Haul International (5/2019 - 1/2021)',
      description: "Managed a small team of financial analysts (3 including an intern) where I worked to implement our Director (John Good) and CFOs (Jason Berg) vision. This period also included heavy automation any/all reporting & recurring analyses using Python and SQL. See Financial Analyst below for additional info."
    },

    {
      title: 'Financial Analyst',
      subtitle: 'U-Haul International (5/2016 - 2/2019)',
      description: `Worked in a corporate finance role to assist our department in various Ad-Hoc analyses. This included, but was not limited to:

      * Quarterly / Annual reporting of various business lines
      * Financial Analysis of new / existing real estate acquisitions
      * Statistical Analysis for various investment decisions
    
      The use of Python/SQL/R helped to automate our workflow and reporting in order to free-up time for ad-hoc analyses used in Quarterly/Annual shareholder meetings by our CFO, Jason Berg.
      `
    },

    {
      title: 'Lock Desk Analyst',
      subtitle: 'Movement Mortgage, LLC (6/2014 - 2/2016)',
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
            <div className='side-title-container'>
              <h1 className='resume-side-title'>Education</h1>
            </div>
            {/* education */}
            {educationContainer.map(item => (
              <section className='project'>
                {/* main title */}
                <div className='project-title'>
                  <h3>{item.title}</h3>
                </div>
                {/* subtitle */}
                <div className='project-subtitle'>
                  <h5>{item.subtitle}</h5>
                </div>

                <p className='description-text'>{item.description}</p>
              </section>
              ))
            }
          </div>

          {/* right resume section container */}
          <div>
            <div className='side-title-container'>
              <h1 className='resume-side-title'>Work Experience</h1>
            </div>
            {/* work experience */}
            {workContainer.map(item => (
              <section className='project'>
                <div className='project-title'>
                  <h3>{item.title}</h3>
                </div>
                {/* subtitle */}
                <div className='project-subtitle'>
                  <h5>{item.subtitle}</h5>
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