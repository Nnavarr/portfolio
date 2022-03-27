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
    },
    {
      name: 'Social Media API',
      link: 'https://github.com/Nnavarr/social-media-api',
      image: 'insomnia-pic.png',
      alt: 'piture of insomnia back end'
    }
  ];

  return (
    <Project
      projectArray={projects}
    > 
    </Project>
    );
  };

export default Portfolio;