import React, { FunctionComponent, ChangeEvent } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { makeUpdateFirstName } from "./store/action";
import { AppState } from "./store/types";

interface Props {
  firstName?: string;
  updateFirstName?: (firstName: string) => void;
}

const Form: FunctionComponent<Props> = ({ firstName, updateFirstName }) => {
  console.log("rerendering form", firstName);
  return (
    <div>
      <label>
        Enter your first name
        <input
          value={firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateFirstName && updateFirstName(e.target.value)
          }
        />
      </label>
      <Card />
    </div>
  );
};

export default connect(
  (state: AppState) => ({ firstName: state?.firstName }),
  (dispatch) => {
    return {
      updateFirstName: (firstName: string) =>
        dispatch(makeUpdateFirstName(firstName)),
    };
  }
)(Form);
