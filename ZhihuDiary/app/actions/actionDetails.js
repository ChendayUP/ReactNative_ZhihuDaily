import * as types from './actionTypes'

export function fetchDetailsList() {
    return {
        type: types.FETCH_DETAILS_LIST
    }
}

export function receiveDetailsList(details) {
    return {
        type: types.RECEIVE_DETAILS_LIST,
        details
    }
}

export function requestDetailsList(news_id) {
    return {
        type: types.REQUEST_DETAILS_LIST,
        news_id
    }
}