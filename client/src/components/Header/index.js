import React from "react";
import Nav from '../Nav';

const Header = (props) => {
  
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    handleCategoryChange
  } = props

  return (
    <header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        handleCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
      ></Nav>
    </header>
  )
}

export default Header;