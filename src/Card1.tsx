import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import withNoRerendering from "./HOC/withNoRerendering";

import { AppState } from "./store/types";

type Props = {};

const Card1: FunctionComponent<Props> = () => {
  console.log("Card bleue");
  const firstName = useSelector(
    (state: any) => state.firstName,
    (prevProps: Props, nextProps: Props) => true
  );

  return <div style={{ border: "2px solid blue" }}>Hello {firstName}</div>;
};

export default withNoRerendering(Card1);
