import React, { Component } from 'react';
import '../App.css'

class MissinReferences extends Component {
  render() {
    return (
      <div className='missingReferences'>
        <h2>
          These references are missing in the thesis
        </h2>
        <ul>
        {this.props.missing.map(missingRef => {
          return (
            <div>
              <li key={missingRef}>
                {missingRef}
              </li>
              <br/>
            </div>
          )
        })}

        </ul>
      </div>
    );
  }
}

export default MissinReferences;