import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';

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
    }
  ]);

  // set category state 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // set contactSelected (default = false)
  const [contactSelected, setContactSelected] = useState(false);

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
        
        {/* render contact form if selected, otherwise about */}
        {!contactSelected ? (
          <About></About>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
