import React, { Component } from 'react';
import Navbar from './Navbar';
import Game from './Game';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <Navbar />
      <Game />
    </div>
  }
}

export default App;