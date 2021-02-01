import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M22 5.929c-.5668.829-1.2521 1.5355-2.0558 2.1192.0084.1185.0127.2961.0127.533 0 1.0998-.1608 2.1976-.4823 3.2932-.3215 1.0956-.81 2.1468-1.4657 3.1535-.6557 1.0068-1.4361 1.8972-2.3414 2.6713-.9052.7742-1.9966 1.3917-3.2741 1.8528-1.2775.4611-2.6438.6917-4.099.6917-2.2927 0-4.3908-.6134-6.2944-1.8401.2961.0338.626.0507.9898.0507 1.9036 0 3.5999-.5837 5.0889-1.7513-.8883-.0169-1.6836-.2897-2.3858-.8185-.7022-.5287-1.1844-1.2035-1.4467-2.024.2792.0422.5372.0634.7741.0634.3638 0 .7234-.0466 1.0787-.1396-.9476-.1946-1.7322-.6663-2.354-1.415-.6219-.7487-.9328-1.618-.9328-2.6079v-.0507c.5753.3214 1.1929.4949 1.8528.5203-.5584-.3723-1.0026-.8587-1.3325-1.4594-.33-.6007-.495-1.2521-.495-1.9543 0-.7445.1862-1.434.5584-2.0686 1.0237 1.2606 2.2695 2.2695 3.7373 3.0267 1.4679.7572 3.0394 1.178 4.7145 1.2627-.0677-.3215-.1015-.6345-.1015-.9391 0-1.1337.3997-2.1003 1.1992-2.8998C13.745 4.3997 14.7115 4 15.8452 4c1.1844 0 2.1827.4315 2.9949 1.2944.9222-.1776 1.7893-.5076 2.6015-.9898-.313.9729-.9137 1.7259-1.802 2.2589.7868-.0847 1.5736-.2962 2.3604-.6346z',
    },
  ],
  circles: [],
};

export const TwitterIcon = (props: IconProps) => renderIcon(props, iconType);
