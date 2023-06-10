import React from 'react'
import { useNavigate } from 'react-router-dom';

// create nav function
function Nav(props){
  let navigate = useNavigate();

  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
    handleCategoryChange
  } = props

  // function to change route
  const routerChange = (category) => {
    navigate('/' + category.name.toLowerCase().replace(' ', ''))
  }

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
                  handleCategoryChange(category.name);
                  routerChange(category)
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



