import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      searchfield: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ kitties: users }));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  render() {
    const { kitties, searchfield } = this.state;
    const filteredKitties = kitties.filter(kitty => {
      return kitty.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (!kitties.length) ?
      <h1 className="tc f1 washed-red">Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1 washed-red">Kitties Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <Cardlist kitties={filteredKitties} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );

  }
}

export default App;
