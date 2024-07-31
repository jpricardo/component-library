import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import defaultDecorator from '../../defaultDecorator';

import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
	title: 'Components/Inputs/CheckboxGroup',
	component: CheckboxGroup,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {
		name: 'CheckboxGroup',
		options: ['Option 1', 'Option 2', 'Option 3'],
		defaultValue: [],
		disabled: false,
		onChange: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	play: async ({ canvas, args }) => {
		const items = canvas.getAllByRole('checkbox');

		for (const item of items) {
			await userEvent.click(item, { delay: 100 });
			expect(args.onChange).toHaveBeenCalled();
		}
	},
};

export const Disabled: Story = {
	args: { disabled: true },
	play: async ({ canvas, args }) => {
		const items = canvas.getAllByRole('checkbox');

		for (const item of items) {
			await userEvent.click(item, { delay: 100 });
			expect(args.onChange).not.toHaveBeenCalled();
		}
	},
};
