import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import defaultDecorator from '../../defaultDecorator';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Inputs/Button',
	component: Button,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {
		children: 'Button',
		variant: 'default',
		disabled: false,
		loading: false,
		onClick: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	play: async ({ canvas, args }) => {
		await userEvent.click(canvas.getByRole('button'));
		expect(args.onClick).toHaveBeenCalled();
	},
};

export const Disabled: Story = {
	args: { disabled: true },
	play: async ({ canvas, args }) => {
		await userEvent.click(canvas.getByRole('button'));
		expect(args.onClick).not.toHaveBeenCalled();
	},
};

export const Loading: Story = {
	args: { loading: true },
	play: async ({ canvas, args }) => {
		await userEvent.click(canvas.getByRole('button'));
		expect(args.onClick).not.toHaveBeenCalled();
	},
};
