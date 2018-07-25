import React, { Component} from 'react';
import * as axios from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Fragment
} from 'react-router-dom'

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
       <React.Fragment>  
          <Router>
            <Switch>
              <div>
                PAGE APP
              </div>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/signup" component={Singup}/>
              <Route exact path="/feed" component={Feed}/>
            </Switch>
          </Router>
       </React.Fragment>
    );
  }
}

export default App;
