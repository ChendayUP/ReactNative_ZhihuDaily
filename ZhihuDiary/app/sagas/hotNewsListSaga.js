
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';

import * as urls from '../utils/URLs'
import * as actionTypes from '../actions/actionTypes'
import { toastShort } from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';
// import { WEXIN_ARTICLE_TYPE } from '../constants/Urls';

// import { fetchTypeList, receiveTypeList } from '../actions/category';

import { fetchHotNewsList, receiveHotNewsList } from '../actions/actionHotNewsList'

export function* requestHotNewsList() {
  try {
    console.log('1')
    yield put(fetchHotNewsList());
    console.log('2')
    const typeList = yield call(request, urls.HOT_LISTURL, 'get');
    console.log('3')
    console.log(typeList)
    yield put(receiveHotNewsList(typeList.recent));
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
    yield put(receiveHotNewsList([]));
    yield toastShort('网络发生错误，请重试');
  }
}

export function* watchRequestHotNewsList() {
  while (true) {
    yield take(actionTypes.REQUEST_HOTNEWS_LIST);
    yield fork(requestHotNewsList);
  }
}


