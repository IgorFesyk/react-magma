/******************************************************
 * This file was created by scripts/generate.js as part
 * of the build process. Do not edit this file directly.
 ******************************************************/

import * as React from 'react';
import { IconProps } from '../../IconProps';
import { ExpandMoreIcon } from '../Navigation/ExpandMoreIcon';
export const AngleDownIcon = (props: IconProps) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      'AngleDownIcon has been deprecated, and will be removed in the next major release.  Please check the React Magma docs to find the new set of icons.  The newer icons have padding built in to them, so you may need to increase the icon size by 4px and/or adjust the spacing around the icon.'
    );
  }
  return <ExpandMoreIcon {...props} />;
};
