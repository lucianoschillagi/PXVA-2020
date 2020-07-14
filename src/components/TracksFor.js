import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './TracksFor.css';

class TracksFor extends Component {
  render() {
    return (
    <Router>
      <div className="TracksFor_Container">
      <h3 className="Musicians">Tracks por</h3>
        {/* Index */}
        <div className="Musicians_List_Container">
          
          <div className="Musicians_List_Row">
            <ul>
              <li>Klezmer Karaoke Kit</li>
              <li>Blunke</li>
              <li>EGBA</li>
              <li>Dj Cutx</li>
              <li>Gina Valenti</li>
              <li>Charlie Egg</li>
              <li>Irina Cagnin</li>
              <li>Lalo And-Rex</li>
              <li>Alpha Centauri</li>
              <li>Lxs Peces</li>
              <li>Luko</li>
              <li>Audiodélica</li>
            </ul>
          </div>

          <div className="Musicians_List_Row">
            <ul>
              <li>Checho</li>
              <li>Mariano Cambiaso</li>
              <li>Antena y Juani Favre</li>
              <li>P8 y NMR</li>
              <li>Martim Arce</li>
              <li>Martín Arias</li>
              <li>MXWK</li>
              <li>Oscar Favre</li>
              <li>Rodrigo Jávega</li>
              <li>Andrés Mantello</li>
              <li>Aníbal Perez</li>
              <li>Fer Mariño</li>
            </ul>
          </div>


        </div>
      </div>
    </Router>
    );
  }
}

export default TracksFor;
