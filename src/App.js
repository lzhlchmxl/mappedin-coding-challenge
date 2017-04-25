import React, { Component } from 'react';
import './App.css';
import Repo from './repo.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }
  // only run once
  componentDidMount() {
    const req = new XMLHttpRequest()
    req.open('GET', 'https://api.github.com/users/axiomaticdesign/starred', true)
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        if (req.status === 200) {
          // setting data state to parsed JSON
          this.setState({data: JSON.parse(req.responseText)})
        } else {
          // skiping error handling
        }
      }
    }
    req.send(null)
  }
  render(){
    
    //act as the loading screen
    var welcomeText 
    if (this.state.data === null) {
      welcomeText = 'The data is loading'
      return (
        <div>
          <h1>{welcomeText}</h1>
        </div>
      )
    } else {
      welcomeText = 'Starred repos for axiomaticdesign'
      return (
        <div>
          <h1>{welcomeText}</h1>
          {this.state.data.map((obj) =>
            <Repo repoData={obj} />
          )}       
        </div>
      )
    }
  }

}

export default App;
