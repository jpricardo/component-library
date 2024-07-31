import type { Meta, StoryObj } from '@storybook/react';

import defaultDecorator from '../../defaultDecorator';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
	title: 'Components/Layout/Divider',
	component: Divider,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Vertical: Story = {
	args: { vertical: true, style: { minHeight: '100px' } },
};
