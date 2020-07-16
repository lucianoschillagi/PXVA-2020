import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  render() {
    return (
      <div className="Player_Container">

        <iframe className="Bandcamp" 
                src="https://bandcamp.com/EmbeddedPlayer/album=165772040/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" 
                seamless>
          <a href="http://planetax.bandcamp.com/album/pxva2020">
            PXVA2020 by Planeta X
          </a>
        </iframe>      
        
        </div>
    );
  }
}

export default Player;
