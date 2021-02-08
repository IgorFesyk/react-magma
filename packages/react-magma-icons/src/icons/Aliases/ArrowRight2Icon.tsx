import * as React from 'react';
import { IconProps } from '../../IconProps';
import { EastIcon } from '../Navigation/EastIcon';
export const ArrowRight2Icon = (props: IconProps) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('ArrowRight2Icon has been deprecated');
  }
  return <EastIcon {...props} />;
};
