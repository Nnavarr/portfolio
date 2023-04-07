import React from 'react'

// create nav function
function Nav(props){
  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
  } = props

  return (
      <nav>
        <ul className='nav-bar'>
          {/* general categories */}
          {categories.map((category) => (
              <li
                className={`nav-item ${
                  currentCategory.name === category.name && 'navActive'
                  }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
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



