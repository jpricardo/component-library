import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { CurrencyInput } from './CurrencyInput';

const meta: Meta<typeof CurrencyInput> = {
	title: 'Components/Inputs/CurrencyInput',
	component: CurrencyInput,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { placeholder: 'placeholder', defaultValue: '', step: 1, disabled: false, onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	play: async ({ canvas, args }) => {
		const value = '100';
		const element = canvas.getByPlaceholderText('placeholder');

		await userEvent.type(element, value, { delay: 100 });

		await expect(args.onChange).toHaveBeenCalled();
		await expect(args.onChange).toHaveBeenCalledTimes(value.length);
		await expect(canvas.getByDisplayValue(value, { exact: false })).toBeInTheDocument();
	},
};

export const Disabled: Story = { args: { disabled: true } };
