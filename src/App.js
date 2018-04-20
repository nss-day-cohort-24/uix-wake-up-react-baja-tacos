import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';

import News from './components/news/news';
import Song from './components/music/music';
import Weather from './components/weather/weather';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';
import rebase from 're-base';

import Login from './config/login';
import LogOut from './config/Logout';
import Register from './config/userRegistration';
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
// import {Button} from 'reactstrap';

class App extends Component {

  componentDidMount () {
    console.log("componentDidMount");
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
  
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          uid: user.uid,
        });
        //get DB stuff for user here
      } else {
        this.setState({
          authed: false,
          loading: false,
          uid: null,
        })
      }
    })
  }

  render() {
    return (
      <div className="pageContainer">
        <Header title="Profile:" name="User"/> 

          <div className="row mainBody">
            <div className="col-4 leftDiv">
              <div className="weatherDiv">  
              <Weather /> 
              </div>
              <div className="songDiv">
                <Song
                user={this.state.user} />
                <Register />
                <Login />
                <LogOut />
              </div>
            </div>

            <div className="col-4 newsDiv">
            <h2 className="News-label"> Top US news headlines</h2>
              <News />
            </div>

            <div className="col-3 calendarDiv">
              <h2>Calender </h2>
            </div>
            <div>
            <Register />
            <Login />
            </div>
         </div>

      </div>
    );
  }
}

export default App;
