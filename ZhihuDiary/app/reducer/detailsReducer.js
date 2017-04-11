

import * as actionTypes from '../actions/actionTypes'
import update from 'react/lib/update'

const initialState = {
    isLoading: true,
    details: {}
};

export default detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DETAILS_LIST:
            return update(state, {
                isLoading: { $set: true }
            })
        case actionTypes.RECEIVE_DETAILS_LIST:
            return update(state, {
                isLoading: { $set: false },
                details: { $set: action.details }
            })
        case actionTypes.SHOW_DETAILS_LIST:
            return update(state, {
                details: { $set: action.details }
            })
        default:
            return state
    }
}
