import React, { FunctionComponent, memo, ComponentType } from "react";
import { connect } from "react-redux";
import { AppState } from "./store/types";

const withNoRerendering = <P extends {}>(WrappedComponent: ComponentType<P>) =>
  memo(
    (props) => <WrappedComponent {...(props as P)} />,
    (prevProps, nextProps) => true
  );

type Props = {
  firstName?: string;
};

const Card: FunctionComponent<Props> = ({ firstName }) => {
  return <div style={{ border: "2px solid red" }}>Hello {firstName}</div>;
};

export default connect((state: AppState) => ({
  firstName: state?.firstName,
  doPreventRerendering: false,
}))(withNoRerendering<Props>(Card));
