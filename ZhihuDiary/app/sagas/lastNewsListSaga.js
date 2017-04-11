
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';

import * as urls from '../utils/URLs'
import * as actionTypes from '../actions/actionTypes'
import { toastShort } from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';
// import { WEXIN_ARTICLE_TYPE } from '../constants/Urls';

// import { fetchTypeList, receiveTypeList } from '../actions/category';

import { fetchLastNewsList, receiveLastNewsList } from '../actions/actionLastNewsList'

export function* requestLastNewsList() {
  try {
    console.log('1')
    yield put(fetchLastNewsList());
    console.log('2')
    const receiveObject = yield call(request, urls.NEWS_LISTURL, 'get');
    console.log(receiveObject)
    console.log('333')
    yield put(receiveLastNewsList(receiveObject));
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
    yield put(receiveLastNewsList([]));
    yield toastShort('网络发生错误，请重试');
  }
}

export function* watchRequestLastNewsList() {
  while (true) {
    yield take(actionTypes.REQUEST_LASTNEWS_LIST);
    yield fork(requestLastNewsList);
  }
}


