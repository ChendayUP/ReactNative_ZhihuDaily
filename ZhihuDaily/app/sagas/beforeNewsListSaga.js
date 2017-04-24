
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';

import * as urls from '../utils/URLs'
import * as actionTypes from '../actions/actionTypes'
import { toastShort } from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';

import { fetchBeforeNewsList, receiveBeforeNewsList } from '../actions/actionBeforeNewsList'

export function* requestBeforeNewsList(newsDate) {
  try {
    console.log('1')
    yield put(fetchBeforeNewsList());
    console.log('2..........')
    const url = urls.NEWS_HEADER + urls.NEWS_BEFOR + newsDate;
    console.log(url)
    const receiveObject = yield call(request, url, 'get');
    console.log(receiveObject)
    console.log('333')
    yield put(receiveBeforeNewsList(receiveObject));
    // receiveZhihuNews(typeList.recent)
    console.log('4')
    // yield call(store.save, 'zhihuNews', typeList.recent);
    // console.log('5')
    // const errorMessage = typeList.showapi_res_error;
    // console.log('6')
    // if (errorMessage && errorMessage !== '') {
    //   yield toastShort(errorMessage);
    // }
  } catch (error) {
    yield put(receiveBeforeNewsList([]));
    yield toastShort('网络发生错误，请重试');
  }
}

export function* watchRequestBeforeNewsList() {
  while (true) {
    const {
      newsDate
    } = yield take(actionTypes.REQUEST_BEFORENEWS_LIST);
    yield fork(requestBeforeNewsList, newsDate);
  }
}
