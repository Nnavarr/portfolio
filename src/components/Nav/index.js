import React, { useEffect } from 'react'

// create nav function
function Nav(){
  // TODO: create categories for nav that would allow for conditional rendering
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


  return (
    <header> 
      <nav>
        <ul className='flew-row'>
          {categories.map((category) => 
            <li className='mx-1' key={category.name}>
              <span>
                {category.name}
              </span>
            </li>
          )}
        </ul> 
      </nav>
    </header>
  );
};

export default Nav;



