import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import team from './Team/sagas';

export default function* rooSaga() {
  return yield all([auth, user, team]);
}
