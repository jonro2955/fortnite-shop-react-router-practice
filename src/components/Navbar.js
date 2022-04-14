import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <Link className='brand-logo left' to='/'>
          Fortnite Mania
        </Link>
        <ul className='right'>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
