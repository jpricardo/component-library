import type { Meta, StoryObj } from '@storybook/react';

import defaultDecorator from '../../defaultDecorator';

import { Typography } from '.';

const meta: Meta<typeof Typography.Label> = {
	title: 'Components/Typography/Label',
	component: Typography.Label,
	decorators: [defaultDecorator],
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
