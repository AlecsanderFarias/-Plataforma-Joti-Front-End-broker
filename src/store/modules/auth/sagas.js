import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import {
  signInSucess,
  signFailure,
  signOut as Out,
  signUpSuccess,
} from './actions';

export function* signIn({ payload }) {
  try {
    let { email, date } = payload;

    if (!isNaN(email)) {
      email = `${email}@joti.com.br`;
    }

    const response = yield call(api.post, 'user/login', {
      register: email,
      date,
    });

    const { token, me } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    toast.success('Bem vindo ao JOTI');

    yield put(signInSucess(token, me));

    history.push('/dashboard');
  } catch (error) {
    toast.error(
      error.error ||
        'Erro, verifique se você esta inscrito na ativade ou se seus dados estao incorretos.'
    );

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    if (payload.register) {
      yield call(api.post, '/user/create/br', payload);
    } else {
      console.log(payload);

      yield call(api.post, '/user/create/external', {
        register: payload.email,
        date: payload.date,
        name: payload.name,
      });
    }

    toast.success('Conta criada com sucesso.');

    history.push('/');

    yield put(signUpSuccess());
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error('Erro na criacao de conta ,verifique seus dados.');
    }

    yield put(signFailure());
  }
}

export function* setTokenRefresh({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    yield put(Out());
  }
}

export function signOUt() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setTokenRefresh),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOUt),
]);
