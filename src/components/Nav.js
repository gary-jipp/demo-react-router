import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <a href="/#" className="brand-logo left">My App</a>
        <ul className="right">
          <li><Link to="/" > Home</Link></li>

          {/* NavLink just lets us use an active style. no difference otherwise */}
          <li><NavLink to="/page1">Page1</NavLink></li>
          <li><NavLink to="/page2">Page2</NavLink></li>
          {/* Note:  props should not be passed here.  They are passed in the Route! */}

        </ul>
      </div>
    </nav >
  );
}

export default Nav;
