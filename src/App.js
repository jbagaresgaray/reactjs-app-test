import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import { NavBarScreen } from './components/navbar/navbar';
import { SideBarScreen } from './components/sidebar/sidebar';
import { HomeScreen } from './pages/home/home';
import { OrdersScreen } from './pages/orders/orders';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        
          <NavBarScreen></NavBarScreen>
          <SideBarScreen></SideBarScreen>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Switch>
              <Route exact path='/' component={HomeScreen}/>
              <Route path='/orders' component={OrdersScreen}/>
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;
