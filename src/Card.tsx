import React, { FunctionComponent, memo, ComponentType } from "react";
import { connect } from "react-redux";
import { createFactory } from "react";
import { AppState } from "./store/types";
import { compose } from "redux";

const withNoRerendering = <P extends {} & { doPreventRerendering?: boolean }>(
  WrappedComponent: ComponentType<P>
) =>
  memo(
    (props) => <WrappedComponent {...(props as P)} />,
    (prevProps: P, nextProps: P) =>
      nextProps?.doPreventRerendering === true ? true : false
  );

type Props = {
  firstName?: string;
} & { doPreventRerendering?: boolean };

const Card: FunctionComponent<Props> = ({ firstName }) => {
  return <div style={{ border: "2px solid red" }}>Hello {firstName}</div>;
};

export default connect((state: AppState) => ({
  firstName: state?.firstName,
  doPreventRerendering: true,
}))(withNoRerendering(Card));

/*
export default compose(
  connect((state: AppState) => ({
    firstName: state?.firstName,
  })),
  (BaseComponent) => (props) =>
    createFactory(BaseComponent)({ ...props, do: true })
)(withNoRerendering(Card));
*/
