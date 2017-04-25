import React, { Component } from 'react';
import './App.css';

class Repo extends Component {

  render() {
    const a = this.props.repoData
    return (
      <div>
        <div>
          <i className="fa fa-star"></i>
          <a href={a.html_url}>{a.full_name}</a>
        </div>
        <p>{a.desciption}</p>
        <div>
          <i className="fa fa-star"></i>
          <a href={a.stargazers_url}>{a.stargazers_count}</a><br />
          
          <i className="fa fa-code-fork"></i>
          <a href={a.forks_url}>{a.forks_count}</a>
        </div>
      </div>
    )
  }
}


export default Repo;
