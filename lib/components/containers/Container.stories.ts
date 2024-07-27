import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

const meta: Meta<typeof Container> = {
	title: 'Components/Containers/Container',
	component: Container,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		variant: 'default',
		children: 'Children',
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Primary: Story = {
	args: { variant: 'primary' },
};

export const Danger: Story = {
	args: { variant: 'danger' },
};

export const ExtraSmallShadow: Story = {
	args: { shadow: 'xs' },
};

export const SmallShadow: Story = {
	args: { shadow: 'sm' },
};

export const MediumShadow: Story = {
	args: { shadow: 'md' },
};

export const LargeShadow: Story = {
	args: { shadow: 'lg' },
};

export const ExtraLargeShadow: Story = {
	args: { shadow: 'xl' },
};