import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const state1 = { page1_State: true };
const state2 = { page2_State: true };
function Nav() {
  
  return (
    <nav className="nav-wrapper blue">
      <div className="container">
        <a href="/#" className="brand-logo left">My App</a>
        <ul className="right">
          <li><Link to="/" > Home</Link></li>
          <li><Link to={{ pathname: "/", prop1: 1.1, state: { isAdmin:true }}}>Home</Link></li>
          <li><NavLink to={{ pathname: "/page1", prop1: 1.1, prop2: state1 , state: { isAdmin:true }}}>Page1</NavLink></li>
          <li><NavLink to={{ pathname: "/page2", prop1: 1.2, prop2: state2 }}>Page2</NavLink></li>
        </ul>
      </div>
    </nav >
  );
}

export default Nav;
