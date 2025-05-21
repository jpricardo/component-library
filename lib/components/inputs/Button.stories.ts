import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Inputs/Button',
	component: Button,
	parameters: { layout: 'centered' },
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

export const Primary: Story = {
	args: { variant: 'primary' },
	play: Default.play,
};

export const PrimaryDisabled: Story = {
	args: { variant: 'primary', disabled: true },
	play: Disabled.play,
};

export const PrimaryLoading: Story = {
	args: { variant: 'primary', loading: true },
	play: Loading.play,
};

export const Danger: Story = {
	args: { variant: 'danger' },
	play: Default.play,
};

export const DangerDisabled: Story = {
	args: { variant: 'danger', disabled: true },
	play: Disabled.play,
};

export const DangerLoading: Story = {
	args: { variant: 'danger', loading: true },
	play: Loading.play,
};

export const Text: Story = {
	args: { variant: 'text' },
	play: Default.play,
};

export const TextDisabled: Story = {
	args: { variant: 'text', disabled: true },
	play: Disabled.play,
};

export const TextLoading: Story = {
	args: { variant: 'text', loading: true },
	play: Loading.play,
};
