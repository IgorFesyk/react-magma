import * as React from 'react';
  import { IconProps, renderIcon } from '../utils';

  const iconType = {"viewBox":"0 0 18 26","paths":[{"d":"M18,12v2a8.69,8.69,0,0,1-2.31,6A8.74,8.74,0,0,1,10,22.94V25h4a1,1,0,0,1,1,1,.94.94,0,0,1-.3.7,1,1,0,0,1-.7.3H4a1,1,0,0,1,0-2H8V22.94A8.76,8.76,0,0,1,2.3,20,8.68,8.68,0,0,1,0,14V12a1,1,0,0,1,.29-.7A1,1,0,0,1,1,11a1,1,0,0,1,.7.3A.94.94,0,0,1,2,12v2a6.7,6.7,0,0,0,2.05,4.94A6.75,6.75,0,0,0,9,21a6.71,6.71,0,0,0,4.94-2.06A6.73,6.73,0,0,0,16,14V12a1,1,0,0,1,1-1,1,1,0,0,1,.7.3A.94.94,0,0,1,18,12ZM14,6v8a4.8,4.8,0,0,1-1.47,3.53A4.82,4.82,0,0,1,9,19a4.79,4.79,0,0,1-3.53-1.47A4.82,4.82,0,0,1,4,14V6A4.8,4.8,0,0,1,5.47,2.47,4.79,4.79,0,0,1,9,1a4.82,4.82,0,0,1,3.53,1.47A4.82,4.82,0,0,1,14,6Z","transform":"translate(0 -1)"}]}
  
  export const MicrophoneIcon: React.FunctionComponent<IconProps> = (props: IconProps) =>
    renderIcon(props, iconType);