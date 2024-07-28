import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Badge } from './Badge';

import defaultDecorator from '../../defaultDecorator';

const meta: Meta<typeof Badge> = {
	title: 'Components/DataDisplay/Badge',
	component: Badge,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {
		variant: 'default',
		closable: false,
		children: 'Badge',
		onClose: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Closable: Story = {
	args: { closable: true },
};

export const Primary: Story = {
	args: { variant: 'primary' },
};

export const Danger: Story = {
	args: { variant: 'danger' },
};
