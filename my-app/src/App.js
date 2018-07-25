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

class App extends Component {
  render() {
    return (
       <React.Fragment>  
          <Router>
            <Switch>
              <div>
                The IDDog
              </div>
            </Switch>
          </Router>
       </React.Fragment>
    );
  }
}

export default App;
