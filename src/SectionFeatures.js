import React, { Component } from 'react';
import img1 from './img/demo-screen-1.jpg';

class SectionFeatures extends Component {
  render() {
    return(

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">Check out what you can do with this app theme!</p>
          <hr></hr>
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
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
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-mobile-phone"></i>
                    <h3>Device Mockups</h3>
                    <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-spinner fa-spin"></i>
                    <h3>Flexible Use</h3>
                    <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-gift"></i>
                    <h3>Sign up and get discount</h3>
                    <p className="text-muted">Sign up before September and get discount!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-line-chart"></i>
                    <h3>Push notifications</h3>
                    <p className="text-muted">Push notifications with view reports, statics and summary!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default SectionFeatures;