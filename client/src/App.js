import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import codeBackground from './assets/images/code_background.jpg';
import rayBackground from './assets/images/ray_background.jpg';
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

function App() {

  // establish categories for conditional rendering
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Section that provides a summary of myself',
    },
    {
      name: 'Portfolio',
      description: '6 projects showcasing technical proficiency'
    },
    {
      name: 'Resume',
      description: 'Link to my Resume'
    },
    {
      name: 'Contact',
      description: 'Contact form'
    }
  ]);

  // set category state 
  const [currentCategory, setCurrentCategory] = useState('About Me');
  const [backgroundImg, setBackgroundImg] = useState(codeBackground)

  const backgroundObject = {
    'About Me': codeBackground,
    'Portfolio': rayBackground,
    'Resume': rayBackground,
    'Contact': rayBackground
  }

  // category change
  const handleCategoryChange = (category) => {
    // update category value
    setCurrentCategory(category)

    // update background image
    setBackgroundImg(backgroundObject[category])
  }

  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter mode='wait' initial={false} >
        <Router>
          <Header
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            handleCategoryChange={handleCategoryChange}
            currentCategory={currentCategory}
            />

          {/* page content */}
          <Routes>
            <Route exact path='/' element={<About backgroundImage={backgroundImg} />}/>
            <Route exact path='/aboutme' element={<About backgroundImage={backgroundImg} />}/>
            <Route exact path='/portfolio' element={<Portfolio backgroundImage={backgroundImg} />}/>
            <Route exact path='/resume' element={<Resume backgroundImage={backgroundImg} />}/>
            <Route exact path='/contact' element={<Contact backgroundImage={backgroundImg} />}/>
          </Routes>

          <Footer></Footer>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;