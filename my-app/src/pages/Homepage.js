import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  render() {
    return (
      <Switch>
          <h1 className="title">
            The IDDog
          </h1>
      </Switch>
    );
  }
}

export default Homepage;
