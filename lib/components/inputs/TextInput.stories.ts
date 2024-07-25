import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
	title: 'Components/Inputs/TextInput',
	component: TextInput,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		placeholder: 'placeholder',
		defaultValue: 'placeholder',
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
