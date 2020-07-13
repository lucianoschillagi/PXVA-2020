import React, { Component } from 'react';

import HeaderAnt from './components/HeaderAnt';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <HeaderAnt/> */}
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;
