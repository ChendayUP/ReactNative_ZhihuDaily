import * as types from './actionTypes'

export function fetchHotNewsList() {
    return {
        type: types.FETCH_HOTNEWS_LIST
    }
}

export function receiveHotNewsList(hotNewsList) {
    return {
        type: types.RECEIVE_HOTNEWS_LIST,
        hotNewsList
    }
}

export function requestHotNewsList() {
    return {
        type: types.REQUEST_HOTNEWS_LIST
    }
}