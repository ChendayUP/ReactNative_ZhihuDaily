import * as types from './actionTypes'

export function fetchLatestNewsList() {
    return {
        type: types.FETCH_LATESTNEWS_LIST
    }
}

export function receiveLatestNewsList(receiveObject) {
    // const { date, stories, top_stories } = receiveObject;
    printObject(receiveObject)
    return {
        type: types.RECEIVE_LATESTNEWS_LIST,
        receiveObject
    }
}

export function requestLatestNewsList() {
    return {
        type: types.REQUEST_LATESTNEWS_LIST
    }
}

//private func
function printObject(receiveObject) {
    const { date, stories, top_stories } = receiveObject;
    console.log("date:")
    console.log(date)

    console.log("stories:")
    stories.forEach(function (element) {
        console.log(element)
    }, this);

    console.log("top_stories:")
    top_stories.forEach(function (element) {
        console.log(element)
    }, this);
}