import { all, put, call, takeLatest } from 'redux-saga/effects';
/* import { Alert } from 'react-native'; */
import { toast } from 'react-toastify';

import { getTeamSuccess } from './actions';
import { signOut } from '../auth/actions';

import bucket from '../../index';

import api from '../../../services/api';

export function* getTeam() {
  const { me } = bucket.store.getState().user;

  if (me && me.team && me.team.teamId) {
    try {
      const response = yield call(api.get, `/team/${me.team.teamId}`);

      yield put(getTeamSuccess(response.data));
    } catch (error) {
      toast.error('Erro , Token de acesso expirado');
      yield put(signOut());
    }
  } else {
    yield put(getTeamSuccess(null));
  }
}

export default all([
  takeLatest('@team/GET_TEAM_REQUEST', getTeam),
  takeLatest('@user/GET_ME_SUCCESS', getTeam),
  takeLatest('@auth/SIGN_IN_SUCCESS', getTeam),
]);
