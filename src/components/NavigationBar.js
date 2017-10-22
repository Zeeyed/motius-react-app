import React, { Component } from 'react';
import { Link } from 'react-router';

const NavigationBar = () => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>React Test Project</Link>
        </div>

        <div className="collapse navbar-collapse">
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
          </ul>  
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;