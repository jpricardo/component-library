import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import defaultDecorator from '../../defaultDecorator';

import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
	title: 'Components/Inputs/TextInput',
	component: TextInput,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {
		placeholder: 'placeholder',
		defaultValue: 'Value',
		type: 'text',
		disabled: false,
		readOnly: false,
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

export const ReadOnly: Story = {
	args: { readOnly: true },
};

export const Password: Story = {
	args: { type: 'password' },
};

export const Number: Story = {
	args: { defaultValue: '10', type: 'number', min: 0, max: 100, step: 2 },
};
