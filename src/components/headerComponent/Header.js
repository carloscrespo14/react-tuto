import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="item1_header">
            <h1>Listas</h1>
          </div>
          <div className="item2_header">
            
          </div>
          <div className="item3_header">
            <a href="https://github.com">login</a>
            <a href="https://github.com">register</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;