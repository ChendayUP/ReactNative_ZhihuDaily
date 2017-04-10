
import { fork } from 'redux-saga/effects';

// import { watchRequestTypeList } from './yearSaga';
// import { watchRequestArticleList } from './read';
import { watchRequestHotNewsList } from './hotNewsListSaga'

export default function* rootSaga() {
    yield [fork(watchRequestHotNewsList)];
}