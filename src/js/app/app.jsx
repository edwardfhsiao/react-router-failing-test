import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import Show from './pages/Show/index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/show:id`} component={Show} />
        </Switch>
      </div>
    );
  }
}

export default App;
