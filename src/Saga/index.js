import {takeEvery, put, delay, call, all, fork} from 'redux-saga/effects';
import authSaga from './auth.saga';
import wording from './wording.saga';

export default function* root() {
  yield fork(authSaga);  yield fork(wording);
}
