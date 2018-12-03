import React, { Component } from 'react';
import './App.css';

//components import
import Header from './components/headerComponent/Header';
import Main from './components/mainComponent/Main';
import Footer from './components/footerComponent/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
