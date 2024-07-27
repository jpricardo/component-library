import type { Meta, StoryObj } from '@storybook/react';

import defaultDecorator from '../../defaultDecorator';

import { Typography } from '.';

const meta: Meta<typeof Typography.Footnote> = {
	title: 'Components/Typography/Footnote',
	component: Typography.Footnote,
	decorators: [defaultDecorator],
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

export const Danger: Story = {
	args: { variant: 'danger' },
};
