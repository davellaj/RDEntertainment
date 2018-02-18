import React, { Component } from 'react';
import logo from './logo.svg';
import coverPhoto from './images/editedCoverPhotoPNG.PNG'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={coverPhoto} className="App-coverPhoto" alt="coverPhoto" />
        </header>
      </div>
    );
  }
}

export default App;
