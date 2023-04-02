import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import codeBackground from '../src/assets/images/code_background.jpg';

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

  // set category state 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // set contactSelected (default = false)
  const [contactSelected, setContactSelected] = useState(false);

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

  const findImage = (categories) => {
    // filter categories array for currentCategory
    const categoryObj = categories.find(category => category.name == currentCategory);

    // extract image property
    const imagePath = categoryObj.image;
    return imagePath;
  }

  return (
    <div>
      <div className='body'>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Header>
        <main
          style={{ 
            backgroundImage: `url(${codeBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -45px'
          }}
        >
          {renderSelection(currentCategory.name)}
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;