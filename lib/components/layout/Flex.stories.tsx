import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
	title: 'Components/Layout/Flex',
	component: Flex,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		justify: 'center',
		align: 'center',
		gap: '1rem',
		vertical: false,
		children: (
			<>
				<span>Item</span>
				<span>Item</span>
				<span>Item</span>
				<span>Item</span>
			</>
		),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Vertical: Story = {
	args: { vertical: true },
};
