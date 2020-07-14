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

          <em>{this.props.trackNr}</em>
          <h3>{this.props.artist}</h3>
          <h2>{this.props.trackName}</h2>
          <em>{this.props.lenght}</em>
          <p>{this.props.credits}</p>
          <p>{this.props.review}</p>

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