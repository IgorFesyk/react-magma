import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 28 21',
  paths: [
    {
      d:
        'M8.67,19.86l1.22-2.2a7,7,0,0,1-2.13-2.49A7,7,0,0,1,8,8.48,15.37,15.37,0,0,0,2,14,15.38,15.38,0,0,0,8.67,19.86ZM14.75,8a.69.69,0,0,0-.22-.53A.71.71,0,0,0,14,7.25,4.78,4.78,0,0,0,9.25,12a.75.75,0,0,0,1.28.53.71.71,0,0,0,.22-.53A3.24,3.24,0,0,1,14,8.75.75.75,0,0,0,14.75,8Zm5.67-3a.28.28,0,0,1,0,.15L15.48,14q-3.27,5.91-4.93,8.86l-.77,1.39a.48.48,0,0,1-.44.25,13.08,13.08,0,0,1-2.09-1.09A.49.49,0,0,1,7,23a5.7,5.7,0,0,1,.69-1.36,16.28,16.28,0,0,1-4.12-2.7A18.68,18.68,0,0,1,.31,15.08a2,2,0,0,1,0-2.16A18.12,18.12,0,0,1,6.25,7.13,14.77,14.77,0,0,1,14,5a15,15,0,0,1,2.81.27l.85-1.52a.48.48,0,0,1,.43-.25.84.84,0,0,1,.28.09l.49.25a4,4,0,0,1,.51.29c.16.09.32.19.5.28l.3.18a.49.49,0,0,1,.25.43ZM21,12a6.82,6.82,0,0,1-1.23,4,7,7,0,0,1-3.27,2.57l4.38-7.84A7.78,7.78,0,0,1,21,12Zm7,2a2.12,2.12,0,0,1-.31,1.08A18.15,18.15,0,0,1,26,17.34a16.71,16.71,0,0,1-5.43,4.18A14.89,14.89,0,0,1,14,23l1.16-2.06a13,13,0,0,0,6.13-2.14A16.1,16.1,0,0,0,26,14a16,16,0,0,0-4.41-4.6l1-1.75a18.52,18.52,0,0,1,2.85,2.4,15.55,15.55,0,0,1,2.26,2.87A2.07,2.07,0,0,1,28,14Z',
      transform: 'translate(0 -3.5)'
    }
  ]
};

export const EyeSlashIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
