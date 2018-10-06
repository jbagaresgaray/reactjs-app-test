import React, { Component } from 'react';
import { NavBarScreen } from './components/navbar/navbar';
import { SideBarScreen } from './components/sidebar/sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBarScreen></NavBarScreen>
        <SideBarScreen></SideBarScreen>
      </div>
    );
  }
}

export default App;
