import React from "react";
import Project from '../Project';

const Portfolio = () => {

  const projects = [
    {
      name: 'Hyperlink - Full Stack (MySQL)', 
      link: 'https://hyperlink-app.herokuapp.com/',
      image: 'hyperlink-lobby.png',
      alt: 'hyperlink app lobby',
      repo: 'https://github.com/Nnavarr/hyperlink-app'
    },
    {
      name: 'Social Media API: MongoDB',
      link: 'https://github.com/Nnavarr/social-media-api',
      image: 'insomnia_pic.png',
      alt: 'piture of insomnia back end',
      repo: 'https://github.com/Nnavarr/social-media-api'
    },
    {
      name: 'Rub-Buddy - Website',
      link: 'https://nnavarr.github.io/run-buddy/',
      image: 'run-buddy.jpg',
      alt: 'run-buddy website',
      repo: 'https://github.com/Nnavarr/run-buddy'
    },
    {
      name: 'Stockwyse: Stock Data API',
      link: 'https://nnavarr.github.io/stockwyse/',
      image: 'stockwyse-screenshot.png',
      alt: 'Stowyse app snapshot',
      repo: 'https://github.com/Nnavarr/stockwyse'
    },
    {
      name: 'Financial Market Dashboard - R Dashboard',
      link: 'https://rpubs.com/nnavarr7/580588',
      image: 'market-picture.jpg',
      alt: 'financial market dashboard snapshot',
      repo: 'https://github.com/Nnavarr/Market-Dashboard'
    },
    {
      name: 'Forecasting Tool: R - Shiny App',
      link: 'https://nnavarr.shinyapps.io/Forecast_Tool/?_ga=2.170544352.1161545448.1637389839-1798559397.1637389839',
      image: 'inv-forecast.png',
      alt: 'forecasting tool snapshot',
      repo: 'https://github.com/Nnavarr/Inventory-Forecast'
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