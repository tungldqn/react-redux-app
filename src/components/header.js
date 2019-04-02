import React, { Component } from 'react';

class Header extends React.Component {
  render(){
    return (
      <div>
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>Title</a>
            <ul className='nav navbar-nav'>
              <li className='active'>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Link</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
