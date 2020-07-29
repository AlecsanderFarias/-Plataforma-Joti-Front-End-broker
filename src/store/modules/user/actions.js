export function getMeRequest() {
  return {
    type: '@user/GET_ME_REQUEST',
  };
}

export function getMeSuccess(me) {
  return {
    type: '@user/GET_ME_SUCCESS',
    payload: { me },
  };
}
