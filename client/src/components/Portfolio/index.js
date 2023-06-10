import React from "react";
import Project from '../Project';
import { motion } from 'framer-motion/dist/framer-motion'
import headphoneImg from '../../assets/images/ic_headset_mic_24px.svg';
import codeImg from '../../assets/images/ic_code_24px.svg';
import faceImg from '../../assets/images/ic_face_24px.svg';
import weightImg from '../../assets/images/ic_fitness_center_24px.svg';
import assessmentImg from '../../assets/images/ic_show_chart_24px.svg';
import shippingImg from '../../assets/images/ic_local_shipping_24px.svg';
import timelineImg from '../../assets/images/ic_timeline_24px.svg';

const Portfolio = ({ backgroundImage }) => {

  const projects = [
    {
      name: 'Chorezy - Full Stack (MERN)', 
      link: 'https://chorezy2.herokuapp.com/',
      image: 'chorezy_app.png',
      alt: 'chorezy app lobby',
      repo: 'https://github.com/Nnavarr/Chorezy',
      description: 'A full-stack application built using the MERN stack (MongoDB, Express, React, Node.js) that allows parents to create and assign tasks to their children, and children to earn points and rewards for completing their tasks.',
      icon: faceImg
    },
    {
      name: 'Hyperlink - Full Stack (MySQL)', 
      link: 'https://hyperlink-app.herokuapp.com/',
      image: 'hyperlink-lobby.png',
      alt: 'hyperlink app lobby',
      repo: 'https://github.com/Nnavarr/hyperlink-app',
      description: 'A full-stack web application built using the MERN stack that allows users to post and respond to content in a Reddit-like fashion. The application includes features such as user authentication, profile creation, post creation, and commenting.',
      icon: headphoneImg

    },
    {
      name: 'Social Media API: MongoDB',
      link: 'https://github.com/Nnavarr/social-media-api',
      image: 'insomnia_pic.png',
      alt: 'piture of insomnia back end',
      repo: 'https://github.com/Nnavarr/social-media-api',
      description: 'A social media API built using MongoDB, Mongoose, Express, and Node.js. It includes two main schemas, User and Thought, and allows for CRUD operations on both.',
      icon: codeImg
    },
    {
      name: 'Run-Buddy - Website',
      link: 'https://nnavarr.github.io/run-buddy/',
      image: 'run-buddy.jpg',
      alt: 'run-buddy website',
      repo: 'https://github.com/Nnavarr/run-buddy',
      description: 'A fitness training website built with core HTML & CSS in mind. This was created to simulate a real-world example of a single page website for a local business.',
      icon: weightImg
    },
    {
      name: 'Stockwyse: Stock Data API',
      link: 'https://nnavarr.github.io/stockwyse/',
      image: 'stockwyse-screenshot.png',
      alt: 'Stowyse app snapshot',
      repo: 'https://github.com/Nnavarr/stockwyse',
      description: 'A web application that pulls historical stock performance and shows whether the market views it favorably',
      icon: timelineImg
    },
    {
      name: 'Financial Market Dashboard - R',
      link: 'https://rpubs.com/nnavarr7/580588',
      image: 'market-picture.jpg',
      alt: 'financial market dashboard snapshot',
      repo: 'https://github.com/Nnavarr/Market-Dashboard',
      description: 'An R based web app that tracks various market interest rates',
      icon: assessmentImg
    },
    {
      name: 'Forecasting Tool: R - Shiny App',
      link: 'https://nnavarr.shinyapps.io/Forecast_Tool/?_ga=2.170544352.1161545448.1637389839-1798559397.1637389839',
      image: 'inv-forecast.png',
      alt: 'forecasting tool snapshot',
      repo: 'https://github.com/Nnavarr/Inventory-Forecast',
      description: 'An R based web app that uses Multiple Linear Regression to assist in forecasting next years amount on a monthly basis. The user can uplaod a csv with month and value columns',
      icon: shippingImg
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center -45px',
        backgroundAttachment: 'fixed'
      }}
      >
      <Project
        projectArray={projects}
      > 
      </Project>
    </motion.main>
    );
  };

export default Portfolio;