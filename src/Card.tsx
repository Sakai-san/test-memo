import React, { FunctionComponent, memo, ComponentType } from "react";
import { createFactory } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { isPropertySignature } from "typescript";
import { AppState } from "./store/types";

const withNoRerendering = <P extends {}>(WrappedComponent: ComponentType<P>) =>
  memo(
    (props) => <WrappedComponent {...(props as P)} />,
    (prevProps: P, nextProps: P) => true
  );

interface Props {
  firstName?: string;
}

const Card: FunctionComponent<Props> = ({ firstName }) => {
  return <div style={{ border: "2px solid red" }}>Hello {firstName}</div>;
};

export default compose(
  connect((state: AppState) => ({
    firstName: state?.firstName,
  }))
)(withNoRerendering(Card));

/*
export default connect((state: AppState) => ({
  firstName: state?.firstName,
  doPreventRerendering: true,
}))(withcontrolRerendering(Card));
*/
