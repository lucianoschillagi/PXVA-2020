import React, { Component } from 'react';
import './Footer.css';
import pxLogoNegro from '../px-logo-negro.jpg';

class Footer extends Component {
  render() {
    return (
        <div className="Footer_Container">
          <div className="Footer_Container_Centered">


            <ul className="Footer_List_Networking">

              {/* PX Website */}
              {/* <li>
                <a href="http://www.planetax.org.ar/web/inicio"
                   target="_blank">
                        PX — Website
                </a>
              </li> */}

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

              {/* PX Spotify */}
              <li>
                <a href="https://open.spotify.com/album/0t8OA93jRuxjU0rWqCt0QI?si=-eH6PlbKTK-NAgdUGlA4Wg"
                   target="_blank">
                        PX — Spotify
                </a>
              </li>

              {/* PX Youtube */}
              <li>
                <a href="https://m.youtube.com/playlist?list=PLTm6sW8CHIlLTY_sJUnufQCJdVU0yaaF5"
                   target="_blank">
                        PX — Youtube
                </a>
              </li>

              <li className="Year">
                — 2020, Rosario, Argentina —
              </li>

              {/* PX Logo */}
              <li className="Year">
                <img src={pxLogoNegro} 
                     width="30"
                      alt="Logo" />
              </li>

            </ul>


            {/* Credits */}
            <ul className="Footer_List_Credits">
              <li>
                Masterización: Charlie Egg
              </li>
              <li>
                Tracklist: Franco Ingrassia
              </li>
              <li>
                Diseño gráfico: Joaquina Parma
              </li>
              <li>
                Videos: Rodrigo Jávega
              </li>
              <li>
                Sitio web: Luciano Schillagi
              </li>
            </ul>


          </div> 
        </div>
    );
  }
}

export default Footer;