import { IconProps } from '../../IconProps';
import { renderIcon } from '../../SvgIcon';
const iconType = {
  paths: [
    {
      d:
        'M20.573 12.9798h-1.4374c.0972-.257.3265-.8785.6877-1.8643l.0315-.094c.0277-.0696.0625-.1598.1045-.2706.042-.1108.0733-.201.0939-.2707l.1248.5729.395 1.9267zM5.531 12.3026l-.6043-3.073c-.0762-.375-.3366-.5624-.781-.5624H1.3538l-.021.1354c2.1599.5487 3.5591 1.7153 4.1977 3.5h.0005zm1.865-3.6354l-1.6876 4.5623-.1774-.927c-.1804-.486-.4756-.9358-.8854-1.3492-.41-.4134-.8647-.7206-1.3645-.9217l1.4065 5.3124h1.8229l2.7189-6.6768H7.396zm1.4478 6.6873h1.729l1.0832-6.6873h-1.729L8.844 15.3545zm7.9998-6.521c-.4791-.1875-.9965-.2812-1.5523-.2812-.854 0-1.5518.205-2.0935.6148-.5417.41-.8161.9412-.8231 1.5937-.007.7082.4964 1.3123 1.5102 1.8124.3333.1599.5659.3022.6977.427.1318.1249.1977.2602.1977.406 0 .2085-.1042.3681-.3126.479-.2085.1108-.448.1664-.7187.1668-.5973 0-1.139-.1146-1.6251-.3436l-.2293-.1143-.2397 1.4997c.5137.236 1.1561.354 1.9273.354.9026.007 1.6265-.1979 2.1717-.6148.5452-.4168.8249-.9724.8389-1.6665 0-.7362-.4862-1.3403-1.4584-1.8124-.3402-.1735-.5868-.3193-.7396-.4375-.1529-.1183-.2293-.2503-.2293-.3961 0-.1529.0852-.2866.2555-.4014.1703-.1147.4152-.172.7344-.172.4861-.007.9166.0764 1.2915.2502l.1564.0834.2403-1.4472zm4.4269-.1663H19.937c-.4515 0-.7537.1875-.9065.5624l-2.5626 6.125h1.8124l.3646-.9999h2.2085c.0346.1528.104.4861.2083.9998h1.6041l-1.3953-6.6873zM24 5.3335v13.3332c0 .3613-.132.6737-.396.9374-.2641.2637-.5766.3957-.9375.396H1.3335c-.3613 0-.6738-.132-.9374-.396-.2637-.264-.3957-.5765-.3961-.9374V5.3335c0-.3613.132-.6738.396-.9374.2641-.2637.5766-.3957.9375-.3961h21.333c.3613 0 .6738.132.9374.396.2637.2641.3957.5766.3961.9375z',
    },
  ],
  circles: [],
};

export const CcVisaIcon = (props: IconProps) => renderIcon(props, iconType);
