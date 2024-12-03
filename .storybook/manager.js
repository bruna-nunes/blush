import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming';


addons.setConfig({
  theme: create({
    base: 'light', // 'dark'
    // Typography
    fontBase: '"Nunito Sans", sans-serif;',
    fontCode: 'monospace',

    brandTitle: 'Blush',
    brandUrl: '#',
    brandImage: '../src/assets/logos/blush-logo-primary.png',
    brandTarget: '_self',

    colorPrimary: '#D6A235',
    colorSecondary: '#D6A235',
 
    // UI
    appBg: '#FFF',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#82589F',
    appBorderRadius: 4,
    
    // Text colors
    textColor: '#82589F',
    textInverseColor: '#ffffff',
    
    // Toolbar default and active colors
    barTextColor: '#82589F',
    barSelectedColor: '#82589F',
    barHoverColor: '#82589F',
    barBg: '#FFF',
    
    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#82589F',
    inputTextColor: '#82589F',
    inputBorderRadius: 2,

  }),
})
