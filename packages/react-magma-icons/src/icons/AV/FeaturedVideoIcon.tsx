import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-10 9H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1z',
    },
  ],
  circles: [],
};

export const FeaturedVideoIcon = (props: IconProps) =>
  renderIcon(props, iconType);
