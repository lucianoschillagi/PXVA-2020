import React, { Component } from 'react';
import './LandingPage.css';

import Header from './Header';
import TracksFor from './TracksFor';
import Main from './Main';
import Footer from './Footer';
import

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage_Container">
        {/* <HeaderAnt/> */}
        <Header/>
        <TracksFor/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default LandingPage;