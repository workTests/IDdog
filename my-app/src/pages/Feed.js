import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

//PAGES
import Homepage from './Homepage';

class Feed extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }
  
  render() {
    return (
        <Switch>
          <div>
            TELA FEED
          </div>
          <Route exact path="/husky" component={Homepage}/>
          <Route exact path="/labrador" component={Homepage}/>
          <Route exact path="/hound" component={Homepage}/>
          <Route exact path="/pug" component={Homepage}/>
        </Switch>
    );
  }
}

export default Feed;
