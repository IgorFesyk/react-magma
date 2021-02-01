import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M20.8932 2c.3038 0 .5643.1085.7813.3255.217.217.3255.4775.3255.7813v17.7864c0 .3038-.1085.5643-.3255.7813-.217.217-.4775.3255-.7813.3255h-5.0911v-7.7474h2.5911l.3907-3.0208H15.802V9.3047c0-.4861.102-.8507.306-1.0938.204-.243.6011-.3645 1.1914-.3645l1.5885-.013V5.138c-.5469-.0781-1.3194-.1172-2.3177-.1172-1.1805 0-2.1246.3473-2.832 1.0417-.7075.6944-1.0612 1.6753-1.0612 2.9427v2.2266h-2.6042v3.0208h2.6042V22H3.1068c-.3038 0-.5643-.1085-.7813-.3255-.217-.217-.3255-.4775-.3255-.7813V3.1068c0-.3038.1085-.5643.3255-.7813.217-.217.4775-.3255.7813-.3255h17.7864z',
    },
  ],
  circles: [],
};

export const FacebookIcon = (props: IconProps) => renderIcon(props, iconType);
