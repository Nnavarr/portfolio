import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import codeBackground from '../src/assets/images/code_background.jpg';
import rayBackground from '../src/assets/images/ray_background.jpg';

function App() {
  console.log(`This is the device height ${window.innerHeight}`);
  console.log(`This is the device widght ${window.innerWidth}`);

  // establish categories for conditional rendering
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Section that provides a summary of myself',
      image: 'src/assets/images/code_background.jpg'
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

  // photo object
  const photoObject = {
    'About Me': codeBackground,
    'Portfolio': rayBackground,
    'Resume': rayBackground, 
    'Contact': rayBackground
  }

  // set category state 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [backgrounImg, setBackgroundImg] = useState(photoObject[currentCategory.name])

  function renderSelection(currentCategory){
    switch(currentCategory){
      case 'About Me':
        return <About></About>
      case 'Portfolio':
        return <Portfolio></Portfolio>
      case 'Resume':
        return <Resume></Resume>
      case 'Contact':
        return <Contact></Contact>
      default:
        return <About></About>
    }
  }

  return (
      <div className='App'>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          setBackgroundImg={setBackgroundImg}
        ></Header>
        <main
          style={{ 
            backgroundImage: `url(${backgrounImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -45px'
          }}
        >
          {/* Render selected content */}
          {renderSelection(currentCategory.name)}
        </main>
        <Footer></Footer>
      </div>
  );
}

export default App;