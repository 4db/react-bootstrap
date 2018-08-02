import React, { Component } from 'react';
import img1 from './img/google-play-badge.svg';
import img2 from './img/app-store-badge.svg';

class SectionDownload extends Component {
  render() {
    return(
      <section className="download bg-primary text-center" id="download">
        <div className="container">
          <div className="row">
            <h2>
              Subscribe now to get a 50% discount gift!
            </h2>
            <div className="col-md-6 mx-auto">
              <div className="input-group">
                 <input type="email" className="form-control" placeholder="Enter your email"/>
                 <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                 </span>
              </div>
              <br/>
              <br/>
              <p>Our app is available on any mobile device!</p>
              <div className="badges">
                <a className="badge-link" href="#"><img src={img1} alt=""/></a>
                <a className="badge-link" href="#"><img src={img2} alt=""/></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionDownload;