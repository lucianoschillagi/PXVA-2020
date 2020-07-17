import React, { Component } from 'react';
import './Player.css';

class Player extends Component {

  screenWidth = window.screen.width * 90 / 100;
  playListURL = "https://www.youtube-nocookie.com/embed/videoseries?list=PLTm6sW8CHIlLTY_sJUnufQCJdVU0yaaF5";

  render() {
    return (
      <div className="Player_Container">
        {/* Youtube Playlist */}
        <div className="Player_Container_Centered">
          <iframe width={this.screenWidth} 
                  height="290" 
                  src={this.playListURL}
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
          </iframe>  

        </div>
   
        
        </div>
    );
  }
}

export default Player;
