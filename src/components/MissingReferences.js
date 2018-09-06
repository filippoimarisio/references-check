import React, { Component } from 'react';

class MissinReferences extends Component {
  render() {
    return (
      <div>
        Missing References:
        <ul>
        {this.props.missing.map(missingRef => {
          return (
            <li>
              {missingRef}
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default MissinReferences;