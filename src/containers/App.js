import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';

import { setSearchField, requestKitties } from '../action';

const mapStateToProps = state => ({
  searchField: state.searchKitties.searchField,
  kitties: state.requestKitties.kitties,
  isPending: state.requestKitties.isPending,
  error: state.requestKitties.error,
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKitties: () => dispatch(requestKitties()),
  }
}

class App extends Component {
  
  componentDidMount() {
    this.props.onRequestKitties();
  }

  render() {
    const {searchField, onSearchChange, kitties, isPending} = this.props;
    const filteredKitties = kitties.filter(kitty => {
      return kitty.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ?
      <h1 className="tc f1 washed-red">Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1 washed-red">Kitties Friends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <Cardlist kitties={filteredKitties} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );

  }
}
//Connects a React component to a Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(App);
