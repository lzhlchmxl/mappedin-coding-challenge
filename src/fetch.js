import React, { Component } from 'react';

class GetData extends Component{
 
  
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
    
    console.log(this.state.data)
    //act as the loading screen
    var welcomeText
    //declear all the variables needed to produce the list 
    var html_url, full_name, desciption, stargazers_url, stargazers_count, forks_url, forks_count 
    if (this.state.data === null) {
      welcomeText = 'The data is loading'
    } else {
      welcomeText = 'Starred repos for axiomaticdesign'
      html_url = this.state.data.map((obj) => obj.html_url)
      full_name = this.state.data.map((obj) => obj.full_name)
      desciption = this.state.data.map((obj) => obj.desciption)
      stargazers_url = this.state.data.map((obj) => obj.stargazers_url)
      stargazers_count = this.state.data.map((obj) => obj.stargazers_count)
      forks_url = this.state.data.map((obj) => obj.forks_url)
      forks_count = this.state.data.map((obj) => obj.forks_count)    
    }
    var infoList = []
    return (
      <div>
        <h1>{welcomeText}</h1>
        <li>{full_name}</li>
      </div>
    )
  }
}


export default GetData

