import React from "react";
import Nav from '../Nav';

const Header = (props) => {

  const {
    categories
  } = props

  return (
    <header>
      <h1>Noé Navarro</h1>
      <Nav
        categories={categories}
      ></Nav>
    </header>
  )
}

export default Header;