import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tages:["tag1","tage2","tage3"]
    };
  }

 
  

  formatCount() {
    return this.state.count === 0 ? <div>Zero</div> : this.state.count;
  }

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm">
          increament
        </button>
        <ul>{this.state.tages.map(x=><li key={x}>{x}</li>)}</ul>
      </div>
    );
  }
}

export default App;
