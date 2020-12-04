import React, { FunctionComponent, memo } from "react";
import { connect } from "react-redux";
import { AppState } from "./store/types";

interface PreventComponentRerendering {
  doPreventRerendering?: boolean;
}

const controlRerenderingHOC = <P extends object & PreventComponentRerendering>(
  WrappedComponent: FunctionComponent<P>
) =>
  memo(
    (props) => <WrappedComponent {...(props as P)} />,
    (prevProps: P, nextProps: P) =>
      nextProps?.doPreventRerendering === true ? true : false
  );

interface Props extends PreventComponentRerendering {
  firstName?: string;
}

const Card: FunctionComponent<Props> = ({ firstName }) => {
  return <div style={{ border: "2px solid red" }}>Hello {firstName}</div>;
};

export default connect((state: AppState) => ({
  firstName: state?.firstName,
}))(controlRerenderingHOC(Card));
