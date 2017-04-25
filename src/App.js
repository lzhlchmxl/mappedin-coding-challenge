import React, { Component } from 'react';
import './App.css';
import GetData from './fetch.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ready to Roll</h2>
        </div>
        <GetData /> 
      </div>
    );
  }
}



export default App;
