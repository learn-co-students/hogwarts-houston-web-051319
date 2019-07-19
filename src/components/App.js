import React, { Component } from 'react';
import HogsCollection from './HogsCollection';
import '../App.css';
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsCollection />


      </div>
    )
  }
}

export default App;
