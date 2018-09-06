import React, { Component } from 'react';

class InputForm extends Component {

  handleChange = event => {
    const value = event.target.value
    const name = event.target.name

    this.props.onChange(name, value)
  }

  render() {
    return (
      <div>
        <form>
          <textarea
          style={{width:500, height:400}}
          type='text' 
          name={this.props.id} 
          value={this.props.value} 
          placeholder={`Paste your ${this.props.id} here..`}
          onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}


export default InputForm;