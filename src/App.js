import React, { Component } from 'react';
import InputForm from './components/InputForm'
import {referencesCheck} from './components/referencesCheck'
import MissingReferences from './components/MissingReferences'
import './App.css'

class App extends Component {

  state = {
    thesis : '',
    references : '',
    missing : [],
    checked: false
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name] : value,
    })
  }

  handleClick = () => {
    const thesis = this.state.thesis
    const references = this.state.references
    const missingReferences = referencesCheck(thesis, references)
    this.setState({ 
      missing: missingReferences,
      checked: true 
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Check your references</h1>
        <div className='textareas'>
          <InputForm className='thesisInput' value={this.state.name} id='thesis' onChange={this.handleInputChange}/>
          <InputForm className='referencesInput' value={this.state.name} id='references' onChange={this.handleInputChange}/>
        </div>
        <button className='checkReferences' onClick={this.handleClick}>Check References </button>
        <MissingReferences missing={this.state.missing} checked={this.state.checked}/>
      </div>
    );
  }
}

export default App;
