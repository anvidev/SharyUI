import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'SharyUI',
  brandUrl: 'https://landing.myshary.com/',
  brandImage:
    'https://myshary.com/_next/image?url=%2Fshary-logo-svg.svg&w=64&q=75',
  brandTarget: '_blank',

  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#d7ebe3',
  appBorderRadius: 4,

  // typography
  textColor: 'black',

  // toolbar
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: '#e7f7f0',

  // Form colors
  inputBg: 'white',
  inputBorder: '#9ea4c4',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});
