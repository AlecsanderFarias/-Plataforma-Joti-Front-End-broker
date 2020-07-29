import produce from 'immer';

const INITIAL_STATE = {
  team: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@team/GET_TEAM_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/GET_ME_REQUEST': {
        draft.loading = true;
        break;
      }

      case 'persist/REHYDRATE': {
        draft.loading = true;
        break;
      }

      case '@team/GET_TEAM_SUCCESS': {
        draft.team = action.payload.team;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.team = null;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
