import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CampaignSetup from './pages/campaignSetup/campaignSetup';
import advertiserProfile from './pages/advertiserProfile/advertiserProfile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <PrivateRoute exact path="/campaignSetup" component={CampaignSetup} />
          
          <PrivateRoute exact path="/campaign/advertiser" component={advertiserProfile} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;
