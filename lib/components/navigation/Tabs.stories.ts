import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Navigation/Tabs',
	component: Tabs,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		defaultActiveKey: 1,
		items: [
			{ key: 1, label: 'Item 01', children: 'Children 01' },
			{ key: 2, label: 'Item 02', children: 'Children 02' },
			{ key: 3, label: 'Item 03', children: 'Children 03', disabled: true },
			{ key: 4, label: 'Item 04', children: 'Children 04', hidden: true },
		],
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
