import React, { Component} from 'react';
import {
  Route,
  IndexRoute,
  Link,
  IndexLink,
  Switch
} from 'react-router-dom'

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
          <h1 className="title">
            The IDDog
          </h1>
          <div>
                <p>
                </p>
                <Link to="/">HOME 
                </Link>
                <p>
                </p>
                <Link to="/feed">FEED
                </Link>
          </div>
      </React.Fragment>
    );
  }
}
