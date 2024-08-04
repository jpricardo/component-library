import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta: Meta<typeof Typography.Headline> = {
	title: 'Components/Typography/Headline',
	component: Typography.Headline,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		variant: 'default',
		size: 'medium',
		children: 'Children',
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Primary: Story = {
	args: { variant: 'primary' },
};

export const Secondary: Story = {
	args: { variant: 'secondary' },
};

export const Danger: Story = {
	args: { variant: 'danger' },
};
