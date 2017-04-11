
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as latestNewsListCreator from '../actions/actionLatestNewsList'
import * as beforeNewsListCreator from '../actions/actionBeforeNewsList'

import NewsListView from '../pages/NewsListView';

class NewsListViewContainer extends React.Component {
  render() {
    return <NewsListView {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { newsListReducer } = state;
  return {
    newsListReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  newListCreator = {...latestNewsListCreator, ...beforeNewsListCreator}
  const newsListActions = bindActionCreators(newListCreator, dispatch);
  return {
    newsListActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsListViewContainer);
