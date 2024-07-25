import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../lib/themes';
import { modes } from './modes';

const preview: Preview = {
	decorators: [
		withThemeFromJSXProvider<ReactRenderer>({
			themes: { light: lightTheme, dark: darkTheme },
			defaultTheme: 'light',
			Provider: ThemeProvider,
		}),
	],
	parameters: {
		layout: 'fullscreen',
		actions: { argTypesRegex: '^on[A-Z].*' },
		chromatic: {
			modes: {
				light: modes.light,
				dark: modes.dark,
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
