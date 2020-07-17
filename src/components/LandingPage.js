import React, { Component } from 'react';
import './LandingPage.css';

import Header from './Header';
import PxLinks from './PxLinks';
import TracksFor from './TracksFor';
import Cards from './Cards';
import Player from './Player';
import Footer from './Footer';
import PxCatalog from './PxCatalog';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage_Container">
        <Header/>
        <PxLinks/>
        <TracksFor/>
        <Cards/>
        <Player/>
        <Footer/>
        <PxCatalog/>
      </div>
    )
  }
}

export default LandingPage;