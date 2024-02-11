import type { Preview } from '@storybook/react'

import { withThemeByClassName } from '@storybook/addon-styling';

import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },

  decorators: [// Adds theme switching support.
  // NOTE: requires setting "darkMode" to "class" in your tailwind config
  withThemeByClassName({
   themes: {
     light: 'light',
     dark: 'dark',
   },
   defaultTheme: 'light',
})]
};

export default preview;