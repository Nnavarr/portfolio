import React from "react";
import Nav from '../Nav';

const Header = (props) => {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props

  return (
    <header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
    </header>
  )
}

export default Header;