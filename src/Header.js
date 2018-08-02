import React, { Component } from 'react';
import img1 from './img/demo-screen-1.jpg';

class Header extends Component {
  render() {
    return(
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">Cats Quick Mobi is an app that will help you create a new mobile app for your Shopify site, or anything else!</h1>
              <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={img1} className="img-fluid" alt=""/>
                  </div>
                  <div className="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;