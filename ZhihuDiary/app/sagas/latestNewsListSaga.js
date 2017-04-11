
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';

import * as urls from '../utils/URLs'
import * as actionTypes from '../actions/actionTypes'
import { toastShort } from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';
// import { WEXIN_ARTICLE_TYPE } from '../constants/Urls';

// import { fetchTypeList, receiveTypeList } from '../actions/category';

import { fetchLatestNewsList, receiveLatestNewsList } from '../actions/actionLatestNewsList'

export function* requestLatestNewsList() {
  try {
    console.log('1')
    yield put(fetchLatestNewsList());
    console.log('2')
    const receiveObject = yield call(request, urls.NEWS_HEADER + urls.NEWS_LATEST, 'get');
    console.log(receiveObject)
    console.log('333')
    yield put(receiveLatestNewsList(receiveObject));
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
    yield put(receiveLatestNewsList([]));
    yield toastShort('网络发生错误，请重试');
  }
}

export function* watchRequestLatestNewsList() {
  while (true) {
    yield take(actionTypes.REQUEST_LATESTNEWS_LIST);
    yield fork(requestLatestNewsList);
  }
}


