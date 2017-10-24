import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { id: this.props.match.params.id }
    };
  }

  render() {
    return <div>{this.state.item.id}</div>;
  }
}
export default Index;
