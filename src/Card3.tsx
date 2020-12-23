import { Component } from "react";
import withNoRerendering from "./HOC/withNoRerendering";
import Title from "./Title";

import { AppState } from "./store/types";

interface Props {
  firstName?: string;
}

class Card3 extends Component<Props> {
  render() {
    const { firstName } = this.props;
    return (
      <div style={{ border: "2px solid magenta" }}>
        Card 3 {firstName}
        <Title />
      </div>
    );
  }
}

export default withNoRerendering(Card3);
