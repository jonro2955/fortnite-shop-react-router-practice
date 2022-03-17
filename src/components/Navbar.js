import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <a
          className='brand-logo left'
          href='/fortnite-shop-react-router-practice'
        >
          Fortnite Mania
        </a>
        <ul className='right'>
          <li>
            <Link to='/fortnite-shop-react-router-practice'>Shop</Link>
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
