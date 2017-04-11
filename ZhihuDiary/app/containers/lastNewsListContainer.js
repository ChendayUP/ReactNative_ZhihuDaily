
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lastNewsListCreator from '../actions/actionLastNewsList'

import LastNewsListView from '../pages/LastNewsListView';

class LastNewsListViewContainer extends React.Component {
  render() {
    return <LastNewsListView {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { lastNewsListReducer } = state;
  return {
    lastNewsListReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const lastNewsListActions = bindActionCreators(lastNewsListCreator, dispatch);
  return {
    lastNewsListActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LastNewsListViewContainer);
