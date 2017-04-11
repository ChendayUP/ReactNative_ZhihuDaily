import * as types from './actionTypes'

export function fetchLastNewsList() {
    return {
        type: types.FETCH_LASTNEWS_LIST
    }
}

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

export function receiveLastNewsList(receiveObject) {
    // const { date, stories, top_stories } = receiveObject;
    printObject(receiveObject)
    return {
        type: types.RECEIVE_LASTNEWS_LIST,
        receiveObject
    }
}

export function requestLastNewsList() {
    return {
        type: types.REQUEST_LASTNEWS_LIST
    }
}