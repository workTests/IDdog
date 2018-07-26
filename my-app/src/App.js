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
      <ul>
        <li>
          <Link to="/">11111111</Link>
        </li>
        <li>
          <Link to="/will-match">222222</Link>
        </li>
      </ul>
      <Switch>

        <Route path="/will-match" component={WillMatch} />
        <Route component={Home3} />
      </Switch>
    </div>
  </Router>
            <Router>
            {/*uma rota*/}  
            <Switch>

              <Route path="/" component={Homepage}/>

              <Route path="/signup" component={Singup}/>

              <Route path="/feed" component={Feed}>
                  <Route path="/husky" component={Feed}/>
                  <Route path="/labrador" component={Feed}/>
                  <Route path="/hound" component={Feed}/>
                  <Route path="/pug" component={Feed}/>
              </Route>

            </Switch>
            </Router>
          <p className="debug2">
            DEBUG: PAGE APP END
          </p> 
       </div>
    );
  }
}

const Home = () => <h3>TESTE 1</h3>;

const WillMatch = () => <h3>TESTE 2</h3>;

const Home2 = () => <h3>TESTE 3</h3>;

const Home3 = () => (
  <p>
    <ul>
    <li>
      <Link to="/">AGAIN 11111111</Link>
    </li>
    <li>
      <Link to="/will-match"> AGAIN 222222</Link>
    </li>
  </ul>
  </p>
);