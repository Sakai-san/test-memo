import { FunctionComponent } from "react";
import { connect } from "react-redux";
import withNoRerendering from "./HOC/withNoRerendering";
import { AppState } from "./store/types";

type Props = {
  firstName?: string;
};

const Card: FunctionComponent<Props> = ({ firstName }) => {
  return <div style={{ border: "2px solid red" }}>Hello {firstName}</div>;
};

export default connect((state: AppState) => ({
  firstName: state?.firstName,
  doPreventRerendering: false,
}))(withNoRerendering(Card));
