import React, { Component } from 'react';
import InputForm from './components/InputForm'

class App extends Component {

  state = {}

  handleInputChange = (name, value) => {
    this.setState({
      [name] : value,
      [name] : value
    })
  }

  render() {
    return (
      <div className="App">
        <InputForm value={this.state.name} id='thesis' onChange={this.handleInputChange}/>
        <InputForm value={this.state.name} id='references' onChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
