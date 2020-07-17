import React, { Component } from 'react';
import './PxLinks.css';

class PxLinks extends Component {
  render() {
    return (
      <div className="PxLinks_Container">
        <ul className="PxLinks_List_Networking">

          {/* PX Spotify */}
          <li className="PxLinks_SF_YT">
            <a href="https://open.spotify.com/album/0t8OA93jRuxjU0rWqCt0QI?si=-eH6PlbKTK-NAgdUGlA4Wg"
                target="_blank">
                    PXVA-2020 en Spotify
            </a>
          </li>

          {/* PX Youtube */}
          <li className="PxLinks_SF_YT">
            <a href="https://m.youtube.com/playlist?list=PLTm6sW8CHIlLTY_sJUnufQCJdVU0yaaF5"
                target="_blank">
                    PXVA-2020 en Youtube
            </a>
          </li>

          <br></br>

          {/* PX Facebook */}
          <li>
            <a href="https://www.facebook.com/planetaxdiscos/"
                target="_blank">
                    PX — Facebook
          </a>
          </li>

          {/* PX Instagram */}
          <li>
            <a href="https://www.instagram.com/planetaxdiscos/?hl=es-la"
                target="_blank">
                    PX — Instagram
            </a>
          </li>

          {/* PX Bandcamp */}
          <li>
            <a href="https://planetax.bandcamp.com/"
                target="_blank">
                    PX — Bandcamp
            </a>
          </li>

        </ul>
      </div>
    );
  }
}

export default PxLinks;
