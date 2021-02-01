import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M9.2 2.13c.21-.57.9-.8 1.43-.5.42.24.6.75.43 1.21-.83 2.24.05 4.83 2.18 6.07.8857.5113 2.3215 1.3394 2.5645 1.4795l.0355.0205c2.61 2.2 3.17 5.42 2.2 8.04-.22.58-.91.81-1.44.5-.41-.24-.6-.75-.43-1.2.6-1.6.32-3.38-.66-4.72L9.72 23.05c-.28.48-.89.65-1.37.37-.48-.28-.65-.89-.37-1.37l2.5-4.33-1.73-1-1 1.73c-.28.48-.89.65-1.37.37-.48-.28-.65-.89-.37-1.37l4.65-8.05C8.85 7.48 8.25 4.64 9.2 2.13zM14.27 6c.55-.95 1.78-1.28 2.73-.73s1.28 1.78.73 2.73-1.78 1.28-2.73.73-1.28-1.78-.73-2.73zM12.2 1.75c.42-.72 1.33-.96 2.05-.55.72.42.96 1.33.55 2.05-.42.72-1.33.96-2.05.55-.72-.41-.96-1.33-.55-2.05z',
    },
  ],
  circles: [],
};

export const SportsHandballIcon = (props: IconProps) =>
  renderIcon(props, iconType);
