import React, { Component } from 'react';
import './App.css';
import {Cronometro} from './components/cronometro.js'

class App extends Component {


  render() {
    return (
      <div className=" text-center">
        <Cronometro/>
      </div>
    );
  }
}

export default App;
