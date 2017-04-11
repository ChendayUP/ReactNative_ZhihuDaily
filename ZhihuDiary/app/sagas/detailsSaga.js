
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';

import * as urls from '../utils/URLs'
import * as actionTypes from '../actions/actionTypes'
import { toastShort } from '../utils/ToastUtil';
import { request } from '../utils/RequestUtil';

import { fetchDetailsList, receiveDetailsList } from '../actions/actionDetails'

export function* requestDetails(news_id) {
  try {
    console.log('1')
    yield put(fetchDetailsList());
    console.log('2')
    const receiveObject = yield call(request, urls.NEWS_NEWINFO_CONTENT + news_id, 'get');
    console.log('3')
    console.log(receiveObject)
    yield put(receiveDetailsList(receiveObject.share_url));
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
    yield put(receiveDetailsList([]));
    yield toastShort('网络发生错误，请重试');
  }
}

export function* watchRequestDetailsList() {
  while (true) {
    const {
      news_id
    } = yield take(actionTypes.REQUEST_DETAILS_LIST);
    yield fork(requestDetails, news_id);
  }
}


