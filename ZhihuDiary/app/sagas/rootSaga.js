
import { fork } from 'redux-saga/effects';

// import { watchRequestTypeList } from './yearSaga';
// import { watchRequestArticleList } from './read';
import { watchRequestHotNewsList } from './hotNewsListSaga'
import { watchRequestLastNewsList } from './lastNewsListSaga'
import { watchRequestDetailsList } from './detailsSaga'

export default function* rootSaga() {
    yield [
        fork(watchRequestHotNewsList),
        fork(watchRequestLastNewsList),
        fork(watchRequestDetailsList)];
}