import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import defaultDecorator from '../../defaultDecorator';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'Components/Inputs/Input',
	component: Input,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {
		placeholder: 'placeholder',
		defaultValue: '',
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
	play: async ({ canvas, args }) => {
		const value = 'value';
		const element = canvas.getByPlaceholderText('placeholder');

		await userEvent.type(element, value, { delay: 100 });

		await expect(args.onChange).toHaveBeenCalled();
		await expect(args.onChange).toHaveBeenCalledTimes(value.length);
		await expect(canvas.getByDisplayValue(value)).toBeInTheDocument();
	},
};

export const Disabled: Story = {
	args: { disabled: true },
};

export const ReadOnly: Story = {
	args: { readOnly: true },
};

export const Password: Story = {
	args: { type: 'password' },
	play: async ({ canvas, args }) => {
		const value = 'value';
		const element = canvas.getByPlaceholderText('placeholder');

		await userEvent.type(element, value, { delay: 100 });

		await expect(args.onChange).toHaveBeenCalled();
		await expect(args.onChange).toHaveBeenCalledTimes(value.length);
	},
};

export const Number: Story = {
	args: { defaultValue: '10', type: 'number', min: 0, max: 100, step: 2 },
};
