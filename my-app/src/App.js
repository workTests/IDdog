import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import * as axios from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Link,
  hashHistory
} from 'react-router-dom'
import {
  Route,
  Switch,
  Fragment
} from 'react-router'

//CSS
import './css/App.css';
import './css/style.css';

//PAGES
import Homepage from './pages/Homepage';
import Singup from './pages/Singup';
import Feed from './pages/Feed';

class App extends Component {
  render() {
    return (
       <div>  
          <p className="debug1">
            DEBUG: PAGE APP START
          </p> 
          <Router>  
            <Switch>
              <Route path="/" component={Homepage}/>
              <Route path="/signup" component={Singup}/>
              <Route path="/feed" component={Feed}/>
            </Switch>
          </Router>
          <p className="debug2">
            DEBUG: PAGE APP END
          </p> 
       </div>
    );
  }
}

export default App;
