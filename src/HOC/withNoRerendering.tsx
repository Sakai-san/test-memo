import { memo, ComponentType, FunctionComponent } from "react";

const withNoRerendering = <P extends {}>(
  WrappedComponent: ComponentType<P>
): FunctionComponent<P> =>
  memo(
    (props) => <WrappedComponent {...(props as P)} />,
    (prevProps, nextProps) => true
  );

export default withNoRerendering;
