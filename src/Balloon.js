import React, { Component } from 'react';
import './App.css';
import './Balloon.css';

class Balloon extends Component { 
  constructor(props) {
    super(props);
  }
  render() {
      return (
              <div className="balloon">
                <h2 className="balloon-header">This is test.</h2>
                <div className="balloon-content">
                    <p>this is balloon</p>
                </div>
              </div>
      );
  }
}

export default Balloon;
