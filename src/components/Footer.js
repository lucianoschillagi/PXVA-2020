import React, { Component } from 'react';
import './Footer.css';
import pxLogoNegro from '../px-logo-negro.jpg';

class Footer extends Component {
  render() {
    return (
        <div className="Footer_Container">
          <div className="Footer_Container_Centered">
            
            <ul className="Footer_List_Networking">

              {/* PXVA-2020 Spotify */}
              {/* <li>
                <a href="http://www.planetax.org.ar/web/inicio"
                   target="_blank">
                        PXVA2020 — Spotify
                </a>
              </li> */}

              {/* PXVA-2020 iTunes */}
              {/* <li>
                <a href="http://www.planetax.org.ar/web/inicio"
                   target="_blank">
                        PXVA2020 — iTunes
                </a>
              </li> */}

              {/* PXVA-2020 Tidal */}
              {/* <li>
                <a href="http://www.planetax.org.ar/web/inicio"
                   target="_blank">
                        PXVA2020 — Tidal
                </a>
              </li> */}

              {/* PX Website */}
              <li>
                <a href="http://www.planetax.org.ar/web/inicio"
                   target="_blank">
                        PX — Website
                </a>
              </li>

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

              {/* PX Youtube */}
              <li>
                <a href="https://youtube.com/"
                   target="_blank">
                        PX — Youtube
                </a>
              </li>

              {/* Agradecimientos */}
              {/* <li className="Year">
                <em>Gracias a Ana Heller, Sergio Passaro, Federico Lazcano...</em>
              </li> */}

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
          </div> 
        </div>
    );
  }
}

export default Footer;