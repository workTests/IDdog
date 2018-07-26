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
        <React.Fragment>
          <div>
            TELA FEED
          </div>
          <Route path="/husky" component={Homepage}/>
          <Route path="/labrador" component={Homepage}/>
          <Route path="/hound" component={Homepage}/>
          <Route path="/pug" component={Homepage}/>
        </React.Fragment>
    );
  }
}

export default Feed;
