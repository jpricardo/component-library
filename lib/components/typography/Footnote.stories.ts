import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta: Meta<typeof Typography.Footnote> = {
	title: 'Components/Typography/Footnote',
	component: Typography.Footnote,
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
