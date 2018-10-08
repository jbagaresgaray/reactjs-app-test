import React, { Component } from 'react';
import { NavBarScreen } from './components/navbar/navbar';
import { SideBarScreen } from './components/sidebar/sidebar';
import { HomeScreen } from './pages/home/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBarScreen></NavBarScreen>
        <SideBarScreen></SideBarScreen>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <HomeScreen></HomeScreen>
        </main>
      </div>
    );
  }
}

export default App;
