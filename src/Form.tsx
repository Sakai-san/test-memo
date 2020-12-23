import React, { FunctionComponent, ChangeEvent } from "react";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import { connect } from "react-redux";
import { makeUpdateFirstName } from "./store/action";
import { AppState } from "./store/types";

interface Props {
  firstName?: string;
  updateFirstName?: (firstName: string) => void;
}

const Form: FunctionComponent<Props> = ({ firstName, updateFirstName }) => {
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
      <Card1 />
      <Card2 firstName={firstName} />
      <Card3 firstName={firstName} />
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
