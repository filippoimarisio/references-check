import React, { Component } from 'react';
import '../App.css'

class MissinReferences extends Component {
  render() {
    return (
      <div className='missingReferences'>
      {this.props.missing.length > 0 && (
        <div>
          <h2>
            These references are missing from the text body:
          </h2>
          <ul>
            {this.props.missing.map(missingRef => {
              return (
                <div key={missingRef}>
                  <li>
                    {missingRef}
                  </li>
                  <br/>
                </div>
              )
            })}
          </ul>
        </div>
      )}
      {this.props.missing.length === 0 && this.props.checked === true && (
        <h2>
          No reference missing!
        </h2>
      )}
      </div>
    );
  }
}

export default MissinReferences;