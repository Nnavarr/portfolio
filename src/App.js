import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  // establish categories for conditional rendering
  const categories = [
    {
      name: 'About Me',
      description: 'Section that provides a summary of myself'
    },
    {
      name: 'Portfolio',
      description: '6 projects showcasing technical proficiency'
    },
    {
      name: 'Contact',
      description: 'Contact section with various methods for contcting me'
    },
    {
      name: 'Resume',
      description: 'Link to my Resume'
    }
  ];

  // set category state 
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
      ></Header>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
