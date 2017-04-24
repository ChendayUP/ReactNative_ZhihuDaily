
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hotNewsListCreator from '../actions/actionHotNewsList'

import HotNewsListView from '../pages/HotNewsListView';

class HotNewsListViewContainer extends React.Component {
  render() {
    return <HotNewsListView {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { hotNewsListReducer } = state;
  return {
    hotNewsListReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const hotNewsListActions = bindActionCreators(hotNewsListCreator, dispatch);
  return {
    hotNewsListActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotNewsListViewContainer);
