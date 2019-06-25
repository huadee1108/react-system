import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        My name is 凌凌漆
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    // title: state.home.title,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getTitle: dispatch.home.getTitle,
  };
};

export default connect(mapState, mapDispatch)(Home);