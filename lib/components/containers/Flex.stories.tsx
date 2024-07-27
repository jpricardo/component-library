import type { Meta, StoryObj } from '@storybook/react';

import defaultDecorator from '../../defaultDecorator';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
	title: 'Components/Containers/Flex',
	component: Flex,
	decorators: [defaultDecorator],
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
