import type { Meta, StoryObj } from '@storybook/react';

import { Spin } from './Spin';

const meta: Meta<typeof Spin> = {
	title: 'Components/Feedback/Spin',
	component: Spin,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Small: Story = {
	args: { size: 'sm' },
};

export const Medium: Story = {
	args: { size: 'md' },
};

export const Large: Story = {
	args: { size: 'lg' },
};
