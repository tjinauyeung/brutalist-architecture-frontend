import React, { Component } from 'react';
import Header from '../../components/Header';
import Suggestion from '../../components/Suggestion';
import Footer from '../../components/Footer';

class AboutPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Suggestion />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
