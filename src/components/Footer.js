import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <Router>
        <div className="Footer_Container">
          <div className="Footer_Container_Centered">
            <ul>
              <Link to=""
                    target="_blank">
                      Facebook
              </Link>
              <Link to=""
                    target="_blank">
                      Instagram
              </Link>
              <Link to=""
                    target="_blank">
                      Planeta X Web
              </Link>
            </ul>
          </div> 
        </div>
      </Router>
    );
  }
}

export default Footer;