import React, { Component } from 'react';

class SectionCta extends Component {
  render() {
    return(
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>Stop waiting.<br></br>Start building.</h2>
          <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
    );
  }
}

export default SectionCta;