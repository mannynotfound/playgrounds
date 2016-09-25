import {creators} from '../actions';
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends Component {
  static propTypes = {
    ui: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.actions.loaded();
  }

  render() {
    return (
      <div id="app">
        <div className="pg-logo">
          <img className="bf-logo" src="static/img/bf-logo.svg" />
          <span className="pf-text">Playground</span>
        </div>
        <div className="content">
          <div className="circle">
            <span className="circle-text">
              LOL
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({appState}) {
  return {
    ui: appState.ui,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(creators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
