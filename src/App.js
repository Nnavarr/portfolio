import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  // establish categories for conditional rendering
  const [categories] = useState([

    {
      name: 'About Me',
      description: 'Section that provides a summary of myself'
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
      case 'Resume':
        return <Resume></Resume>
      case 'About Me':
        return <About></About>
      case 'Contact':
        return <Contact></Contact>
      default:
        return <About></About>
    }
  }

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        <Sidebar></Sidebar>
        {renderSelection(currentCategory.name)}
      </main>
    </div>
  );
}

export default App;
