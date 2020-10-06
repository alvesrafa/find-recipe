import React from 'react';

import { Container } from './styles';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <h1>Find Recipe</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/ingredients">Ingredientes</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Receitas</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
