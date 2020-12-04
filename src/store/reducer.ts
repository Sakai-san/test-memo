import {
  UPDATE_FIRST_NAME_ACTION_TYPE,
  AppState,
  UpdateNameAction,
} from "./types";

const reducer = (state: AppState = {}, action: UpdateNameAction): AppState => {
  switch (action.type) {
    case UPDATE_FIRST_NAME_ACTION_TYPE:
      return {
        ...state,
        firstName: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
