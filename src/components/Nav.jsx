import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '@/ThemeContext';


const Nav = () => (
  <nav className="topnav">
    <div className="topnav__links">
      <NavLink
        activeClassName="active"
        exact
        to="/"
      >
        Task One
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/task-two"
      >
        Task Two
      </NavLink>
    </div>
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => <button onClick={toggleTheme}>Theme: {theme}</button>}
    </ThemeContext.Consumer>
  </nav>
);

export default Nav;
