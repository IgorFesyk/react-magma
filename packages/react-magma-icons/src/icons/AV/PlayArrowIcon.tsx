import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z',
    },
  ],
  circles: [],
};

export const PlayArrowIcon = (props: IconProps) => renderIcon(props, iconType);
