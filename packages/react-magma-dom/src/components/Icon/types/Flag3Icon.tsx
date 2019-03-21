import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 27 24',
  paths: [
    {
      d:
        'M4.5,4a1.89,1.89,0,0,1-1,1.72V25.5A.51.51,0,0,1,3,26H2a.47.47,0,0,1-.35-.15.47.47,0,0,1-.15-.35V5.72A1.89,1.89,0,0,1,.5,4a1.93,1.93,0,0,1,.59-1.41A1.93,1.93,0,0,1,2.5,2a1.93,1.93,0,0,1,1.41.59A1.93,1.93,0,0,1,4.5,4Zm23,1V16.92a.9.9,0,0,1-.19.6,2.2,2.2,0,0,1-.62.43,12.66,12.66,0,0,1-5.77,1.82A5.8,5.8,0,0,1,19,19.42a10.78,10.78,0,0,1-1.69-.75,9.61,9.61,0,0,0-1.81-.75,7.29,7.29,0,0,0-2.22-.34A16,16,0,0,0,6,19.86,1.16,1.16,0,0,1,5.5,20a1,1,0,0,1-1-1V7.41A1,1,0,0,1,5,6.55a11.8,11.8,0,0,1,1.24-.67A14.85,14.85,0,0,1,12.8,4a10.51,10.51,0,0,1,3.12.45,28.1,28.1,0,0,1,3.42,1.38,3,3,0,0,0,1.38.3,5.82,5.82,0,0,0,1.83-.33,10,10,0,0,0,1.72-.74c.49-.27.95-.51,1.38-.73A2.56,2.56,0,0,1,26.5,4a1,1,0,0,1,1,1Z',
      transform: 'translate(-0.5 -2)'
    }
  ]
};

export const Flag3Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
