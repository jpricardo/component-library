import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

type ItemType = { id: number; firstName: string; lastName: string; age: number; active: boolean };

const meta: Meta<typeof Table<ItemType>> = {
	title: 'Components/DataDisplay/Table',
	component: Table<ItemType>,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		rowKey: 'id',
		items: [
			{ id: 1, firstName: 'John', lastName: 'Doe', age: 69, active: true },
			{ id: 2, firstName: 'Jane', lastName: 'Doe', age: 68, active: false },
			{ id: 3, firstName: 'João', lastName: 'Pedro', age: 24, active: true },
			{ id: 4, firstName: 'Zé', lastName: 'da Silva', age: 42, active: true },
		],
		columns: [
			{ key: 'id', title: 'ID' },
			{ key: 'firstName', title: 'First Name' },
			{ key: 'lastName', title: 'Last Name' },
			{ key: 'age', title: 'Age' },
			{ key: 'active', title: 'Active', render: (value) => (value ? 'Yes' : 'No') },
		],
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
