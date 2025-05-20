import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import { modes } from './modes';

import './preview.css';

const preview: Preview = {
	decorators: [
		withThemeByClassName({
			themes: { light: 'light', dark: 'dark' },
			defaultTheme: 'light',
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
