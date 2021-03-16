import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { teams } from './teams';


class App extends Component {
  constructor () {
    super()
    this.state = {
      teams: teams ,
      searchfield: ''
    }
  }

  //fetch is a method of window object and is used to make requests to a server. Usually we use an API Eg. https://jsonplaceholder.typicode.com/users and insert as attribute of fetch
componentDidMount() {
  fetch(this.state.teams)
    .then(response => {
      return response.json();
    }) 
    .then(users => {
      this.setState({teams: users})
  });
  
}

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredTeams = this.state.teams.filter(equipe => {
      return (
      equipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      )
  })
    if (this.state.teams.length === 0) {
      return <h1>Loading...please wait</h1>
    } else {
    return (
    <div>
      <h1>Campeonato Brasileiro</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
        <CardList teams={filteredTeams} />
      </Scroll>
    </div>
    );
    }
  }
}

export default App;
