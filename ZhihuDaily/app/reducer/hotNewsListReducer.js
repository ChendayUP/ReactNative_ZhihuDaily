
/**
 * 
 */

import * as actionTypes from '../actions/actionTypes'
import update from 'react/lib/update'

const initialState = {
    isLoading: false,
    hotNewsList: []
};

export default hotNewsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOTNEWS_LIST:
            return update(state, {
                isLoading: { $set: true }
            })
        case actionTypes.RECEIVE_HOTNEWS_LIST:
            return update(state, {
                isLoading: { $set: false },
                hotNewsList: { $set: action.hotNewsList }
            })
        default:
            return state
    }
}
