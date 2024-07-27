import type { Meta, StoryObj } from '@storybook/react';

import defaultDecorator from '../../defaultDecorator';

import { Spin } from './Spin';

const meta: Meta<typeof Spin> = {
	title: 'Components/Feedback/Spin',
	component: Spin,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
