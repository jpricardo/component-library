import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import defaultDecorator from '../../defaultDecorator';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
	title: 'Components/DataDisplay/Pagination',
	component: Pagination,
	decorators: [defaultDecorator],
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
