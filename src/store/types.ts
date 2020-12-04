export const UPDATE_FIRST_NAME_ACTION_TYPE = "UPDATE_FIRST_NAME";

interface AppState {
  firstName?: string;
}

interface UpdateNameAction {
  type: typeof UPDATE_FIRST_NAME_ACTION_TYPE;
  payload: string;
}

export type { AppState, UpdateNameAction };
