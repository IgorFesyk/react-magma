import React from 'react';
import { useForceUpdate } from '../../utils';

export const CustomPointComponent = props => {
  const { lineIndex, pointRefArray, registerPoint, ...other } = props;
  const forceUpdate = useForceUpdate();
  const ref = React.useRef<SVGPathElement>();

  React.useEffect(() => {
    registerPoint(pointRefArray, ref);

    forceUpdate();
  }, []);

  return <path ref={ref} data-line-index={lineIndex} {...other} />;
};
