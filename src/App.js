import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import Home from './Components/Intro/Main';
import MainChannelRenderer from './Components/Channels/MainChannelRenderer'
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';

import Map from './Components/map/Map';
import Secret from './Components/Secret/Secret'
import Settings from './Components/settings/Settings'
import "./App.css"



function App() {

  const [test, setTest] = useState("a");


  const change = e => {
    e.preventDefault();
    // e = e || window.event;
    // console.log("app.js", e.key);
    // console.log("app.js", e.target);
    setTest(e.key);
  };





  return (

    <div
      onClick={e => {
        change(e);
      }}
      className="App"
      tabIndex="1"
    >

      {/* <Route exact path = "/" component={Map}/> */}
      <Route exact path = "/" component={Home}/>
      <Route exact path="/12447" component={Secret}/>
      <Route exact path="/Map" component={Map}/>
      <Route exact path = "/Game" component={MainChannelRenderer}/>
      <Route exact path= "/Login" component={Login}/>
      <Route exact path = "/Signup" component={Signup}/>
      <Route exact path = "/Settings" component= {Settings}/>
    </div>


  );
}

export default App;
