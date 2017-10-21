import React, { Component } from 'react';
import NavigationBar from './components/navigationBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
      </div>
    );
  }
}

export default App;
