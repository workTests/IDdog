import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

//PAGES
import Homepage from './Homepage';

export default class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        TELA FEED
        {this.props.children}
      </div>
    );
  }
}
