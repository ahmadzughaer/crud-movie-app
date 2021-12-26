import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style.css'

const Header = () => {
  return (
    <header>
      <h1>Movie List App</h1>
      <hr />
      <div className="links" >
        <NavLink to="/" className="link" activeClassName="active" exact>
         Movies List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Movie
        </NavLink>
      </div>
    </header>
  );
};

export default Header;