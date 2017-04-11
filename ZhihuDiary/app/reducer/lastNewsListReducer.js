
/**
 * 
 */

import * as actionTypes from '../actions/actionTypes'
import update from 'react/lib/update'

const initialState = {
    isLoading: false,
    receiveObject: {}
};

export default lastNewsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LASTNEWS_LIST:
            return update(state, {
                isLoading: { $set: true }
            })
        case actionTypes.RECEIVE_LASTNEWS_LIST:
            return update(state, {
                isLoading: { $set: false },
                receiveObject: { $set: action.receiveObject }
            })
        default:
            return state
    }
}
