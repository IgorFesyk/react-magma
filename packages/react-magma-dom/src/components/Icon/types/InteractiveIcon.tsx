import * as React from 'react';
import { IconProps, renderIcon } from '../utils';

const iconType = {
  viewBox: '0 0 18.72 26.97',
  paths: [
    {
      d:
        'M4.93,17.84c-1,.63-1.28,1.71-.89,3.17a10.2,10.2,0,0,0,3.51,5h7.61c1.31-2.73,2.56-8.26,1.94-10-.21-.58-.46-.86-.73-1a1.08,1.08,0,0,0-.76.06.62.62,0,0,0-.16.07v2.58a.81.81,0,1,1-1.62,0V14a1,1,0,0,0-1.29,0V16.4a.81.81,0,0,1-1.62,0V12.75a1,1,0,0,0-1.29,0v3.37a.81.81,0,1,1-1.61,0V8a.93.93,0,0,0-.09-.39c-.09-.2-.26-.31-.66-.31a.59.59,0,0,0-.64.37,1.55,1.55,0,0,0-.09.53V19.51a.81.81,0,1,1-1.61,0V17.84Zm0-1.79V8.28a3,3,0,0,1,.21-1.23A2.17,2.17,0,0,1,7.27,5.67,2.21,2.21,0,0,1,9.4,6.91a2.54,2.54,0,0,1,.24,1.14V11a2.42,2.42,0,0,1,2.79,1.07l.11.19v0a2.41,2.41,0,0,1,2.79,1.07l.07.1a2.53,2.53,0,0,1,1.49,0,2.91,2.91,0,0,1,1.73,1.93c.85,2.38-.67,8.83-2.25,11.74l-.23.42H7l-.22-.16a11.88,11.88,0,0,1-4.31-6c-.66-2.46.16-4.5,2.45-5.37ZM3.74,7.25a.63.63,0,0,1,0,1.26h-3a.63.63,0,0,1,0-1.26Zm10,0a.63.63,0,0,1,0,1.26h-3a.63.63,0,0,1,0-1.26ZM11.68,2.82a.62.62,0,1,1,.88.88l-2.1,2.11a.63.63,0,1,1-.89-.89Zm-5-1.57a.63.63,0,1,1,1.25,0v3a.63.63,0,1,1-1.25,0ZM2,3.7a.63.63,0,1,1,.89-.88L5,4.92a.62.62,0,0,1,0,.89.64.64,0,0,1-.89,0Z',
      transform: 'translate(-0.14 -0.63)'
    }
  ]
};

export const InteractiveIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
