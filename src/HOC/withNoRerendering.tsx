import { memo, ComponentType } from "react";

const withNoRerendering = <P extends {}>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> =>
  memo(
    (props) => <WrappedComponent {...(props as P)} />,
    (prevProps, nextProps) => true
  );

export default withNoRerendering;
