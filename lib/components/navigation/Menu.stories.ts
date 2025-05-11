import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
	title: 'Components/Navigation/Menu',
	component: Menu,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		items: [
			{ key: 1, label: 'Item 01' },
			{ key: 2, label: 'Item 02' },
			{ key: 3, label: 'Item 03' },
			{ key: 4, label: 'Item 04', disabled: true },
			{ key: 5, label: 'Item 05', hidden: true },
		],
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
