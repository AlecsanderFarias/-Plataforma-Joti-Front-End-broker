import { all, put, call, takeLatest } from 'redux-saga/effects';
/* import { Alert } from 'react-native'; */

import { getMeSuccess } from './actions';
import { signOut } from '../auth/actions';
import bucket from '../../index';

import api from '../../../services/api';

export function* getMe() {
  const { signed } = bucket.store.getState().auth;

  if (signed) {
    try {
      const response = yield call(api.get, `user`);

      yield put(getMeSuccess(response.data));
    } catch (error) {
      yield put(signOut());
    }
  }
}

export default all([
  takeLatest('@user/GET_ME_REQUEST', getMe),
  takeLatest('persist/REHYDRATE', getMe),
]);
