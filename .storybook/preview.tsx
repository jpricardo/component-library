import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { ThemeBuilder } from '../lib/helpers';
import { modes } from './modes';

const preview: Preview = {
	decorators: [
		withThemeFromJSXProvider<ReactRenderer>({
			themes: { light: ThemeBuilder.getLightTheme(), dark: ThemeBuilder.getDarkTheme() },
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
