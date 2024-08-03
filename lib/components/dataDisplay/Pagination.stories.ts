import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
	title: 'Components/DataDisplay/Pagination',
	component: Pagination,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		pageAmmount: 5,
		currentPage: 0,
		onClick: fn(),
		onNextPage: fn(),
		onPreviousPage: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
