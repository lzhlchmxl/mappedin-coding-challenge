import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const RepoTitle = styled.h2`
  font-weight: normal;
`;

const TitleLink = styled.a`
  color: #007afb;
`;

const GoldIcon = styled.i`
  color: #ffc500;
  margin-right: 7px;
`;

const Counters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Icon = styled.i`
  color: #333;
  margin-right: 5px;
  font-size: 1.25em;
`;

const Links = styled.a`
  margin-right: 20px;
  &:link, visited {
    color: #777;
    text-decoration: none;
  }
  &:hover, active{
    color: #ff5600;
  }
`;

class Repo extends Component {

  render() {
    const a = this.props.repoData
    return (
      <Container>
        <RepoTitle>
          <GoldIcon className="fa fa-star"></GoldIcon>
          <TitleLink href={a.html_url}>{a.full_name}</TitleLink>
        </RepoTitle>
        <p>{a.description}</p>
        <Counters>
          <Icon className="fa fa-star"></Icon>
          <Links href={a.stargazers_url}>{a.stargazers_count}</Links><br />
          
          <Icon className="fa fa-code-fork"></Icon>
          <Links href={a.forks_url}>{a.forks_count}</Links>
        </Counters>
      </Container>
    )
  }
}


export default Repo;
