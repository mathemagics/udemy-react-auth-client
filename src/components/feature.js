import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return (
      <div>This is authenticated content</div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { message: auth.message };
}

export default connect(null, actions)(Feature);
