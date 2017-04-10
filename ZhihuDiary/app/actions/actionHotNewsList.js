import * as types from './actionTypes'

export function fetchHotNewsList() {
    return {
        type: types.FETCH_HOTNEWS_LIST
    }
}

export function receiveHotNewsList(newsList) {
    // console.log('newsList' + newsList)
    // newsList.forEach(function(element) {
    //    console.log('element  :' + element.news_id) 
    // }, this);
    return {
        type: types.RECEIVE_HOTNEWS_LIST,
        newsList
    }
}

export function requestHotNewsList() {
    return {
        type: types.REQUEST_HOTNEWS_LIST
    }
}