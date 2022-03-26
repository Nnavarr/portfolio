import React, { useEffect } from 'react'

// create nav function
function Nav(props){
  const {
    categories
  } = props

  return (
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
  );
};

export default Nav;



