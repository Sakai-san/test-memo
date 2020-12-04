import React, { FunctionComponent, memo, ComponentType } from "react";
import { connect } from "react-redux";
import { AppState } from "./store/types";

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
  doPreventRerendering: false,
}))(withNoRerendering(Card));
