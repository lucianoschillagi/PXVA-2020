import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Card.css';

class Card extends Component {
  render() {
    return (
    <Router>
      <div className="Main_Container">

        {/* Cards */}
        <div className="Card_Container">
          {/* <img src={profilePhoto} 
              alt="Logo"
              width="200px" /> */}
          <h1>{this.props.name}</h1>

          <h2>{this.props.song}</h2>

          <h3>texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema texto relativo al tema  </h3>

          {/* Artist Link */}
          <Link to=""
                target="_blank">
                  Artista F
          </Link>
          
        </div>
      </div>
    </Router>
    );
  }
}

export default Card;