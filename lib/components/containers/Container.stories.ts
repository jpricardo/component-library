import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

const meta: Meta<typeof Container> = {
	title: 'Components/Containers/Container',
	component: Container,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: { children: 'Children' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
