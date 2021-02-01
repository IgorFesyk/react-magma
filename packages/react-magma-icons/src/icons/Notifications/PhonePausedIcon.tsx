import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M16 3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1zm3 1v5c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zm.23 11.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.0701-.87 2.0701-2v-1.73C21 16.23 20.24 15.38 19.23 15.26z',
    },
  ],
  circles: [],
};

export const PhonePausedIcon = (props: IconProps) =>
  renderIcon(props, iconType);
