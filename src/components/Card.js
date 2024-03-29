import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div className="Main_Container">

        {/* Cards */}
        <div className="Card_Container">

          <p className="Card_TrackNr">{this.props.trackNr}</p>
          <h3 className="Card_Artist">{this.props.artist}</h3>
          <h2 className="Card_TrackName">{this.props.trackName}</h2>
          <p className="Card_TrackLenght">{this.props.lenght}</p>
          <p className="Card_Credits">{this.props.credits}</p>
          <p className="Card_TrackDescription">{this.props.review}</p>

          {/* Artist Bio */}
          <p className="Card_Artist_Bio">{this.props.bio}</p>

          {/* Artist Link */}
          <p className="Card_ArtistLinks">
            <a href={this.props.artistNet}
               target="_blank">
                +
            </a>
          </p>
          
        </div>
      </div>
    );
  }
}

export default Card;