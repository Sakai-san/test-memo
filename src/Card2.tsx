import { FunctionComponent } from "react";
import withNoRerendering from "./HOC/withNoRerendering";

import { AppState } from "./store/types";

interface Props {
  firstName?: string;
}

const Card2: FunctionComponent<Props> = ({ firstName }) => {
  console.log("Card orange");

  return <div style={{ border: "2px solid orange" }}>Card 2 {firstName}</div>;
};

// export default Card2;
export default withNoRerendering(Card2);
