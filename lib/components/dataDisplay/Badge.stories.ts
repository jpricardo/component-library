import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent } from '@storybook/test';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
	title: 'Components/DataDisplay/Badge',
	component: Badge,
	parameters: { layout: 'centered' },
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
	play: async ({ canvas, args }) => {
		await userEvent.click(canvas.getByRole('button'));
		expect(args.onClose).toHaveBeenCalled();
	},
};

export const Primary: Story = {
	args: { variant: 'primary' },
};

export const PrimaryClosable: Story = {
	args: { variant: 'primary', closable: true },
	play: Closable.play,
};

export const Secondary: Story = {
	args: { variant: 'secondary' },
};

export const SecondaryClosable: Story = {
	args: { variant: 'secondary', closable: true },
	play: Closable.play,
};

export const Danger: Story = {
	args: { variant: 'danger' },
};

export const DangerClosable: Story = {
	args: { variant: 'danger', closable: true },
	play: Closable.play,
};
