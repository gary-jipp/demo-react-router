import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const state1 = { page1State: true };
const state2 = { page2State: true };
function Nav() {
  
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <a href="/#" className="brand-logo left">My App</a>
        <ul className="right">
          <li><Link to="/"> Home</Link></li>
          <li><NavLink to={{ pathname: "/page1", prop: 1, state1: state1 }}>Page1</NavLink></li>
          <li><NavLink to={{ pathname: "/page2", prop: 2, state2: state2 }}>Page2</NavLink></li>
        </ul>
      </div>
    </nav >
  );
}

export default Nav;
