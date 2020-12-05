import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { AppState } from "./store/types";

type Props = {};

const Card1: FunctionComponent<Props> = () => {
  const firstName = useSelector(
    (state: any) => state.firstName,
    (prevProps: Props, nextProps: Props) => false
  );

  return <div style={{ border: "2px solid blue" }}>Hello {firstName}</div>;
};

export default Card1;
