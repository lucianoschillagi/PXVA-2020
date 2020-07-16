import React, { Component } from 'react';
import './LandingPage.css';

import Header from './Header';
import TracksFor from './TracksFor';
import Cards from './Cards';
import Footer from './Footer';
import PxCatalog from './PxCatalog';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage_Container">
        <Header/>
        <TracksFor/>
        <Cards/>
        <Footer/>
        <PxCatalog/>
      </div>
    )
  }
}

export default LandingPage;