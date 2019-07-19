import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import { Collection } from './Collection';

class App extends Component {

  state={
    greaseFilter: false,
    sortType: "name",
    hiddenFilter: false
  }

  render() {
    return (
      <div className="App">
          < Nav onGreaseChange={this.handleGreaseChange} onSortChange={this.handleSortChange} onHiddenChange={this.handleHiddenChange} />
          < Collection greaseFilter={this.state.greaseFilter} sortType={this.state.sortType} hiddenFilter={this.state.hiddenFilter} />
      </div>
    )
  }

  handleGreaseChange = () => {
    this.setState({ greaseFilter: !this.state.greaseFilter })
  }

  handleSortChange = (value) => {
    this.setState({ sortType: value })
  }

  handleHiddenChange = () => {
    this.setState({ hiddenFilter: !this.state.hiddenFilter })
  }
}

export default App;
