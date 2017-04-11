
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as detailsCreator from '../actions/actionDetails'

import DetailsListView from '../pages/DetailsListView';

class DetailsListViewContainer extends React.Component {
  render() {
    return <DetailsListView {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { detailsReducer } = state;
  return {
    detailsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const detailsActions = bindActionCreators(detailsCreator, dispatch);
  return {
    detailsActions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsListViewContainer);
