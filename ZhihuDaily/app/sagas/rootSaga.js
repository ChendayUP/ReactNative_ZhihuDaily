
import { fork } from 'redux-saga/effects';

// import { watchRequestTypeList } from './yearSaga';
// import { watchRequestArticleList } from './read';
import { watchRequestHotNewsList } from './hotNewsListSaga'
import { watchRequestLatestNewsList } from './latestNewsListSaga'
import { watchRequestBeforeNewsList } from './beforeNewsListSaga'
import { watchRequestDetailsList } from './detailsSaga'


export default function* rootSaga() {
    yield [
        fork(watchRequestHotNewsList),
        fork(watchRequestLatestNewsList),
        fork(watchRequestDetailsList),
        fork(watchRequestBeforeNewsList)];
}