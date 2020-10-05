import produce from 'immer';

const INITIAL_STATE = {
  ingredients: [],
  loading: false,
};

export default function localStorage(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@ingredients/REQUEST_INGREDIENTS': {
        draft.loading = true;
        break;
      }
      case '@ingredients/REQUEST_INGREDIENTS_SUCCESS': {
        draft.ingredients = action.payload;
        break;
      }
      case '@ingredients/FAILURE': {
        draft.loading = false;
        break;
      }
      case '@ingredients/SUCCESS': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
