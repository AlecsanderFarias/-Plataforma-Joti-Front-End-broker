export function getTeamRequest() {
  return {
    type: '@team/GET_TEAM_REQUEST',
  };
}

export function getTeamSuccess(team) {
  return {
    type: '@team/GET_TEAM_SUCCESS',
    payload: { team },
  };
}
