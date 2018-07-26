import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'

//CSS
import './css/style.css';

//PAGES
import Homepage from './pages/Homepage';
import Singup from './pages/Singup';
import Feed from './pages/Feed';

export default class App extends Component {
  render() {
    return (
       <div>  
          <p className="debug1">
            DEBUG: PAGE APP START
          </p> 
          <Router>
            <div>
              <Switch>
                  <Route exact path="/" component={Homepage}/>

                  <Route exact path="/signup" component={Singup}/>

                  <Route exact path="/feed" component={Feed}>
                      <Route exact path="/husky" component={Feed}/>
                      <Route exact path="/labrador" component={Feed}/>
                      <Route exact path="/hound" component={Feed}/>
                      <Route exact path="/pug" component={Feed}/>
                  </Route>
                  <Route component={SemRota} />
              </Switch>
            </div>
          </Router>
          <p className="debug2">
            DEBUG: PAGE APP END
          </p> 
       </div>
    );
  }
}

const SemRota = () => <h1 className="debug3">SEM ROTA!!!!</h1>; 