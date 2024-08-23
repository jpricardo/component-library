import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Snackbar } from './Snackbar';

const meta: Meta<typeof Snackbar> = {
	title: 'Components/Feedback/Snackbar',
	component: Snackbar,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		id: 'Snackbar',
		content: "Hello! I'm a Snackbar!",
		duration: false,
		closable: true,
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const NonClosable: Story = {
	args: { closable: false },
};

export const OnClickCallback: Story = {
	args: { onClick: fn() },
};

export const FixedDuration: Story = {
	args: { duration: 5000 },
};
