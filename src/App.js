import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import SectionDownload from './SectionDownload';
import SectionFeatures from './SectionFeatures';
import SectionCta from './SectionCta';
import SectionContact from './SectionContact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header/>
        <SectionDownload/>
        <SectionFeatures/>
        <SectionCta/>
        <SectionContact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
