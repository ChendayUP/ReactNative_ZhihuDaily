
/**
 * 
 */

import * as actionTypes from '../actions/actionTypes'
import update from 'react/lib/update'

const initialState = {
    isHeadLoading: false,
    isRootLoading: false,
    dateList: [],
    storiesList: [],
    top_storiesList: []
    // receiveObject: {
    //     date:{},
    //     stories:[],
    //     top_stories:[]
    // }
};

export default newsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LATESTNEWS_LIST:
            return update(state, {
                isHeadLoading: { $set: true }
            })
        case actionTypes.RECEIVE_LATESTNEWS_LIST:
            dateList = [];
            storiesList = [];
            top_storiesList = [];
            const addModel = action.receiveObject;
            dateList.push(addModel.date)
            storiesList.push(addModel.stories)
            top_storiesList.push(addModel.top_stories)
            return update(state, {
                isHeadLoading: { $set: false },
                dateList: { $set: dateList },
                storiesList: { $set: storiesList },
                top_storiesList: { $set: top_storiesList },
            })
        case actionTypes.FETCH_BEFORENEWS_LIST:
            return update(state, {
                isFootLoading: { $set: true }
            })
        case actionTypes.RECEIVE_BEFORENEWS_LIST:
            const appendModel = action.receiveObject;
            if (!appendModel || appendModel.length == 0) {
                return update(state, {
                    isFootLoading: { $set: false }
                })
            }
            state.dateList.push(appendModel.date)
            state.storiesList.push(appendModel.stories)
            state.top_storiesList.push(appendModel.top_stories)
            return update(state, {
                isFootLoading: { $set: false },
                dateList: { $set: dateList },
                storiesList: { $set: storiesList },
                top_storiesList: { $set: top_storiesList },
            })
        default:
            return state
    }
}
