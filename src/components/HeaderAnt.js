import React, { Component } from 'react';
import './HeaderAnt.css';
import pxLogo from '../px-logo-negro.jpg'; 

class HeaderAnt extends Component {
  render() {
    return (
      <div className="HeaderAnt_Container">

        {/* Logo */}
        <img 
             className="Logo"
             src={pxLogo} 
             width="20"
             alt="Logo" />

        {/* Social Network */}
        {/* <ul>
          <li>PX Web</li>
          <li>F</li>
          <li>I</li>
        </ul> */}

      </div>
    );
  }
}

export default HeaderAnt;