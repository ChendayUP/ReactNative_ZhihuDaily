

import * as types from './actionTypes'

export function fetchBeforeNewsList() {
    return {
        type: types.FETCH_BEFORENEWS_LIST
    }
}

export function receiveBeforeNewsList(receiveObject) {
    // const { date, stories, top_stories } = receiveObject;
    printObject(receiveObject)
    return {
        type: types.RECEIVE_BEFORENEWS_LIST,
        receiveObject
    }
}

export function requestBeforeNewsList(newsDate) {
    return {
        type: types.REQUEST_BEFORENEWS_LIST,
        newsDate
    }
}

//private func
function printObject(receiveObject) {
    // const { date, stories, top_stories } = receiveObject;
    // console.log("date:")
    // console.log(date)

    // console.log("stories:")
    // stories.forEach(function (element) {
    //     console.log(element)
    // }, this);

    // console.log("top_stories:")
    // top_stories.forEach(function (element) {
    //     console.log(element)
    // }, this);
}