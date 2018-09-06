import React, { Component } from 'react';
import InputForm from './components/InputForm'
import {referencesCheck} from './components/referencesCheck'

class App extends Component {

  state = {
    thesis : '',
    references : ''
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name] : value,
    })
  }

  handleClick = () => {

    const thesis = this.state.thesis
    const references = this.state.references
    referencesCheck(thesis, references)

  }

  render() {
    return (
      <div className="App">
        <InputForm value={this.state.name} id='thesis' onChange={this.handleInputChange}/>
        <InputForm value={this.state.name} id='references' onChange={this.handleInputChange}/>
        <button onClick={this.handleClick}>Check References </button>
      </div>
    );
  }
}

export default App;
