import React, { Component } from 'react';
import Repo from './repo.js'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
`;

const Backgournd = styled.div`
  font-family: 'Segoe Ui';
  background: #eee;
  padding: 40px;  
`;

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
          <Title>{welcomeText}</Title>
        </div>
      )
    } else {
      welcomeText = 'Starred repos for axiomaticdesign'
      return (
        <Backgournd>
          <Title>{welcomeText}</Title>
          {this.state.data.map((obj) =>
            <Repo repoData={obj} />
          )}       
        </Backgournd>
      )
    }
  }

}

export default App;
