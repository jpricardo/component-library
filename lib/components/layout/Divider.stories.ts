import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
	title: 'Components/Layout/Divider',
	component: Divider,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { style: { minWidth: '100px' } },
};

export const Vertical: Story = {
	args: { vertical: true, style: { minHeight: '100px' } },
};
