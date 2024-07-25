import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta: Meta<typeof Typography.Body> = {
	title: 'Components/Typography/Body',
	component: Typography.Body,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		size: 'medium',
		children: 'Children',
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
