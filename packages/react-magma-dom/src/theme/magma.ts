interface Colors {
  primary: string;
  foundation01: string;
  foundation02: string;
  foundation03: string;
  foundation04: string;
  pop01: string;
  pop02: string;
  pop03: string;
  pop04: string;
  success01: string;
  success02: string;
  danger: string;
  neutral01: string;
  neutral02: string;
  neutral03: string;
  neutral04: string;
  neutral05: string;
  neutral06: string;
  neutral07: string;
  neutral08: string;
  disabledText: string;
  disabledInverseText: string;
}

export interface ThemeInterface {
  bodyFont: string;
  headingFont: string;
  colors: Colors;
  sizeXs: string;
  sizeSm: string;
  sizeMd: string;
  sizeLg: string;
}

export const magma = {
  bodyFont: '"Open Sans", sans-serif',
  headingFont: 'gnuolane, sans-serif',

  colors: {
    primary: '#006298', // link color blue
    foundation01: '#003865',
    foundation02: '#006298',
    foundation03: '#00A9E0',
    foundation04: '#71C5E8',
    pop01: '#E0004D',
    pop02: '#FA6600',
    pop03: '#F2A900',
    pop04: '#FFC72C',
    success01: '#3A8200',
    success02: '#53BB00',
    danger: '#E70000',
    neutral01: '#00263E',
    neutral02: '#3F3F3F', // main dark grey text color
    neutral03: '#575757',
    neutral04: '#727272',
    neutral05: '#BFBFBF',
    neutral06: '#DFDFDF',
    neutral07: '#F7F7F7',
    neutral08: '#FFFFFF', // white
    disabledText: 'rgba(114, 114, 114, 0.6)',
    disabledInverseText: 'rgba(255, 255, 255, 0.25)'
  },

  // screen sizes
  sizeXs: '576px',
  sizeSm: '768px',
  sizeMd: '992px',
  sizeLg: '1200px'
};
