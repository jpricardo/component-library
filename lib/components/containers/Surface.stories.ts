import type { Meta, StoryObj } from '@storybook/react';

import { Surface } from './Surface';

const meta: Meta<typeof Surface> = {
	title: 'Components/Containers/Surface',
	component: Surface,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { children: 'Children' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
