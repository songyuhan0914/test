import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    )
  }
}

export default App;
