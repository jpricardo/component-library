import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta: Meta<typeof Typography.Title> = {
	title: 'Components/Typography/Title',
	component: Typography.Title,
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
