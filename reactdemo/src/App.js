import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
       < Counter />
      </div>
    );
  }
}

export default App;
