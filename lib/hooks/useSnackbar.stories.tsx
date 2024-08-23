import type { Meta, StoryObj } from '@storybook/react';

import { Button, Snackbar, SnackbarProps } from '../components';
import { useSnackbar } from './useSnackbar';

function TestComponent(props: SnackbarProps) {
	const [snackbar, contextHolder] = useSnackbar();

	const onClick = () => snackbar.add(props);

	return (
		<>
			<Button onClick={onClick}>New Snackbar</Button>
			{contextHolder}
		</>
	);
}

const meta: Meta<typeof Snackbar> = {
	title: 'Hooks/useSnackbar',
	component: TestComponent,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	args: {
		id: 'Snackbar',
		content: "Hello! I'm a Snackbar!",
		duration: 5000,
		closable: true,
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
