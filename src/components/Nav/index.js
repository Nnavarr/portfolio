import React, { useEffect } from 'react'

// create nav function
function Nav(props){
  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
    contactSelected,
    setContactSelected
  } = props

  return (
      <nav>
        <ul className='flew-row'>
          {/* general categories */}
          {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name && !contactSelected && 'navActive'
                  }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {category.name}
                </span>
              </li>
            ))}
        </ul> 
      </nav>
  );
};

export default Nav;



