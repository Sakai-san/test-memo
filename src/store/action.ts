import { UPDATE_FIRST_NAME_ACTION_TYPE } from "./types";

export const makeUpdateFirstName = (firstName: string) => ({
  type: UPDATE_FIRST_NAME_ACTION_TYPE,
  payload: firstName,
});
