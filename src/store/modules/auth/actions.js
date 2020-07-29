export function signInRequest(data) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: data,
  };
}

export function signInSucess(token, me) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, me },
  };
}

export function signUpRequest(data) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: data,
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
