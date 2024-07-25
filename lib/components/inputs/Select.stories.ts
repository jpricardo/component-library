import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import defaultDecorator from '../../defaultDecorator';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
	title: 'Components/Inputs/Select',
	component: Select,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {
		options: ['Option 1', 'Option 2', 'Option 3'],
		defaultValue: 'Option 1',
		disabled: false,
		onChange: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Disabled: Story = {
	args: { disabled: true },
};
