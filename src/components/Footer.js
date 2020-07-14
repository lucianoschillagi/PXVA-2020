import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="Footer_Container">
          <div className="Footer_Container_Centered">
            <ul className="Footer_List_Networking">
              <li>
                <a href="http://www.planetax.org.ar/web/inicio"
                      target="_blank">
                        PX - Website
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/planetaxdiscos/"
                      target="_blank">
                        PX - Facebook
              </a>
              </li>

              <li>
                <a href="https://www.instagram.com/planetaxdiscos/?hl=es-la"
                      target="_blank">
                        PX - Instagram
                </a>
              </li>

              <li>
                <a href="https://planetax.bandcamp.com/"
                      target="_blank">
                        PX - Bandcamp
                </a>
              </li>

              <li className="Year">
                - 2020, Rosario, Argentina - 
              </li>
            </ul>
          </div> 
        </div>
    );
  }
}

export default Footer;