import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { SbGlobalStyles } from '../lib/SbGlobalStyles';
import { ThemeBuilder } from '../lib/helpers';
import { modes } from './modes';

const preview: Preview = {
	decorators: [
		withThemeFromJSXProvider({
			themes: { light: ThemeBuilder.getLightTheme(), dark: ThemeBuilder.getDarkTheme() },
			defaultTheme: 'light',
			Provider: ThemeProvider,
			GlobalStyles: SbGlobalStyles,
		}),
	],
	parameters: {
		layout: 'fullscreen',
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
