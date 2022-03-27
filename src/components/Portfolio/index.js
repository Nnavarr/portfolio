import React from "react";
import Project from '../Project';

const Portfolio = () => {

  const projects = [
    {
      name: 'Hyperlink', 
      link: 'https://hyperlink-app.herokuapp.com/',
      image: 'hyperlink-lobby.png',
      alt: 'hyperlink app lobby'
    },
    {
      name: 'Rub-Buddy',
      link: 'https://nnavarr.github.io/run-buddy/',
      image: 'run-buddy.jpg',
      alt: 'run-buddy website'
    },
    {
      name: 'Financial Market Dashboard',
      link: 'https://rpubs.com/nnavarr7/580588',
      image: 'market-picture.jpg',
      alt: 'financial market dashboard snapshot'
    },
    {
      name: 'Forecasting Tool',
      link: 'https://nnavarr.shinyapps.io/Forecast_Tool/?_ga=2.170544352.1161545448.1637389839-1798559397.1637389839',
      image: 'inv-forecast.png',
      alt: 'forecasting tool snapshot'
    },
    {
      name: 'Stockwyse',
      link: 'https://nnavarr.github.io/stockwyse/',
      image: 'stockwyse-screenshot.png',
      alt: 'Stowyse app snapshot'
    }
  ];

  return (
    <Project
      projectArray={projects}
    > 
    </Project>
    // <section class='main-content'>
    //   {/* project */}
    //   <section class='projects' id='projects'>
    //     <h2>Projects</h2>

    //     {/* main project */}
    //     <section class='project-second'>
    //       <div class='banner-secondary'>
    //         <a href='https://hyperlink-app.herokuapp.com/' target='_blank'><img src='.\assets\images\hyperlink-lobby.png' alt='hyperlink lobby'/></a> 
    //         <div class='banner-text'>Hyperlink App</div>
    //       </div>
    //       <div class='col-gap'></div>
    //       <div class='banner-secondary' id="runbuddy">
    //           <a href='https://nnavarr.github.io/run-buddy/' target='_blank'><img src='.\assets\images\run-buddy.jpg' alt='runner kneeling down and tying their shoe'/></a> 
    //           <div class='banner-text'>Run-Buddy Website</div>
    //       </div>
    //     </section>

    //     {/* second row */}
    //     <section class='project-second'>
    //       <div class='banner-secondary'>
    //         <a href='https://rpubs.com/nnavarr7/580588' target='_blank'><img src='.\assets\images\market-picture.jpg' alt='stock market line chart in neon style'/></a>
    //         <div class='banner-text'>Financial Market Dashboard</div>
    //       </div>
    //         <div class='col-gap'></div>
    //         <div class='banner-secondary'>
    //           <a href='https://nnavarr.shinyapps.io/Forecast_Tool/?_ga=2.170544352.1161545448.1637389839-1798559397.1637389839' target='_blank'><img src='.\assets\images\inv-forecast.png' alt='zoom in ofa chart with trends during a business meeting'/></a>
    //           <div class='banner-text'>Inventory Forecast</div>
    //         </div>
    //     </section>

    //     {/* third project */}
    //     <section class='project-second third-row'>
    //         <div class='banner-secondary' id='stockwyse'>
    //           <a href='https://nnavarr.github.io/stockwyse/' target='_blank'><img src='.\assets\images\stockwyse.png' alt='stockwyse app example'/></a>
    //           <div class='banner-text'>Stockwyse App: Stock API</div>
    //         </div>
    //         <div class='col-gap'></div>
    //     </section>
    //   </section>
    // </section>
    );
  };

export default Portfolio;