import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

import defaultDecorator from '../../defaultDecorator';

import { Button } from '../inputs';
import { Flex } from '../layout';
import { Modal, ModalProps } from './Modal';

function TestComponent(storyArgs: ModalProps) {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	return (
		<>
			<Button onClick={onClick}>Open Modal</Button>

			<Modal
				{...storyArgs}
				open={isOpen}
				onClose={onClose}
				footer={
					<Flex justify='end' gap='0.25rem'>
						<Button variant='danger' onClick={onClose}>
							Close
						</Button>

						<Button variant='primary' onClick={() => alert('Something!')}>
							Do something!
						</Button>
					</Flex>
				}
			/>
		</>
	);
}

const meta: Meta<typeof Modal> = {
	title: 'Components/DataDisplay/Modal',
	component: Modal,
	decorators: [defaultDecorator],
	tags: ['autodocs'],
	render: (args) => <TestComponent {...args} />,
	args: {
		title: 'Title',
		children: 'I am a Modal!',
		onClose: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const NoCloseButton: Story = {
	args: { closeBtn: false },
};

export const NotClosableByMask: Story = {
	args: { maskClosable: false },
};

export const MaskOpacity: Story = {
	args: { maskOpacity: 0.25 },
};

export const Position: Story = {
	args: { style: { top: 0 } },
};

export const Width: Story = {
	args: { style: { width: '75%' } },
};
